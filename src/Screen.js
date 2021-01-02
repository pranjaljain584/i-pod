import React from "react" ;
import './css/screen.css' ;
// import { iPod } from "./data";
// import ListItem from "./ListItem";
import DefaultScreen from "./DefaultScreen" ;
import ComponentSelected from "./ComponentSelected" ;


function Screen (props) {

    // console.log(props.isCentreClicked , "clicked in screen fn") ;
    // console.log("comp rendered in screen fn" , props.compRenderName) ;

    // console.log("RENDER") ;
    return(
        
        <div>

            {
                props.isCentreClicked 
                ? 
                <ComponentSelected 
                    componentName={props.compRenderName}
                />
                : 
                <DefaultScreen
                    activeIndex={props.activeIndex}
                />
            }

        </div>
    );
}

export default Screen ;
