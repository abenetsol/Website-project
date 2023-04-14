import arrow from "../assets/images/arrow.png";
import "./button.css"
function Button(props){
return(
<div className = "more"  >
            <div>
            <a href={props.link} >
            <h3>{props.buttonValue}</h3> 
            <img src = {arrow} alt = "arrow"/>  
            </a> 
                </div>
    </div> 
);
}
export default Button;