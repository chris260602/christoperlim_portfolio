import { Link } from "react-router-dom";
import classes from "./SimpleLink.module.css";
const SimpleLink = (props) => {
  return (
    <Link
      to={props.to ? props.to : ""}
      className={classes.SimpleLink}
      onClick={props.onClick ? props.onClick : ""}
    >
      {props.text}
    </Link>
  );
};

export default SimpleLink;
