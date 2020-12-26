import React from "react" ;
import './css/screen.css' ;

class Screen extends React.Component {

    render(){
        return(
            <div id="screen">
                <div id="side-menu">
                    <h2>I pod</h2>
                    <ul id = "list">
                        <li>
                            Cover Flow                    
                        </li>

                        <li>
                            Songs 
                        </li>
                        
                        <li>
                            Games
                        </li>
                        
                        <li>
                            Settings
                        </li>
                    </ul>
                </div>
                <div id="display">
                    hello
                </div>
            </div>
        )
    }
}

export default Screen ;