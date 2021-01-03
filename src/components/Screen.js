import React from "react" ;
import '../css/screen.css' ;
import DefaultScreen from "./DefaultScreen" ;
import ComponentSelected from "./ComponentSelected" ;


function Screen (props) {

    return(
        
        <div>

            {
                // if centre clicked render selected component acc to active ele
                props.isCentreClicked 
                ? 
                <ComponentSelected 
                    componentName={props.compRenderName}
                />
                : 
                // if not clicked home page
                <DefaultScreen
                    activeIndex={props.activeIndex}
                />
            }

        </div>
    );
}

export default Screen ;
