import "./styles.css"
import "./aboutUs.css"
import Slider from "./Slider"
import SocialMediaLink from "./SocialMediaLinks"
import Advert from './Advert' 
import facebook from '../assets/images/facebookPost.png'
export default function Products(){
return(
    <div className = "card">
                <SocialMediaLink/>
            
                <div className = "header">
                    <main>
                    <div className="aboutUs">
                    <div className="contant">
                        <div className="products">
                            <div className="slider">
                                <Slider/>
                                <p>
                                Category: book <br/>

                                Title: Kuku and Bilicho Vol1<br/>

                                Sub-Title: Mental Health Activity Book<br/>

                                Age: 9-13<br/>

                                Language: Amharic<br/>

                                Number of pages: 40<br/>

                                Size: 17.78 x 25.4 cm<br/>

                                Print: Full color
                                </p>
                            </div>
                            <h3>About the book</h3>
                            <p>
                            
                            All of us can be mentally ill at any time in our life. Age, sex and wealth cannot give us grantee to be mentally healthy. Therefore, including our children all of us should be aware of mental health. This activity book is prepared for children aged from 9-13. It’s aimed to give awareness about mental health for children and help their parents, caregivers and teachers to assess their children’s and student’s level of understanding of the topic. The book is prepared by using simple and easy words. Aside from creating awareness on mental health issues for the children, it gives some tips on how to prevent themselves from mental illness. Also, it can help them to understand and help those who are mentally ill .The activities include coloring, writing, labeling and drawing so that they can enjoy reading the book.
                            </p>
                        </div>
                        
                    </div>
                    </div>
                    </main>
            <div className="aboutUs">
                <div className="contant">
                        <div className="products">
                            <div className="slider">
                                <Slider/>
                                <p>
                                Category: book <br/>

                                Title: Kuku and Bilicho Vol1<br/>

                                Sub-Title: Mental Health Activity Book<br/>

                                Age: 9-13<br/>

                                Language: Amharic<br/>

                                Number of pages: 40<br/>

                                Size: 17.78 x 25.4 cm<br/>

                                Print: Full color
                                </p>
                            </div>
                            <h3>About the book</h3>
                            <p>
                            
                            All of us can be mentally ill at any time in our life. Age, sex and wealth cannot give us grantee to be mentally healthy. Therefore, including our children all of us should be aware of mental health. This activity book is prepared for children aged from 9-13. It’s aimed to give awareness about mental health for children and help their parents, caregivers and teachers to assess their children’s and student’s level of understanding of the topic. The book is prepared by using simple and easy words. Aside from creating awareness on mental health issues for the children, it gives some tips on how to prevent themselves from mental illness. Also, it can help them to understand and help those who are mentally ill .The activities include coloring, writing, labeling and drawing so that they can enjoy reading the book.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="facebook">
                <img src = {facebook} alt="Facebook Post"/>
            </div>  
            </div>
            
                
            <Advert/>
    </div>
          
        
    )
}