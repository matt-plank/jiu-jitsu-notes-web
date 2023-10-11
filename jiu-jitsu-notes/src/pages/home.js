import { Link } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/nav/navbar";

const Home = ({ account }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar username={account.username} />

      <div className="flex flex-col items-center">
        <div className="h-28"></div>

        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-black text-gray-800 mx-5">
            Jiu Jitsu Study
            <br />
            Done Better.
          </h1>

          <h2 className="italic text-gray-500 mx-5">
            Redefining how we study and explore the sport of{" "}
            <a
              href="https://en.wikipedia.org/wiki/Brazilian_jiu-jitsu"
              className="text-gray-800 underline"
              target="_blank"
              rel="noreferrer"
            >
              Brazilian Jiu Jitsu
            </a>
            .
          </h2>

          <div className="flex gap-2 mx-5">
            <Link
              className="px-5 py-2 bg-gray-800 text-white rounded-md"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="px-5 py-2 bg-gray-800 text-white rounded-md"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1" />

      <Footer />
    </div>
  );
};

export default Home;
