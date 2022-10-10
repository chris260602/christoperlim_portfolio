import SimpleButton from "../../components/SimpleButton/SimpleButton";
import classes from "./NotFound.module.css";
import notFoundImage from "../../assets/images/notFound.png";
const NotFound = () => {
  return (
    <div className={classes.notFoundContainer}>
      <div className={classes.notFoundContent}>
        <h2>Page Not Found</h2>
        <p>Sorry. The content you’re looking for doesn’t exist.</p>
        <SimpleButton to={"Home"} text={"Go Back"} />
      </div>
      <div className={classes.notFoundImageContainer}>
        <img src={notFoundImage} alt="NOT FOUND" />
      </div>
    </div>
  );
};
export default NotFound;
