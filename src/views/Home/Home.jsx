import Typewriter from "typewriter-effect";
import SimpleButton from "../../components/SimpleButton/SimpleButton";
import SimpleLink from "../../components/SimpleLink/SimpleLink";
import home_1 from "../../assets/images/home_1.png";
import home_2 from "../../assets/images/home_2.png";
import home_3 from "../../assets/images/home_3.png";
import classes from "./Home.module.css";
import { useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ImageBox from "../../components/ImageBox/ImageBox";
import certificateData from "../../data/certificateData.json";
const Home = () => {
  const aboutUsRef = useRef(null);
  const executeScroll = () => aboutUsRef.current.scrollIntoView();
  const fetchCertificate = (data) => {
    try {
      return require(`../../assets/certification/${data}.jpg`);
    } catch {
      return "";
    }
  };
  const certificatesList = certificateData.map((data) => {
    const image = fetchCertificate(data.image);
    return (
      <SwiperSlide className={classes.certificates} key={data.text}>
        <ImageBox image={image} text={data.text} />
      </SwiperSlide>
    );
  });
  return (
    <>
      <section>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          className={classes.mainContainer}
        >
          <div className={classes.mainContainerImage}>
            <img src={home_1} alt="Christoper" />
          </div>
          <div className={classes.mainContainerContent}>
            <div>
              <h1>Hi There, I’m Christoper Lim</h1>

              <h3>
                I’m A{" "}
                <Typewriter
                  options={{
                    strings: [
                      "Fullstack Engineer",
                      "Undergraduate Student",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
            </div>

            <div className={classes.buttonContainer}>
              <SimpleButton
                to={"/Christoper_Lim_CV.pdf"}
                newTab={true}
                text={"See My CV"}
              />
              <SimpleLink text={"Know More"} onClick={executeScroll} />
            </div>
          </div>
        </AnimationOnScroll>
      </section>

      <section ref={aboutUsRef} className={classes.aboutSection}>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          className={classes.aboutContainer}
        >
          <div className={classes.aboutContainerContent}>
            <h2>About Me</h2>
            <p className={"p1"}>
              I’m Christoper Lim, a student at Bina Nusantara university,
              majoring in Computer Science. Building websites using ReactJS or NuxtJS and using Laravel to make APIs. But
              i also like to explore new technologies that i can use to make my
              development experience much easier and enjoyable.
              <br />
              <br />
              By Challenging myself to create something that i’ve never made
              before. I am able to improve and learn new skills.
              <br />
              <br />
              Besides making websites, i also enjoy traveling and photography.
            </p>
          </div>
          <div className={classes.aboutContainerImage}>
            <img src={home_2} alt="About" />
          </div>
        </AnimationOnScroll>
      </section>

      <section>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          className={classes.portfolioContainer}
        >
          <div className={classes.portfolioContainerImage}>
            <img src={home_3} alt="Portfolio" />
          </div>
          <div className={classes.portfolioContainerContent}>
            <h2>Portfolio</h2>
            <p className={`p1`}>
              Some of my achievements and projects that i have done.
            </p>
            <SimpleButton to={"/Portfolio"} text={"See my Portfolio"} />
          </div>
        </AnimationOnScroll>
      </section>

      <section>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          className={classes.certificatesContainer}
        >
          <h2>My Certificates</h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            className={classes.certificatesBox}
          >
            {certificatesList}
          </Swiper>
        </AnimationOnScroll>
      </section>
    </>
  );
};
export default Home;
