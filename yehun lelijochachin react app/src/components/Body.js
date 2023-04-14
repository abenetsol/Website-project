
// import arrow from "../assets/images/arrow.png"
import gallary1 from "../assets/images/gallary1.png"
import gallary2 from "../assets/images/gallary2.png"
import gallary3 from "../assets/images/gallary3.png"
import facebook from "../assets/images/facebookPost.png"
import fikerte from "../assets/images/fikerte.png";
import  Info from "./Info"
import "./styles.css"
import Button from "./Button";
// import Button2 from "./Button2";
import SocialMediaLink from "./SocialMediaLinks"
import FirstHeader from "./FristHeader"
import Center from "./Center";
import Advert from './Advert' 
const par = "About the book ";
const par1 ="All of us can be mentally ill at any time in our life. Age, sex and wealth cannot give us grantee to be mentally healthy. Therefore, including our children all of us should be aware of mental health."
const par2 = "This activity book is prepared for children aged from 9-13. It’s aimed to give awareness about mental health for children and help their parents, caregivers and teachers to assess their children’s and student’s level of understanding of the topic."
const par3 = "The book is prepared by using simple and easy words. Aside from creating awareness on mental health issues for the children, it gives some tips on how to prevent themselves from mental illness." 
const par4 ="Also, it can help them to understand and help those who are mentally ill .The activities include coloring, writing, labeling and drawing so that they can enjoy reading the book."

function Body(props) {
    return (
        <div className = "card">
            
            <SocialMediaLink/>
            
            <div className = "header">
            <FirstHeader/>
            <Center/>
      
        <div className="facebook">
            <img src = {facebook} alt="Facebook Post"/>
        </div>  
        <div className = "video">
            <div>
            <iframe title='hellow' src="https://platform.twitter.com/widgets/tweet_button.html"></iframe>
                </div>  
            <h3>Description for the video</h3>
            <Button link="#" buttonValue="See more video" />
        </div> 
        <div className="info">
        <Info image={fikerte} 
        fullName="Fikirte Sisay Teshome" 
        phoneNo="+251911480256" 
        email="fikirsis2016@gmail.com"/>
        </div>  
        
      </div>  
      <Advert/>   
        </div>
    )
}
export default Body;