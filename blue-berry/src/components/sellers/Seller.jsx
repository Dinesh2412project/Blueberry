import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import String_En from "../../utils/en_datas/En.js";

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

const Seller = () => {
  return (
    <div className="seller_container">
      <Carousel responsive={responsive}>
        <div className="seller_box">
          <div className="seller_img">
            <img src={String_En.seller_img} alt="img" />
          </div>
          <div className="seller_content">
            <h2>{String_En.isabella_oliver}</h2>
            <h6>{String_En.manager}</h6>
            <p> {String_En.paragraph}</p>
          </div>
        </div>

        <div className="seller_box">
          <div className="seller_img">
            <img src={String_En.seller_img1} alt="img" />
          </div>
          <div className="seller_content">
            <h2>{String_En.nikki_albart}</h2>
            <h6>{String_En.team_leader}</h6>
            <p> {String_En.paragraph}</p>
          </div>
        </div>

        <div className="seller_box">
          <div className="seller_img">
            <img src={String_En.seller_img2} alt="img" />
          </div>
          <div className="seller_content">
            <h2>{String_En.stephen_smith}</h2>
            <h6>{String_En.co_founder}</h6>
            <p> {String_En.paragraph}</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Seller;
