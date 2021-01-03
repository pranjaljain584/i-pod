import React from "react" ;
import '../css/screen.css' ;

function ListItem (props){
    return(
        // set active class if the element is active o.w. null
        <li className={props.isActive ? "active" : null}>
            {props.name} <i className="fas fa-chevron-right"></i>
        </li>
    ) ;
}

export default ListItem ;