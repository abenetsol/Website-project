import arrow from "../assets/images/telegram.png";
import "./button.css"
function Button(props){
return(
<div className = "readme1"  >
            <div className="inner">
            <a href={props.link} >
            <h3>{props.buttonValue}</h3> 
            <div><img src = {arrow} alt = "arrow"/></div>
            </a> 
                </div>
    </div> 
);
}
export default Button;