import "./styles.css"
import SocialMediaLink from "./SocialMediaLinks"
import Advert from './Advert' 
import BlogInfo from "./BlogInfo"
import BlogoInfoDetail from "./BlogInfoDetail"
import fikerte from '../assets/images/fikerte.png'
import nati from '../assets/images/nati_profile.png'
import facebook from "../assets/images/facebookPost.png"
export default function Blog(){
    return(
        <div className = "card">
        <SocialMediaLink/>
        
    <div className = "header">
    <BlogInfo image={fikerte} 
        fullName="Fikirte Sisay Teshome" 
        phoneNo="+251911480256" 
        email="fikirsis2016@gmail.com"
        date="May 2013 E. C"
        head="10 Ways Coloring Books Can Benefit Your Kid’s Development"
        blog="A coloring book is a book with line drawings or sketches in it, that can be colored in by kids or adults. Though it is often overlooked as a simple activity for kids, it can provide several benefits for your child.<br/>
        From improving fine motor skills to encouraging creativity, coloring books can help your child in several ways. Not only that, but research also says that artistic <br/> activities are linked to better academic performance and higher overall IQ scores in young children."
        />
        
        <BlogoInfoDetail image={fikerte} 
        fullName="Fikirte Sisay Teshome" 
        phoneNo="+251911480256" 
        email="fikirsis2016@gmail.com"
        date="May 2013 E. C"
        head="10 Ways Coloring Books Can Benefit Your Kid’s Development"
        blog="A coloring book is a book with line drawings or sketches in it, that can be colored in by kids or adults. Though it is often overlooked as a simple activity for kids, it can provide several benefits for your child.<br/>
        From improving fine motor skills to encouraging creativity, coloring books can help your child in several ways. Not only that, but research also says that artistic <br/> activities are linked to better academic performance and higher overall IQ scores in young children."
        />
        <div className="facebook">
            <img src = {facebook} alt="Facebook Post"/>
        </div>  
        <BlogInfo image={nati} 
        fullName="Nathnaiel Worku Abera" 
        phoneNo="+251921454442" 
        email="wnati00@gmail.com"
        date="May 2014 E. C"
        head="The Value of Reading for Your Child and the Cost of 
        Education"
        blog="Do you like to read? Do you want a child who does as well? Whether or not you have been a big reader in 
        your own life, there are a lot of good reasons to raise a child who loves books. zou can start reading to 
        them when they are babies and get them their own library cards when they are as young as toddlers. 
        Libraries often have great programs and activities for children, including story times and summer book 
        series. Loving books can benefit your children from infancy to adulthood."
        />
        </div>
        <Advert/>
    </div>
    )
}