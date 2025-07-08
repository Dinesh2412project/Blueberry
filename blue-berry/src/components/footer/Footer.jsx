import "./style.css";
import footerData from "../../assets/DataStorage/FooterData.js";
import { SlLocationPin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Footerend from "../../assets/DataStorage/FooterData__end.js";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <h2 className="footer-title">Brands Directory</h2>
      <div className="brand-directory">
        {footerData.map((footers, index) => (
          <div className="brand-category" key={index}>
            <h3 className="category-title">{footers.title}</h3>
            <ul className="category-list">
              {footers.items.map((item, i) => (
                <li key={i} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/*SECOND METHODS IN FOOTER SECTION.....*/}

      <div className="footer-bottom">
        <div className="footer-main">
          <div className="footer-info">
            <img
              className="logo-img"
              src="https://blueberry-react-next.maraviyainfotech.com/assets/img/logo/logo.png"
              alt="img"
            />
            <p className="footer-description">
              BlueBerry is the biggest market of grocery products. Get your
              daily needs from our store.
            </p>
            <div className="app-icons">
              <img
                src="https://blueberry-react-next.maraviyainfotech.com/assets/img/app/android.png"
                alt="img"
              />
              <img
                src="https://blueberry-react-next.maraviyainfotech.com/assets/img/app/apple.png"
                alt="img"
              />
            </div>
          </div>

          {Footerend.map((end, index) => (
            <div className="footer-links" key={index}>
              <h3 className="link-title">{end.title}</h3>
              <ul className="link-list">
                {end.items.map((item, i) => (
                  <li className="link-item" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-contact">
            <h4 className="contact-title">contact</h4>
            <p className="contact-address">
              <span>
                <SlLocationPin />
              </span>
              971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101.
            </p>
            <h6>
              <span>
                <FaWhatsapp />
              </span>
              +00 9876543210
            </h6>
            <h6>
              <span>
                <MdOutlineMailOutline />
              </span>
              example@email.com
            </h6>
            <div className="social-icons">
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="#">
                <FaTwitterSquare />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
