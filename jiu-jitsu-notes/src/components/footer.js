import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 px-5 py-3 flex gap-10 justify-center items-center text-gray-400 mt-10 text-sm">
      <p>Site by Matt Plank</p>
      <a
        href="https://www.linkedin.com/in/matt-t-p/"
        className="hover:text-white duration-100 flex gap-1 items-center"
      >
        <AiFillLinkedin />
        LinkedIn
      </a>
      <a
        href="https://github.com/matt-plank"
        className="hover:text-white duration-100 flex gap-1 items-center"
      >
        <AiOutlineGithub />
        GitHub
      </a>
    </div>
  );
};

export default Footer;
