import './Navbar.css';
import {Link} from 'react-router-dom';  
import { RiContactsLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
  return (
    <div className='nav-container'>
            <div className="navbar-top">
        <div className="navbar-heading">
            <img src="https://blueberry-react-next.maraviyainfotech.com/assets/img/logo/logo.png" alt="img" />
        </div>
        <div className="navbar-input">
            <button>vegetables</button>
            <input type="text" placeholder='search products....'/>
        </div>

    <div className="navbar-icons">
        <div className="navbar-1">
            <h4><RiContactsLine /><span>login</span></h4>
        </div>

        <div className="navbar-1">
            <h4><FaRegStar /> <span>Wishlist</span></h4>
        </div>

        <div className="navbar-1">
            <h4><MdOutlineShoppingCart /> <span>cart</span></h4>
        </div>
    </div>
         </div>







        <div className="navbar-last">
        <ul>
            <li><Link className='nav-link' to={'/'}>Home</Link></li>
            <li><Link className='nav-link' to={'/categories'}>categories</Link></li>
            <li><Link className='nav-link' to={"/Products"}>Products</Link></li>
            <li><Link className='nav-link' to={"/Page"}>Page</Link></li>
            <li><Link className='nav-link' to={"/Blog"}>Blog</Link></li>
        </ul>
        </div>
    </div>    
  )
}

export default Navbar