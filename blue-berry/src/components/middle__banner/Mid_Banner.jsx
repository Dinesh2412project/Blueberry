import "./style.css";
import String_En from "../../assets/Datas.js";

const Mid_Banner = () => {
  return (
    <div className="middle-container">
      <div className="middle-content">
        <h2>{String_En.middle.persant}</h2>
        <h1>{String_En.middle.name}</h1>
        <button className="banner-btn">{String_En.middle.button}</button>
      </div>
    </div>
  );
};

export default Mid_Banner;
