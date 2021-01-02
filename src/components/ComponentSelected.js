import React from "react" ;
import {images} from "../data" ;
import "../css/componentSelected.css";

function ComponentSelected (props) {

    return (
        <div id="screen">
            {console.log("images[props.componentName]" , images[props.componentName])}
            <img  
                src={images[props.componentName]}
                alt={ props.componentName !== "Cover Flow" ? `img-${props.componentName}` : ""}
            />
            <h1>{props.componentName}</h1>
        </div>
    )

}

export default ComponentSelected ;