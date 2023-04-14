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
        <h3>10 Ways Coloring Books Can Benefit Your Kid’s Development</h3>
    </div>
    <div className="box">
       
       <b>Introduction</b> 
       <p>
A coloring book is a book with line drawings or sketches in it, that can be colored in by kids or adults. Though it is often overlooked as a simple activity for kids, it can provide several benefits for your child.<br/>
From improving fine motor skills to encouraging creativity, coloring books can help your child in several ways. Not only that, but research also says that artistic <br/> activities are linked to better academic performance and higher overall IQ scores in young children.
        </p> 
        <b>Tips to Get Your Kid Started with Coloring Books</b>
        <p>
        Coloring is a great way for kids to express their creativity. It can also be a fun way to spend some time together. However, they first need to know how to get started with this activity.<br/>
        Here are some tips to help you teach coloring to kids:
        </p>
        <ul>
            <li>
            start with simple pictures. Coloring books with large pictures and few details are a good place to 
            start. As kids get more comfortable with coloring, you can introduce more detailed pictures. zou can 
            start with these easy watercolor painting ideas»
            </li>
            <li>
            Use a variety of colors. Encourage kids to use a variety of colors when they color. They can 
            experiment with different color combinations and see what they like best»
            </li>
            <li>
            Encourage kids to stay within the lines. This can be a challenge for some kids, but it’s important to 
encourage them to stay within the lines. It will help them stay focused and produce neater results»
            </li>
            <li>
            Let kids be creative. Encourage kids to be creative with their coloring. They can add their own details 
or color outside the lines if they want.
            </li>
            <li>
            Have fun! Coloring should be fun for both you and the kids. So, make sure to keep it light and enjoy 
the process rather than making it a boring class.
            </li>
        </ul>
    </div>
    <div className="replay">
            <p>blog</p>
        </div>
    </div>
    );
    }