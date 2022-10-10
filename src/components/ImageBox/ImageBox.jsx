import classes from "./ImageBox.module.css";
const ImageBox = (props) => {
  const { image, text } = props;
  return (
    <div className={classes.imageBoxContainer}>
      <img src={image} alt="Certificate" />
      <p>{text}</p>
    </div>
  );
};
export default ImageBox;
