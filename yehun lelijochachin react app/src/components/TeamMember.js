import "./teamMember.css"
export default function TeamMember(props){
    return(
        <div className="teamMembers">
            <img src={props.profile} alt='profile'/>
            <div>
                <div className="teaminfo">
                <p>
                    {props.name}
                </p>
                <p>{props.phone}</p>
                <p>{props.email}</p>
                </div>
                <div className="info1">
                <p>
                    {props.detail}
                </p>
                </div>
                
            </div>
        </div>
    )
}