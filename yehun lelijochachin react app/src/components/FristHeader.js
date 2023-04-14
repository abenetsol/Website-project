import Button from "./Button"
import "./styles.css"
import header from "../assets/images/header.png";
const par = "About the book ";
const par1 ="All of us can be mentally ill at any time in our life. Age, sex and wealth cannot give us grantee to be mentally healthy. Therefore, including our children all of us should be aware of mental health."
const par2 = "This activity book is prepared for children aged from 9-13. It’s aimed to give awareness about mental health for children and help their parents, caregivers and teachers to assess their children’s and student’s level of understanding of the topic."
const par3 = "The book is prepared by using simple and easy words. Aside from creating awareness on mental health issues for the children, it gives some tips on how to prevent themselves from mental illness." 
const par4 ="Also, it can help them to understand and help those who are mentally ill .The activities include coloring, writing, labeling and drawing so that they can enjoy reading the book."
export default function FirstHeader(){
    return(
        <div className="firstHead">
                <div className="book">
                <img src={header} alt = "cover photo"/>
                <p className = "bookDescription">{par+par1 + par2 + par3 + par4}</p> 
                <div className = "productsButton">
                </div>    
                </div>
                <Button link="#" buttonValue="See More products"/>
        </div>
    )
}