import "./styles.css"
import "./aboutUs.css"
import TeamMember from "./TeamMember"
import SocialMediaLink from "./SocialMediaLinks"
import Advert from './Advert' 
import nati from '../assets/images/nati.png'
import henoke from '../assets/images/henok.png'
import fikerte from '../assets/images/fikerteteam.png'
import worku from '../assets/images/worku.png'
import sura from '../assets/images/sura.png'
export default function AboutUs(){
    return(
        <div className = "card">
            <SocialMediaLink/>
            
        <div className = "header">
            <main>
            <div className="aboutUs">
                <div className="contant">
                    <h1>About Us</h1>
                    <h3><b>In the beginning...</b></h3>
                    <p>
                    When the journey began, Yehun Advertising, a business as little as Neonate, had the grand notion of 
                    creating and offering learning aids for kids on which different businesses could advertise to parents 
                    through our products and receive sponsorship to keep the prices low. Yehun advertising had the ability 
                    to grow in a timely, steady, and effective manner.
                    </p>
                    <h3>Now...</h3>
                    <p>
                    Yehun advertising grows into a toddler and transforms into Yehun le lijochachen with high quality 
                    products in terms of both quality and quantity, and it continues to work nonstop to accomplish more.
                    We are working hard in team with highly qualified different professionals to create a variety of children's 
                    products (books, dolls, pules, bags, etc.) that kids adore, parents are happy with, are helpful, and have 
                    a meaningful impact in a holistic approach.<br/>
                    For all east African children, we will work hard to expand the availability and accessibility of children's 
                    books.<br/>
                    Hope you wonder its meaning, those who are non-Amharic readers…don’t worry it means ‘’let it be for 
                    our children’’, (Yehun means let it be) and (le lijohachen means for our children).

                    Children deserves all the best and we are excited to provide best products and let it be for them.
                    </p>
                </div>
                <div className="contant">
                    <h1 className="team">Team Members</h1>
                    <TeamMember profile={nati} name="Nathnaiel Worku (General Manager)"
                    phone="+251921454442"
                    email="wnati00@gmail.co" detail ="Nathnaiel Worku is children’s books writer, graphics designer and an accountant. Nathnaiel 
                    Worku produced more than 4 teaching aid materials for pre-schools, published 2 children’s 
                    story books and wrote and published 2 children’s activity books. He works as a chairman of 
                    Meselal charity association, an NGO that works voluntary activates on vulnerable 
                    children’s"/>
                    <TeamMember 
                    profile={fikerte}
                    name="Fikirte Sisay Teshome (Deputy Manager)"
                    phone="+251911480256"
                    email="fikirsis2016@gmail.com" 
                    detail="Fikirte Sisay is a professional nurse who worked at various government Hospitals and 
                    specialty centers, she is internationally certified American Heart Association BLS 
                    Instructor and Provider. Fikirte Sisay is also health advocator and advisor on different 
                    Health and health related children's books and now she is studying her master’s degree on 
                    early childhood care and education at Addis Ababa University."/>
                    <TeamMember 
                    profile={henoke}
                    name="Henok Gebre (Advisory team leader)"
                    phone="+251910614247"
                    email="henok.g61@gmail.com" 
                    detail="Henok Gebre is a psychologist and early childhood Development- care and education 
                    practitioner. He worked as education officer at save the children international, as guidance 
                    and counselor at Lemlem KG to preparatory school. As a lecturer at Debre Berhan 
                    University. He also worked as a volunteer as a program coordinator at rehabilitation center 
                    for children in conflict with the law (juvenile delinquency) in Addis Ababa. Currently, he is 
                    working as education Officer at International Rescue committee (IRC)."/>
                    <TeamMember 
                    profile={worku}
                    name="Worku Abera (Editor)"
                    phone="+251911163770"
                    email="aberaworku1@gmail.com" 
                    detail="Worku Abera is a teacher, biologist, translator and book editor. He has many experiences 
                    on different sectors. He worked as a teacher in different governmental and private 
                    schools. He translated and edited more than 18 books. He also participated on preparation 
                    of grade five and six Integrated Science students’ text books and teacher’s guide for 
                    Ministry of education. Also, different integrated science and environmental Science 
                    supplementary books for primary level students. Worku Abera worked as education 
                    program coordinator at pro pride and he was also a founder and member of Ethiopian 
                    animal welfare society."/>
                     <TeamMember 
                    profile={sura}
                    name="Surafel Ketema (Design and Illustration Team Leader)"
                    phone="+251919396610"
                    email="Siru.ket1@gmail.com" 
                    detail="Surafel ketema is an artist who was graduated from Abyssinia fine art and design school. 
                    He worked as a junior interior designer and as an art teacher in different primary schools. 
                    Surafel Ketema has good experience in preparing illustration different children’s story and 
                    activity books."/>
                </div>
            </div>
            </main>
           
            </div>
            <Advert/>
        </div>
    )
}