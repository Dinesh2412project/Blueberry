import "./style.css";
import {footerData} from "../../utils/constants/constant.js";
import { SlLocationPin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import {Footerend} from "../../utils/constants/constant.js";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import String_En from "../../utils/en_datas/En.js";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <h2 className="footer-title">{String_En.Brands_Directory}</h2>
      <div className="brand-directory">
        {footerData?.map((footers, index) => (
          <div className="brand-category" key={index}>
            <h3 className="category-title">{footers?.title}</h3>
            <ul className="category-list">
              {footers?.items.map((item, i) => (
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
            <img className="logo-img" src={String_En.footer_img_1} alt="img" />
            <p className="footer-description">{String_En.BlueBerry}</p>
            <div className="app-icons">
              <img src={String_En.footer_img_2} alt="img" />
              <img src={String_En.footer_img_3} alt="img" />
            </div>
          </div>

          {Footerend?.map((end, index) => (
            <div className="footer-links" key={index}>
              <h3 className="link-title">{end?.title}</h3>
              <ul className="link-list">
                {end?.items.map((item, i) => (
                  <li className="link-item" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-contact">
            <h4 className="contact-title">{String_En.contact}</h4>
            <p className="contact-address">
              <span>
                <SlLocationPin />
              </span>
              {String_En.address}
            </p>
            <h6>
              <span>
                <FaWhatsapp />
              </span>
              {String_En.phone}
            </h6>
            <h6>
              <span>
                <MdOutlineMailOutline />
              </span>
              {String_En.email}
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
