import { useState } from "react";
import ActionButton from "../components/actionButton";
import EditableGripCard from "../components/editableGripCard";
import Footer from "../components/footer";
import NavBar from "../components/nav/navbar";

const Grips = ({ account, grips }) => {
  const [gripQuery, setGripQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar username={account.username} />

      <div className="flex justify-center">
        <div className="flex flex-col gap-5 w-full max-w-3xl p-5">
          <div className="flex gap-2 flex-wrap">
            <input
              type="text"
              className="flex-1 bg-white !outline-none p-3 rounded-md shadow-sm"
              placeholder="Search Grips"
              value={gripQuery}
              onChange={(e) => {
                setGripQuery(e.target.value);
              }}
            />

            <div className="flex-1 flex gap-2">
              <ActionButton
                onClick={() => {
                  if (gripQuery === "") return;
                  grips.pushNew(gripQuery);
                }}
                className="flex-1"
              >
                Create
              </ActionButton>

              <ActionButton
                onClick={grips.save}
                hotkeys="ctrl+s"
                className="flex-1"
              >
                Save
              </ActionButton>
            </div>
          </div>

          <hr className="border border-gray-200" />

          <div className="flex flex-col gap-2">
            {grips.grips
              .filter(
                (grip) =>
                  grip.name.toLowerCase().indexOf(gripQuery.toLowerCase()) !==
                  -1
              )
              .map((grip, i) => (
                <EditableGripCard
                  gripName={grip.name}
                  onGripNameChange={(e) => {
                    grips.setNameByIndex(i, e.target.value);
                  }}
                  onDelete={() => {
                    grips.deleteById(grip.id);
                  }}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="flex-1" />

      <Footer />
    </div>
  );
};

export default Grips;
