import DarkLogo from "./dark.png";
import LightLogo from "./light.png";

const Logo = ({ dark, className }) => {
  return (
    <div className={`flex justify-center h-6 items-center ${className}`}>
      <img
        className="h-full pixelated"
        src={dark ? DarkLogo : LightLogo}
        alt="Jiu Jitsu Notes Logo"
      />
    </div>
  );
};

export default Logo;
