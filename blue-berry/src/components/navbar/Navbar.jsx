import "./style.css";
import { Link } from "react-router-dom";
import { RiContactsLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { useState } from "react";
import String_En from "../../utils/en_datas/En.js";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleclick = () => setOpen(!open);
  const closemenu = () => setOpen(false);
  return (
    <div className="navigation-wrapper">
      <div className="navigation-header">
        <div className="logo-section">
          <img src={String_En.nav_img} alt="img" />

          <div onClick={handleclick} className="menu-toggle-icon">
            {!open ? <IoMdClose /> : <CgMenuGridR />}
          </div>
        </div>
        <div className="search-bar">
          <button className="category-button">{String_En.vegetables}</button>
          <input
            className="search-input"
            type="text"
            placeholder="search products...."
          />
        </div>

        <div className="user-actions">
          <div className="action-item">
            <h4>
              <RiContactsLine />
              <span>{String_En.login}</span>
            </h4>
          </div>

          <div className="action-item">
            <h4>
              <FaRegStar /> <span>{String_En.Wishlist}</span>
            </h4>
          </div>

          <div className="action-item">
            <h4>
              <MdOutlineShoppingCart /> <span>{String_En.cart}</span>
            </h4>
          </div>
        </div>
      </div>

      <div className="navigation-menu">
        <ul className={!open ? "nav-links active" : "nav-links"}>
          <li>
            <Link className="nav-link" to={"/"}>
              {String_En.home}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/categories"}>
              {String_En.categories}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/Products"}>
              {String_En.Products}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/Page"}>
              {String_En.Page}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/Blog"}>
              {String_En.Blog}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
