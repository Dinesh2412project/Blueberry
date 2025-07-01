import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slidesData from "../../../src/assets/DataStorage/HeroData";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hero = () => {
  return (
    <div className="hero-section">
      <Carousel responsive={responsive}>
        {slidesData.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <div className="slide-content">
              <p className="offer-text">{slide.offer}</p>
              <h1 className="slide-title">{slide.title}</h1>
              <button className="shop-button">shop now</button>
            </div>
            <div className="slide-image">
              <img src={slide.img} loading="lazy" alt={`slide-${index}`} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );

  {
    /* <div className="hero-section">
      <Carousel responsive={responsive}>
       <div className="hero-slide">
          <div className="slide-content">
            <p className="offer-text">flat 30% off</p>
            <h1 className="slide-title">explore ware fast food & snacks</h1>
            <button className="shop-button">shop now</button>
          </div>
          <div className="slide-image">
            <img
              src="https://blueberry-react-next.maraviyainfotech.com/assets/img/hero/hero-3.png"
              alt="img"
            />
          </div>
        </div>

        <div className="hero-slide">
          <div className="slide-content">
            <p className="offer-text">flat 30% off</p>
            <h1 className="slide-title">explore ware fast food & snacks</h1>
            <button className="shop-button">shop now</button>
          </div>
          <div className="slide-image">
            <img
              src="https://blueberry-react-next.maraviyainfotech.com/assets/img/hero/hero-1.png"
              alt="img"
            />
          </div>
        </div>

        <div className="hero-slide">
          <div className="slide-content">
            <p className="offer-text">flat 30% off</p>
            <h1 className="slide-title">explore ware fast food & snacks</h1>
            <button className="shop-button">shop now</button>
          </div>
          <div className="slide-image">
            <img
              src="https://blueberry-react-next.maraviyainfotech.com/assets/img/hero/hero-2.png"
              alt="img"
            />
          </div>
        </div>*/
  }
};

export default Hero;
