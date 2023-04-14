import "./styles.css"
import logo from './logo.png'
// import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";
function NavBar(){
    
    return(
        <div>
        
        <div className = "header-text">

        <Link to='/' className = "logo"><img className="logoImage" src = {logo} alt = 'logo' /></Link>
        <div className="navAndText">
        <div><h2 className = "text_head">Let it be for our children</h2></div>
            <nav className="nav">
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
        
        </div>
        
        </div>
    );
}
export default NavBar;