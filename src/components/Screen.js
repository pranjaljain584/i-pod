import React from "react" ;
import '../css/screen.css' ;
import DefaultScreen from "./DefaultScreen" ;
import ComponentSelected from "./ComponentSelected" ;


function Screen (props) {

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
