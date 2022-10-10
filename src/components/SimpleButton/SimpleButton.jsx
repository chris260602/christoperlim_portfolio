import { Link } from "react-router-dom";
import classes from "./SimpleButton.module.css";
const SimpleButton = (props) => {
  const { to, text, newTab } = props;
  return (
    <div>
      <Link
        to={to}
        target={newTab ? "_blank" : ""}
        rel="noreferrer"
        className={classes.link}
      >
        {text}
      </Link>
    </div>
  );
};

export default SimpleButton;
