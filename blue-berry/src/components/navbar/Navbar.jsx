import './Navbar.css';
import {Link} from 'react-router-dom';  

const Navbar = () => {
  return (
    <div className='nav-container'>
        <h1><Link to={'/'}>blue berry</Link></h1>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/categories'}>categories</Link></li>
            <li><Link to={"/Products"}>Products</Link></li>
            <li><Link to={"/Page"}>Page</Link></li>
            <li><Link to={"/Blog"}>Blog</Link></li>
        </ul>
    </div>    
  )
}

export default Navbar