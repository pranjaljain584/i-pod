import ZingTouch from 'zingtouch' ;
export const xyz = () => {
    var parentTouchArea = document.getElementById('white-circle') ;
    var myRegion = new ZingTouch.Region(parentTouchArea) ;
    var myRotate = new ZingTouch.Rotate() ;
    var currentAngle = 0;

    myRegion.bind(parentTouchArea , myRotate , function(e){
        currentAngle += e.detail.distanceFromLast;
        if(e.detail.distanceFromLast < 0){
            currentAngle = 0 ;
        }
        if(currentAngle > 30 ){
            currentAngle = 0 ;
        }

        console.log(currentAngle);

        if( currentAngle > 26.5 && currentAngle < 27.5 ){
            console.log("change active class") ;
            currentAngle=0 ;
        }



    });
}
