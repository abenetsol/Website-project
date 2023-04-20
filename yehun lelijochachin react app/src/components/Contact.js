import "./styles.css"
import "./contact.css"
import Button from "./Button3"
import SocialMediaLink from "./SocialMediaLinks"
import Advert from './Advert' 
export default function Contact(){
    return(
        <div className = "card">
        <SocialMediaLink/>
        
    <div className = "header">
        <div className = "aboutUs">
        <h3 className="contactUs">Contact Us</h3>
        <p className="contactUs">Send us your ideas, leave a comment, and tell us how you 
           feel. It assists us in bettering ourselves.
           Please feel free to write anything respectfully.
           and we will do our best to satisfy you. 
        </p>
        <div className="contactUsForm">
        <form>
        <input className="info" type={Text} placeholder="Full Name"/>
         <input className="info" type={"email"} placeholder="Your E-mail"/>
         <input className="info" type={Number} placeholder="Phone Number"/>
        <textarea className="message" placeholder="Your Message"/>
        <Button className="sendMessage" link="#" buttonValue="Send Message"/>
        <p className="thanks">Thank you for getting in touch with us.</p>
        </form>
        </div>          
        </div>
        </div>
        <Advert/>
    </div>
    )
}