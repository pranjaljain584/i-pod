import React from "react" ;
import './css/wheel.css' ;
// import ZingTouch from 'zingtouch' ;
import {xyz} from "./wheelzing" ;

class Wheel extends React.Component {

    render(){

        // var parentTouchArea = document.getElementById('white-circle') ;
        // var myRegion = new ZingTouch.Region(document.body) ;
        // // var myRotate = new ZingTouch.Rotate() ; //customized rotate
        
        
        // function handleClick(){
        //     console.log(parentTouchArea) ;
        //     myRegion.bind(parentTouchArea , 'rotate' , function(e){
        //         console.log("rotate") ;
        //     });
        // }



        return (
            <div id="grey-box" >
                <div id="white-circle" onMouseEnter={xyz} draggable="false" >
                    <div className="button" id="menu" draggable="false"  >
                        <span className="btn-name">Menu</span>
                    </div>
                    <div className="button" id="rewind" draggable="false" >
                        <span className="btn-name"><i className="fas fa-fast-backward"></i></span>
                    </div>
                    <div className="button" id="centre" draggable="false" >
                        {/* <span className="btn-name">Menu</span> */}
                    </div>
                    <div className="button" id="forward" draggable="false" >
                        <span className="btn-name"><i className="fas fa-fast-forward"></i></span>
                    </div>
                    <div className="button" id="play-pause" draggable="false" >
                        <span className="btn-name"><i className="fas fa-play"></i> <i className="fas fa-pause"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wheel ;
