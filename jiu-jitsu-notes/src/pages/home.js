import Footer from "../components/footer";
import NavBar from "../components/nav/navbar";

const Home = ({ account }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar username={account.username} />

      <div className="flex justify-center px-10">
        <div className="flex flex-col mt-10 gap-5 w-full max-w-2xl pb-10">
          <h1 className="text-2xl">Jiu Jitsu Notes</h1>

          <hr className="border-gray-800" />

          <p className="text-gray-500 italic">
            Simplifying the process of conceptualising and memorising complex
            techniques and transitions in the sport of Jiu Jitsu.
          </p>

          <h2 className="text-lg pl-2">Creating / Editing Positions</h2>

          <p>
            Positions are created and edited in the "Edit Positions" tab. To
            create, fill out the form and click "Save Position Details", or{" "}
            <code>"ctrl+s"</code> on the keyboard.
          </p>

          <p>
            Similarly, to edit positions: select a position from the drop down,
            edit the necessary details and follow the same procedure to save.
          </p>

          <h2 className="text-lg pl-2">Self Testing</h2>

          <p>
            To self teset, navigate to the "Learn Positions" tab. Select a
            position, and try to remember the techniques associated with that
            position.
          </p>

          <p>
            Selecting a technique from the list of techniques you have
            successfully guessed will navigate you to the relevant position that
            technique moves to.
          </p>
        </div>
      </div>

      <div className="flex-1" />

      <Footer />
    </div>
  );
};

export default Home;
