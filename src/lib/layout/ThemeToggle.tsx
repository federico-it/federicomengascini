import { IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import useSound from "use-sound";

import switchOffSound from "../../../public/switch-off.mp3";
import switchOnSound from "../../../public/switch-on.mp3";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const [play] = useSound(isDarkMode ? switchOnSound : switchOffSound);
  const handleClick = () => {
    toggleColorMode();
    play();
  };

  return (
    /* eslint-disable */
    <IconButton
      aria-label="theme toggle"
      icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
      onClick={handleClick}
    />
  );
};

export default ThemeToggle;
