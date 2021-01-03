import React from "react" ;
import '../css/screen.css' ;
import { iPod } from "../data";
import ListItem from "./ListItem";

function DefaultScreen (props) {

    return (
        <div id="screen">
            <div id="side-menu">
                <h2>I pod</h2>
                <ul id = "list">
                    {
                        // mapped every ele from ipod array
                        iPod.map( (ele , index) => {
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
                
            </div>

        </div>
    )

}

export default DefaultScreen ;