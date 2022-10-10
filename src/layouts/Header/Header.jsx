import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ExitIcon from "../../assets/icons/ExitIcon";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import Chris from "../../assets/images/Chris.png";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";
import classes from "./Header.module.css";
const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const handleNavbarClick = () => {
    setNavActive((prevState) => !prevState);
  };
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <Link to={"/Home"}>
            <img src={Chris} alt="Chris" />
          </Link>
          <div
            className={`${classes.navigationContainer} ${
              navActive ? classes.active : ""
            }`}
          >
            <ul id={navActive ? "navActive" : ""}>
              <li>
                <NavLink
                  to={"/Home"}
                  className={({ isActive }) =>
                    isActive ? classes.activeLink : ""
                  }
                  onClick={navActive ? () => setNavActive(false) : ""}
                >
                  <h5>Home</h5>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Portfolio"}
                  className={({ isActive }) =>
                    isActive ? classes.activeLink : ""
                  }
                  onClick={navActive ? () => setNavActive(false) : ""}
                >
                  <h5>Portfolio</h5>
                </NavLink>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=08994839789"
                  target={"_blank"}
                  rel="noreferrer"
                  onClick={navActive ? () => setNavActive(false) : ""}
                >
                  <h5 className={classes.contactButton}>Contact Me</h5>
                </a>
              </li>
              <li>
                <DarkModeToggle />
              </li>
            </ul>
          </div>
          <div className={classes.hamburgerWrapper} onClick={handleNavbarClick}>
            {navActive ? <ExitIcon /> : <HamburgerIcon />}
          </div>
        </div>
      </header>
      <div className={classes.headerGuard}></div>
    </>
  );
};

export default Header;
