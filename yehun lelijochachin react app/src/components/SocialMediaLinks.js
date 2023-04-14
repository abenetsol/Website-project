import "./socialMediaLinks.css"
import vector from "../assets/images/vector.png"
import vector1 from "../assets/images/vector1.png"
import vector2 from "../assets/images/vector2.png"
import vector3 from "../assets/images/vector3.png"
import vector4 from "../assets/images/vector4.png"
import vector5 from "../assets/images/vector5.png"
import vector6 from "../assets/images/vector6.png"
function SocialMediaLinks(){
    return(
        <div className="socialMedia">
            <img src={vector} alt="telegram"/>
            <img src={vector1} alt="email"/>
            <img src={vector2} alt="facebook"/>
            <img src={vector3} alt='G+'/>
            <img src={vector4} alt="twitter"/>
            <img src={vector5} alt="youtube"/>
            <img src={vector6} alt="linkedin"/>
        </div>
    )   
}
export default SocialMediaLinks;