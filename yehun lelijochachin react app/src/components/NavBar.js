import "./styles.css";
import logo from './logo.png';
import { useState } from 'react';
// import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";
function NavBar(){
    
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return(
        <div>
        
        <div className = "header-text">

        <Link to='/' className = "logo"><img className="logoImage" src = {logo} alt = 'logo' /></Link>
        <div className="navAndText">
        <div><h2 className = "text_head">Let it be for our children</h2></div>
        <div className="navbarItems">
            <nav className="nav-links">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about_us'>About Us</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/gallary'>Gallery</Link></li>
                <li><Link to='/blogs'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            </nav>
        </div>
        <div className="navbarCollapsed">
            <nav className="nav-links">
            <div className="menuIcons" onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : 'fas fa-bars'}></i>
            </div>
            <div className={clicked ? "navMenu active" : "navMenu"}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about_us'>About Us</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/gallary'>Gallery</Link></li>
                <li><Link to='/blogs'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            </div>
            </nav>
        </div>
        </div>
        
        </div>
        
        </div>
    );
}
export default NavBar;