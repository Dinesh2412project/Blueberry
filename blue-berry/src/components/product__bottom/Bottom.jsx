import "./style.css";
import Fruits from "../../assets/DataStorage/BottomData";

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
          <img
            src="https://blueberry-react-next.maraviyainfotech.com/assets/img/instagram/1.jpg"
            alt=""
          />
        </div>

        <div className="gallery-image">
          <img
            src="https://blueberry-react-next.maraviyainfotech.com/assets/img/instagram/2.jpg"
            alt=""
          />
        </div>

        <div className="gallery-image active">
          <img
            src="https://blueberry-react-next.maraviyainfotech.com/assets/img/instagram/3.jpg"
            alt=""
          />
        </div>

        <div className="gallery-image active">
          <img
            src="https://blueberry-react-next.maraviyainfotech.com/assets/img/instagram/4.jpg"
            alt=""
          />
        </div>
        <div className="gallery-image active">
          <img
            src="https://blueberry-react-next.maraviyainfotech.com/assets/img/instagram/5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
