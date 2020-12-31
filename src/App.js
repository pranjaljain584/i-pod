import React , {useState} from "react" ;
import Wheel from "./Wheel";
import Screen from "./Screen";
import ZingTouch from 'zingtouch' ;
import {iPod} from "./data" ;
import "./css/app.css";

function App() {

  const zingFunc = () => {
    var parentTouchArea = document.getElementById('white-circle') ;
    var myRegion = new ZingTouch.Region(parentTouchArea) ;
    var myRotate = new ZingTouch.Rotate() ;
    var currentAngle = 0;

    myRegion.bind(parentTouchArea , myRotate , function(e){

        currentAngle += e.detail.distanceFromLast;

        console.log(e.detail.distanceFromOrigin) ;
       
        if(currentAngle > 30 || currentAngle < -20){
            currentAngle = 0 ;
        }

        if( Math.floor(currentAngle) === 20 || Math.floor(currentAngle) === -20){
            // console.log("angle" , e.detail.angle) ;
            findActiveIndex(currentAngle) ;
            currentAngle=0 ;
        }
        // console.log( currentAngle) ;
    });

  }

  const [ activeIndex , setIdx ] = useState(0) ;

    const findActiveIndex = (currentAngle) => {
        if(currentAngle > 0){
            if(activeIndex === iPod.length - 1){
                setIdx(0) ;
            }else{
                setIdx(activeIndex + 1 ) ;
            }
            // setIdx(activeIndex % iPod.length) ;

        }else{
            if(activeIndex === 0){
                setIdx(iPod.length - 1) ;
            }else{
                setIdx(activeIndex - 1 ) ;
            }
        }

        // console.log(activeIndex);
    }
  
  return (
    <div className="wrapper">
      <Screen activeIndex={activeIndex} />
      <Wheel zingFunc={zingFunc} />
    </div>
  );
}

export default App;
