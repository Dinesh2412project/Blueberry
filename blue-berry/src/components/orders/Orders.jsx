import "./style.css";
import Shipping from "../../assets/DataStorage/OrderData";

const Orders = () => {
  return (
    <div className="orders-wrapper">
      {Shipping.map((shiped, index) => (
        <div className="order-card" key={index}>
          <img className="order-image" src={shiped.img} alt="img" />
          <h3 className="order-title">{shiped.name}</h3>
          <p className="order-description">{shiped.pera}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
