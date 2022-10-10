import { useState } from "react";
import Modal from "../Modal/Modal";
import PortfolioBadge from "../PortfolioBadge/PortfolioBadge";
import classes from "./PortfolioCard.module.css";
const PortfolioCard = ({ title, image, link, type, desc }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (e) => {
    e.preventDefault();
    setModalVisible((prevState) => {
      if (prevState === false) {
        setModalData({
          image: image,
          type: type,
          title: title,
          desc: desc,
          link: link,
        });
      }
      return true;
    });
  };
  const closeModal = () => {
    if (modalVisible === true) {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "0";
    }
    setModalVisible(false);
  };
  return (
    <>
      {modalVisible ? (
        <Modal
          title={modalData.title}
          image={modalData.image}
          desc={modalData.desc}
          type={modalData.type}
          link={modalData.link}
          manage={closeModal}
        />
      ) : (
        ""
      )}
      <div className={classes.cardContainer}>
        <div className={classes.imageContainer}>
          <img src={image} alt={title} />
        </div>
        <div
          className={`${classes.contentContainer} ${
            link ? classes.haveLink : ""
          }`}
        >
          {type ? <PortfolioBadge text={type} /> : ""}

          <h4 className={classes.contentTitle}>{title}</h4>

          <p className={classes.link} onClick={openModal}>
            More Info
          </p>
        </div>
      </div>
    </>
  );
};
export default PortfolioCard;
