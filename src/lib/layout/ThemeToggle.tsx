import { IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { Howl, Howler } from "howler";

import switchOffSound from "../../../public/switch-off.mp3";
import switchOnSound from "../../../public/switch-on.mp3";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const soundConfig = {
    src: isDarkMode ? [switchOnSound] : [switchOffSound],
    volume: 1.0, // Adjust the volume if needed
  };

  const handleClick = () => {
    // Initialize Howler.js
    Howler.volume(1.0); // Adjust the global volume if needed
    new Howl(soundConfig).play();
    toggleColorMode();
  };

  return (
    <>
      <IconButton
        aria-label="theme toggle"
        icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
        onClick={handleClick}
      />
    </>
  );
};

export default ThemeToggle;
