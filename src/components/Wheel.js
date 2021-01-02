import React from "react" ;
import '../css/wheel.css' ;

class Wheel extends React.Component {

    render(){

        return (
            <div id="grey-box" >
                <div id="white-circle" onMouseOver={this.props.zingFunc} draggable="false" >
                    <div 
                        className="button" 
                        id="menu" 
                        draggable="false"  
                        onClick={this.props.handleMenuClick}
                    >
                        <span className="btn-name">Menu</span>
                    </div>

                    <div className="button" id="rewind" draggable="false" >
                        <span className="btn-name">&nbsp; <i className="fas fa-fast-backward"></i></span>
                    </div>

                    <div 
                        className="button" 
                        id="centre" 
                        draggable="false" 
                        onDoubleClick={()=>{
                            return this.props.handleClick(this.props.activeIndex);
                        }} 
                        onClick={()=>{
                            return this.props.handleClick(this.props.activeIndex);
                        }} 
                        
                    >
                    </div>

                    <div className="button" id="forward" draggable="false" >
                        <span className="btn-name"> &nbsp; <i className="fas fa-fast-forward"></i></span>
                    </div>
                    <div className="button" id="play-pause" draggable="false" >
                        <span className="btn-name"> <i className="fas fa-play"></i> <i className="fas fa-pause"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wheel ;
