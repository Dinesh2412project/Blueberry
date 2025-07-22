import "./style.css";
import {Mainproduct} from "../../utils/constants/constant.js";
import String_En from "../../utils/en_datas/En.js";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Main__product = () => {
  return (
    <div className="new-arrivals-section" responsive={responsive}>
      <div className="section-header">
        <div className="header-left">
          <h1>
            {String_En.new}
            <span>{String_En.arrivals}</span>
          </h1>
          <p>{String_En.Shop_online}</p>
        </div>
        <ul className="category-tabs">
          <li className="active">{String_En.all}</li>
          <li>{String_En.snack}</li>
          <li>{String_En.fruits}</li>
          <li> {String_En.vegetables}</li>
        </ul>
      </div>

      <div className="product-grid">
        {Mainproduct?.map((main, index) => (
          <div className="product-card" key={index}>
            <img className="product-image" src={main?.img} alt="product" />
            <div className="product-info">
              <div className="product-meta">
                <p className="product-category">{main?.category}</p>
                <img
                  className="product-rating"
                  src={main?.rating}
                  alt="image"
                />
              </div>
              <h1 className="product-name">{main?.name}</h1>
              <div className="product-pricing">
                <div className="price-details">
                  <h5 className="productnew_price">${main?.price}</h5>
                  <h4 className="productold-price">${main?.oldPrice}</h4>
                </div>
                <h3 className="product-weight">{main?.weight}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main__product;
