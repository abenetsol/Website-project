// import "./styles.css"
import "./BlogReplay.css"
import Button from "./Button3"
export default function BlogReplay(){
    return(
        <div className="blogReply">
    <h3 className="reply">Leave a Reply</h3>
    <form>
    <textarea id="message1" placeholder="Your Message"/>
    <input className="" type={Text} placeholder="Full Name"/>
     <input type={"email"} placeholder="Your E-mail"/>
     <Button className="sendMessage1" link="#" buttonValue="Send Comment"/>
    {/* <textarea id="message1" placeholder="Your Message"/>
    <Button className="sendMessage1" link="#" buttonValue="Send Message"/>
    <p className="thanks1">Thank you for getting in touch with us.</p> */}
    </form> 
    </div>  
    );
}