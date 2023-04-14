import gallary1 from "../assets/images/gallary1.png"
import gallary2 from "../assets/images/gallary2.png"
import gallary3 from "../assets/images/gallary3.png"
import Button from "./Button"
import './styles.css'
function Center() {
  return (
      <div className="gallaryContainer">
         <div className = "gallary">
        <img src ={gallary1} alt="gallary 1"/>
        <img src ={gallary2} alt="gallary 2"/>
        <img src ={gallary3} alt="gallary 3"/>
      </div>
      <div className="seeMore">
      <Button link="#" buttonValue="See More pictures"/>
      </div>
      
      </div>
     
  )
}

export default Center;
