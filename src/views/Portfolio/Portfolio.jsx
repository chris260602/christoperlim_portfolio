import Masonry from "react-masonry-css";

import classes from "./Portfolio.module.css";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import data from "../../data/portfolioData.json";
import portfolioType from "../../data/portfolioType.json";
import PortfolioFilterButton from "../../components/PortfolioFilterButton/PortfolioFilterButton";
import { useEffect, useState } from "react";
import NotFoundTextIcon from "../../assets/icons/NotFoundTextIcon";
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  900: 2,
  550: 1,
};

const Portfolio = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  useEffect(() => {
    if (activeFilter !== "") {
      handleFilterPortfolioData();
      return;
    }
    setFilteredData(data);
  }, [activeFilter]);
  const handleSetFilter = (filter) => {
    setActiveFilter(filter);
  };
  const handleFilterPortfolioData = () => {
    const filteredPortfolioData = data.filter(
      (item) => item.type === activeFilter
    );
    setFilteredData(filteredPortfolioData);
  };
  const portfolioData = filteredData.map((item) => (
    <PortfolioCard
      key={item.title + item.type}
      title={item.title}
      image={item.image}
      link={item.link}
      type={item.type}
      desc={item.desc}
    />
  ));
  const portfolioFilter = portfolioType.map((type) => (
    <PortfolioFilterButton
      key={type.type + (type.type ? "true" : "false")}
      text={type.type}
      active={activeFilter === type.type ? true : false}
      handleClick={handleSetFilter}
    />
  ));
  return (
    <div className={classes.portfolioContainer}>
      <h1>My Portfolio</h1>
      <div>
        <div>
          {portfolioFilter}
          <div className="filterLine"></div>
        </div>
        {filteredData.length === 0 ? (
          <div className={classes.notFoundContainer}>
            <NotFoundTextIcon />
            <h2>Data not found</h2>
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {portfolioData}
          </Masonry>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
