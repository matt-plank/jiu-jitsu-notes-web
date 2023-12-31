import { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import EditDetailsColumn from "../components/editDetailsColumn";
import EditSubmissionsColumn from "../components/editSubmissionsColumn";
import Footer from "../components/footer";
import NavBar from "../components/nav/navbar";
import SaveBanner from "../components/saveBanner";
import TechniqueEditorColumn from "../components/techniqueEditorColumn";
import useAllPositions from "../hooks/useAllPositions";
import usePosition from "../hooks/usePosition";
import useSubmissions from "../hooks/useSubmissions";
import useTechniques from "../hooks/useTechniques";

const Positions = ({ account, grips }) => {
  const positions = useAllPositions();
  const [selectedPosition, setSelectedPosition] = useState();

  const position = usePosition(selectedPosition);
  const techniques = useTechniques(
    selectedPosition?.techniques,
    selectedPosition?.id
  );
  const submissions = useSubmissions(
    selectedPosition?.submissions,
    selectedPosition?.id
  );

  useHotkeys(
    "escape",
    () => {
      setSelectedPosition();
    },
    {
      preventDefault: true,
      enableOnContentEditable: true,
      enableOnFormTags: true,
    }
  );

  const savePositionDetails = async () => {
    await position.save();

    for (let i = 0; i < techniques.techniques.length; i++) {
      await techniques.saveByIndex(i);
    }

    for (let i = 0; i < submissions.submissions.length; i++) {
      await submissions.saveByIndex(i);
    }

    await positions.refreshPositions();
  };

  const deletePosition = async () => {
    await position.remove();
    await positions.refreshPositions();

    setSelectedPosition();
  };

  useEffect(() => {
    if (!position.position.id.value) return;

    const currentPosition = positions.positionList.filter(
      (p) => p.id === position.position.id.value
    )[0];

    setSelectedPosition(currentPosition);
  }, [positions.positionList]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar username={account.username} />

      {position.saved && <SaveBanner />}

      <div className="flex p-5 gap-5 justify-center flex-wrap">
        <EditDetailsColumn
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          positions={positions}
          savePositionDetails={savePositionDetails}
          deletePosition={deletePosition}
          position={position}
          grips={grips.grips}
        />

        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <TechniqueEditorColumn
            techniques={techniques}
            position={position}
            positions={positions}
            setSelectedPosition={setSelectedPosition}
          />

          <EditSubmissionsColumn submissions={submissions} />
        </div>
      </div>

      <div className="flex-1" />

      <Footer />
    </div>
  );
};

export default Positions;
