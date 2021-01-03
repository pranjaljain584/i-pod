import React , { useState} from "react" ;
import Wheel from "./Wheel";
import Screen from "./Screen";
import ZingTouch from 'zingtouch' ;
import {iPod} from "../data" ;
import "../css/app.css";

// menu list
let list = document.getElementsByTagName("li") ;

function App() {

  // compRenderName is Name of Selected Item in menu list
  const [ compRenderName , setCompRenderName ] = useState("") ;
  // this is used so that we show selected compnent only when centre button is clicked
  const [ isCentreClicked , setIsClicked ] = useState(false) ;

  // this function handles all rotation and zingtouch work
  const zingFunc = () => {
    var touchArea = document.getElementById('white-circle') ;
    var myRegion = new ZingTouch.Region(touchArea) ;
    var currentAngle = 0;

    myRegion.bind(touchArea , "rotate" , function(e){

      // angle moved w.r.t last position 
      currentAngle += e.detail.distanceFromLast;

      if(currentAngle > 30 || currentAngle < -20){
          currentAngle = 0 ;
      }

      if( Math.floor(currentAngle) === 20 || Math.floor(currentAngle) === -20){
        // find active element in list using this function
        // find only when there is change of 20deg in positive or negative direction
        findActiveIndex(currentAngle) ;
        currentAngle=0 ;
      }
    });

  }

  // this function handles click on centre circular button and helps in going inside selected menu item
  const handleClick = (acIdx ) => {
    if(list[acIdx]){
      var val =  list[acIdx].innerText ;
      // set name of active element
      setCompRenderName(val) ;
      // set that centre button is clicked
      setIsClicked(true) ;
    }
  }

  // this function handles click on menu button in wheel and takes us home page
  const handleMenuClick=()=>{
    // when menu button is clicked we set that centre btn is not clicked 
    setIsClicked(false) ;
    setCompRenderName("") ;
  }

  const [ activeIndex , setIdx ] = useState(0) ; // by default active index 0

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
