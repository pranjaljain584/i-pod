import ZingTouch from 'zingtouch' ;
export const xyz = () => {
    var parentTouchArea = document.getElementById('white-circle') ;
    var myRegion = new ZingTouch.Region(parentTouchArea) ;

    myRegion.bind(parentTouchArea , 'rotate' , function(e){
        // console.log(parentTouchArea) ;
        console.log("rotate") ;
        // console.log(e.details) ;
    });
}
