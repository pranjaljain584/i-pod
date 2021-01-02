import React , { useState} from "react" ;
import Wheel from "./Wheel";
import Screen from "./Screen";
import ZingTouch from 'zingtouch' ;
import {iPod} from "../data" ;
import "../css/app.css";

let list = document.getElementsByTagName("li") ;

function App() {

  const [ compRenderName , setCompRenderName ] = useState("") ;
  const [ isCentreClicked , setIsClicked ] = useState(false) ;

  const zingFunc = () => {
    var parentTouchArea = document.getElementById('white-circle') ;
    var myRegion = new ZingTouch.Region(parentTouchArea) ;
    var currentAngle = 0;

    myRegion.bind(parentTouchArea , "rotate" , function(e){

        currentAngle += e.detail.distanceFromLast;

        if(currentAngle > 30 || currentAngle < -20){
            currentAngle = 0 ;
        }

        if( Math.floor(currentAngle) === 20 || Math.floor(currentAngle) === -20){
            findActiveIndex(currentAngle) ;
            currentAngle=0 ;
        }
    });

  }

  const handleClick = (acIdx ) => {
    if(list[acIdx]){
      var val =  list[acIdx].innerText ;
      setCompRenderName(val) ;
      console.log( "in handle click fn" , compRenderName) ;
      setIsClicked(true) ;
    }
  }

  const handleMenuClick=()=>{
    setIsClicked(false) ;
    setCompRenderName("") ;
  }

  const [ activeIndex , setIdx ] = useState(0) ;

    const findActiveIndex = (currentAngle) => {  
        if(currentAngle > 0){
            if(activeIndex === iPod.length - 1){
                setIdx(0) ;
            }else{
                setIdx(activeIndex + 1 ) ;
            }

        }else{
            if(activeIndex === 0){
                setIdx(iPod.length - 1) ;
            }else{
                setIdx(activeIndex - 1 ) ;
            }
        }
    }
  
  return (
    <div className="wrapper">
      <Screen 
        activeIndex={activeIndex} 
        compRenderName={compRenderName}
        isCentreClicked={isCentreClicked}
      />
      <Wheel 
        zingFunc={zingFunc} 
        activeIndex={activeIndex} 
        handleClick={handleClick}
        handleMenuClick={handleMenuClick}
      />
    </div>
  );
}

export default App;
