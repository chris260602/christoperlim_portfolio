import classes from "./PortfolioFilterButton.module.css";
const PortfolioFilterButton = ({ text, active, handleClick, disable }) => {
  const handleButtonClick = () => {
    if (active) {
      handleClick("");
      return;
    }
    handleClick(text);
  };
  return (
    <p
      className={`p1 ${classes.filterButton} ${active ? classes.active : ""}`}
      onClick={disable ? undefined : handleButtonClick}
    >
      {text}
    </p>
  );
};
export default PortfolioFilterButton;
