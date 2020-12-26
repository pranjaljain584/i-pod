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
                <div id="white-circle" onMouseOver={xyz} >
                    <div className="button" id="menu" >
                        <span className="btn-name">Menu</span>
                    </div>
                    <div className="button" id="rewind" >
                        <span className="btn-name"><i className="fas fa-fast-backward"></i></span>
                    </div>
                    <div className="button" id="centre" >
                        {/* <span className="btn-name">Menu</span> */}
                    </div>
                    <div className="button" id="forward" >
                        <span className="btn-name"><i className="fas fa-fast-forward"></i></span>
                    </div>
                    <div className="button" id="play-pause" >
                        <span className="btn-name"><i className="fas fa-play"></i> <i className="fas fa-pause"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wheel ;
