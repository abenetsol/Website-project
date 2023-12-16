import "../components/styles.css"
import arrow from "../assets/images/arrowUp.png"
function Footer(){
    return(
        <div className="foot">
            <p>Terms and conditions</p>
<p>Copyright©Yehune lelejochachen</p>
<div className="contact"><a href = "/contact">
    Contact
    </a>
</div>
<div className="goUp">
   
        <div>
        <h3>Go Up</h3>
        </div>
    <div>
    <a href="#"><img src={arrow}/></a>
    </div>
    
    
   </div>
        </div>


)
}
export default Footer;