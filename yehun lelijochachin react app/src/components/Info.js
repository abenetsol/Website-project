import fikerte from "../assets/images/fikerte.png";
import Button from "./Button2"
import Button2 from "./Button";
import "./info.css"
function Info(props){
return(
    <div className="fikerte">
    <div className="box">
        <div className='info'>
            <div> <img src={props.image}/></div>
           
            <div className="infoInner">
                <p>{props.fullName}</p>
                <p>{props.phoneNo}</p>
                <p>{props.email}</p>
                <p>May 2013 E. C</p>
            </div>
        </div>
        
    </div>
    <div className= "box">
        <h3>10 Ways Coloring Books Can Benefit Your Kid’s Development</h3>
    </div>
    <div className="box">
       
       <b>Introduction</b> 
       <p>
A coloring book is a book with line drawings or sketches in it, that can be colored in by kids or adults. Though it is often overlooked as a simple activity for kids, it can provide several benefits for your child.<br/>
From improving fine motor skills to encouraging creativity, coloring books can help your child in several ways. Not only that, but research also says that artistic <br/> activities are linked to better academic performance and higher overall IQ scores in young children.
        </p> 
        <Button className="readMe" link="#" buttonValue="Read more"/>
    </div>
    <Button2 link="#" buttonValue="See More Blogs"/>
    </div>      
    );
}
export default Info;

