import React from "react" ;
import './css/screen.css' ;
import { iPod } from "./data";
import ListItem from "./ListItem";

function Screen (props) {

    return(
        <div id="screen">
            <div id="side-menu">
                <h2>I pod</h2>
                <ul id = "list">
                    {
                        iPod.map( (ele , index) => {
                            console.log("active idx" , props.activeIndex) ;
                            return (
                                <ListItem 
                                    name={ele}
                                    key={index}
                                    isActive={index === props.activeIndex ? true : false }
                                />
                            );
                        })
                    }
                </ul>
            </div>
            <div id="display">
                hello
            </div>
        </div>
    );
}

export default Screen ;
