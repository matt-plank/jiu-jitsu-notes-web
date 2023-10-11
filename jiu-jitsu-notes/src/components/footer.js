import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-white px-5 py-3 flex gap-10 justify-center items-center text-gray-800 mt-10 text-sm">
      <p>Site by Matt Plank</p>
      <a
        href="https://www.linkedin.com/in/matt-t-p/"
        className="hover:underline flex gap-1 items-center"
      >
        <AiFillLinkedin className="mt-0.5" />
        LinkedIn
      </a>
      <a
        href="https://github.com/matt-plank"
        className="hover:underline flex gap-1 items-center"
      >
        <AiOutlineGithub className="mt-0.5" />
        GitHub
      </a>
    </div>
  );
};

export default Footer;
