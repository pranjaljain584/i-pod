import React from "react" ;
import '../css/screen.css' ;

function ListItem (props){
    return(
        <li className={props.isActive ? "active" : null}>
            {props.name} <i className="fas fa-chevron-right"></i>
        </li>
    ) ;
}

export default ListItem ;