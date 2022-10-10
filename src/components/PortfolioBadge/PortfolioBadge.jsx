import classes from "./PortfolioBadge.module.css";
const PortfolioBadge = ({ text }) => {
  return <p className={`p1 ${classes.portfolioBadge} `}>{text}</p>;
};

export default PortfolioBadge;
