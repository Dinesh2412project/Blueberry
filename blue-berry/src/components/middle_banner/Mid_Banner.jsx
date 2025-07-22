import "./style.css";
import String_En from "../../utils/en_datas/En.js";

const Mid_Banner = () => {
  return (
    <div className="middle-container">
      <div className="middle-content">
        <h2>{String_En.persantage}</h2>
        <h1>{String_En.Fresh_Organic}</h1>
        <button className="banner-btn">{String_En.shop_now}</button>
      </div>
    </div>
  );
};

export default Mid_Banner;
