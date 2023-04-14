import Button from "./Button2"
import "./blogInfo.css"
export default function BlogInfo(props){
return(
    <div className="fikerteb">
    <div className="box">
        <div className='info'>
            <div> <img src={props.image}/></div>
           
            <div className="infoInner">
                <p>{props.fullName}</p>
                <p>{props.phoneNo}</p>
                <p>{props.email}</p>
                <p>{props.date}</p>
            </div>
        </div>
        
    </div>
    <div className= "box">
        <h3>{props.head}</h3>
    </div>
    <div className="box">
       
       <b>Introduction</b> 
       <p>
{props.blog}
        </p> 
    <Button className="readMe" link="#" buttonValue="Read more"/>
    </div>
    </div>
    );
    }