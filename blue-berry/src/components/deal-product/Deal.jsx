import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dealProducts from "../../assets/DataStorage/ProductData";
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

const Deal = () => {
  return (
    <div className="deals-section">
      <div className="deals-header">
        <div className="header-text">
          <h2>
            Day of the <span>deal</span>
          </h2>
          <p>Don't wait. The time will never be just right.</p>
        </div>
        <div className="countdown-time">
          <h3>23 days</h3>
          <h3>23 : 43 :51</h3>
        </div>
      </div>
      {/*SECOND METHODS OF BOX OF PRODUCT......*/}

      <div className="deals-carousel">
        <Carousel responsive={responsive}>
          {dealProducts.map((product, index) => (
            <div className="deal-card" key={index}>
              <img src={product.img} alt={product.name} loading="lazy" />
              <div className="card-info">
                <h5 className="category-label">{product.category}</h5>
                <img
                  className="rating-icon"
                  src={product.rating}
                  alt="rating"
                />
              </div>
              <h4 className="product-name">{product.name}</h4>
              <div className="price-info">
                <h3 className="price">
                  ${product.price}{" "}
                  <span className="old-price">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </h3>
                <h6 className="weight">{product.weight}</h6>
              </div>
            </div>
          ))}
        </Carousel>

        {/*<Carousel responsive={responsive}>
          <div className="deal-card">
            <img src={"image/deal-1.jpg"} alt="img" />
            <div className="card-info">
              <h5 className='category-label'>juice</h5>
              <img className="rating-icon" src={"image/11.png"} alt="img" />
            </div>
            <h4 className='product-name'>mixed almond nuts juice pa</h4>
            <div className="price-info">
              <h3 className='price'>
                $22 <span className='old-price'>$32.00</span>
              </h3>
              <h6 className='weight'>250 g</h6>
            </div>
          </div>

          <div className="deal-card">
            <img src={"image/deal-2.jpg"} alt="img" />
            <div className="card-info">
              <h5 className='category-label'>fruits</h5>
              <img className="rating-icon" src={"image/11.png"} alt="img" />
            </div>
            <h4 className='product-name'>fresh mango slice juice</h4>
            <div className="price-info">
              <h3 className='price'>
                $22 <span className='old-price'>$32.00</span>
              </h3>
              <h6 className='weight'>100 ml</h6>
            </div>
          </div>

          <div className="deal-card">
            <img src={"image/deal-3.jpg"} alt="img" />
            <div className="card-info">
              <h5 className='category-label'>spices</h5>
              <img className="rating-icon" src={"image/11.png"} alt="img" />
            </div>
            <h4 className='product-name'>black papper spice pack</h4>
            <div className="price-info">
              <h3 className='price'>
                $22 <span className='old-price'>$32.00</span>
              </h3>
              <h6 className='weight'>1 pack</h6>
            </div>
          </div>

          <div className="deal-card">
            <img src={"image/deal-4.jpg"} alt="img" />
            <div className="card-info">
              <h5 className='category-label'>chocos</h5>
              <img className="rating-icon" src={"image/11.png"} alt="img" />
            </div>
            <h4 className='product-name'>mixed fruits chocolates</h4>
            <div className="price-info">
              <h3 className='price'>
                $15 <span className='old-price'>$32.00</span>
              </h3>
              <h6 className='weight'>1 pack</h6>
            </div>
          </div>

          <div className="deal-card">
            <img src={"image/deal-5.jpg"} alt="img" />
            <div className="card-info">
              <h5 className='category-label'>juice</h5>
              <img className="rating-icon" src={"image/11.png"} alt="img" />
            </div>
            <h4 className='product-name'>organic apple juice pack</h4>
            <div className="price-info">
              <h3 className='price'>
                $22 <span className='old-price'>$32.00</span>
              </h3>
              <h6 className='weight'>100 ml</h6>
            </div>
          </div>
        </Carousel>..*/}
      </div>
    </div>
  );
};

export default Deal;
