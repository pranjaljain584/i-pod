import React from "react" ;
import {images} from "../data" ;

function ComponentSelected (props) {

    return (
        <div id="screen">
            {console.log("images[props.componentName]" , images[props.componentName])}
            <img  
                src={images[props.componentName]}
                // src={Games}
                alt={`img-${props.componentName}`}
            />
            <h1>{props.componentName}</h1>
        </div>
    )

}

export default ComponentSelected ;