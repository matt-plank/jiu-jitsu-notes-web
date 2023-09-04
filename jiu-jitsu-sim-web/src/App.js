import Card from "./components/card";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row gap-5 justify-around p-5">
        <Card
          title="From Position"
          aspect="Playing"
          position="Closed Guard"
          yourGrips="Shoulder Crunch"
          theirGrips=""
        />

        <Card
          title="To Position"
          aspect="Top"
          position="Mount"
          yourGrips="Underhook"
          theirGrips=""
        />
      </div>
    </>
  );
}

export default App;
