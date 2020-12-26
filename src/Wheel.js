import React from "react" ;
import './css/wheel.css' ;
import ZingTouch from 'zingtouch' ;

class Wheel extends React.Component {

    render(){
        return (
            <div id="grey-box" >
                <div id="white-circle" >
                    <div className="button" id="menu" >
                        <span className="btn-name">Menu</span>
                    </div>
                    <div className="button" id="rewind" >
                        <span className="btn-name"><i class="fas fa-fast-backward"></i></span>
                    </div>
                    <div className="button" id="centre" >
                        {/* <span className="btn-name">Menu</span> */}
                    </div>
                    <div className="button" id="forward" >
                        <span className="btn-name"><i class="fas fa-fast-forward"></i></span>
                    </div>
                    <div className="button" id="play-pause" >
                        <span className="btn-name"><i class="fas fa-play"></i><i class="fas fa-pause"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wheel ;
