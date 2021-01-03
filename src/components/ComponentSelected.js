import React from "react" ;
import {images} from "../data" ;
import "../css/componentSelected.css";

function ComponentSelected (props) {

    return (
        <div id="screen">
            <img  
                src={images[props.componentName]}
                alt={`img-${props.componentName}`}
            />
            <h1>{props.componentName}</h1>
        </div>
    )

}

export default ComponentSelected ;