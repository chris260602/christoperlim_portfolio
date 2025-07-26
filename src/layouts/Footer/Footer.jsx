import Chris from "../../assets/images/Chris.png";
import classes from "./Footer.module.css";
import GithubIcon from "../../assets/icons/GithubIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={Chris} alt="Chris" className={classes.footerLogo} />
      <p className="subhead1">Christoper Lim © 2025</p>
      <div className={classes.iconContainer}>
        <a
          href="https://www.linkedin.com/in/christoperlim1/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/christoperlim02/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <InstagramIcon />
        </a>
        <a
          href="https://github.com/chris260602"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <GithubIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
