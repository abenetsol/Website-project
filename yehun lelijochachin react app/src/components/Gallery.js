import "./styles.css"
import SocialMediaLink from "./SocialMediaLinks"
import Advert from './Advert' 
import GallerySliders from "./GallerySliders";
import header from '../assets/images/header.png';
import letter from '../assets/images/letter.png';
import draw from '../assets/images/draw.png';
const images = [
    header,
    letter,
    draw,
  ];
export default function Gallery(){
    return(
        <div className = "card">
        <SocialMediaLink/>
        
    <div className = "header">
        <GallerySliders images={images}/>
        </div>
        <Advert/>
    </div>
    )
}