import { useEffect, useState } from "react";
import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";
import classes from "./DarkModeToggle.module.css";
const DarkModeToggle = () => {
  const [active, setActive] = useState<String>("false");
  useEffect(() => {
    const darkMode = localStorage.getItem("dark");
    if (darkMode === "true") {
      setActive("true");
      changeLightModeCSS(false);
    } else if (darkMode === "false") {
      setActive("false");
      changeLightModeCSS(true);
    }
  }, []);
  const changeLightModeCSS = (notDark: boolean) => {
    if (notDark === true) {
      localStorage.setItem("dark", "false");
      document.getElementsByTagName("body")[0].classList.remove("dark");
      document.getElementsByTagName("header")[0].classList.remove("dark");
    }
    if (notDark === false) {
      localStorage.setItem("dark", "true");
      document.getElementsByTagName("body")[0].classList.add("dark");
      document.getElementsByTagName("header")[0].classList.add("dark");
    }
  };
  const handleDarkMode = () => {
    setActive((prevState) => {
      changeLightModeCSS(prevState);
      return !prevState;
    });
  };
  return (
    <div className={classes.togglePill} onClick={() => handleDarkMode("auto")}>
      <div
        className={`${classes.toggleButton} ${active ? classes.dark : ""}`}
        id="toggleBtn"
      ></div>
      <div className={classes.toggleIconContainer}>
        <SunIcon />
        <MoonIcon />
      </div>
    </div>
  );
};

export default DarkModeToggle;
