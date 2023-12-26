import arrow from "../assets/images/arrow.png";
import "./button.css"
function Button(props){
return(
<div className = "readme"  >
            <div className="inner">
            <a href={props.link} >
            <h3>{props.buttonValue}</h3> 
            <div className='readmoreimg'><img src = {arrow} alt = "arrow"/></div>
            </a> 
                </div>
    </div> 
);
}
export default Button;