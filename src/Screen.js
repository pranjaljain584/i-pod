import React from "react" ;
import './css/screen.css' ;

class Screen extends React.Component {

    render(){
        return(
            <div id="screen">
                <div id="side-menu">
                    <h2>I pod</h2>
                    <ul id = "list">
                        <li className="active">
                            Cover Flow  <i className="fas fa-chevron-right"></i>                  
                        </li >

                        <li>
                            Songs <i className="fas fa-chevron-right"></i>
                        </li>
                        
                        <li>
                            Games <i className="fas fa-chevron-right"></i>
                        </li>
                        
                        <li>
                            Settings <i className="fas fa-chevron-right"></i>
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