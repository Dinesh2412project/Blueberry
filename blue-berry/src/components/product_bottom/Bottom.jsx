import "./style.css";
import {Fruits} from "../../utils/constants/constant.js";
import String_En from "../../utils/en_datas/En.js";

const Bottom = () => {
  return (
    <div className="fruit-section">
      <div className="fruit-grid">
        {Fruits?.map((fruit, index) => (
          <div className="fruit-card" key={index}>
            <img src={fruit?.img} alt="img" />
            <div className="fruit-info active">
              <p>{fruit?.date}</p>
              <h2>{fruit?.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="instagram-gallery">
        <div className="gallery-image">
          <img src={String_En.bottom_img} alt="img" />
        </div>

        <div className="gallery-image">
          <img src={String_En.bottom_img_1} alt="img" />
        </div>

        <div className="gallery-image active">
          <img src={String_En.bottom_img_2} alt="img" />
        </div>

        <div className="gallery-image active">
          <img src={String_En.bottom_img_3} alt="img" />
        </div>
        <div className="gallery-image active">
          <img src={String_En.bottom_img_4} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
