import { useState } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Grips = ({ account }) => {
  const [gripQuery, setGripQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar selected="/grips" username={account.username} />

      <div className="flex justify-center pt-10">
        <div className="w-[40%] flex flex-col gap-5">
          <input
            type="text"
            className="w-full bg-white !outline-none py-2 px-2 border-2 border-gray-400 rounded-sm"
            placeholder="Search Grips"
            value={gripQuery}
            onChange={(e) => {
              setGripQuery(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex-1" />

      <Footer />
    </div>
  );
};

export default Grips;
