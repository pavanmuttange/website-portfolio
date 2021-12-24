import React  from "react";
import './home.css';
import me from '../img/me.jpg';
  
const Home = () =>{
return(
    <React.Fragment>
    <div className="main-div">
    
    <div className="l-div">
    <div className="i-left-wrapper">
    <h1 className="i-intro">hello, my name is</h1>
    <h2 className="i-name">Pavan S</h2>
    <div className="i-title">
    <div className="i-title-wrapper">
    <div className="i-title-item">FULL STACK DEVELOPER</div>
    <div className="i-title-item">WEB DEVELOPER</div>
    <div className="i-title-item"> UI/UX DESIGNER</div>
    </div>
    </div>
    <div className="i-desc">
    I design and develop service for cutomers of all sizes,specializing
    in creating stylish,modern webites,web services and online
    stores
    </div>
    </div>
    </div>
    <div className="r-div">
    <div className="i-bg"></div>
    <img src={me} alt="" className="i-img" />
    </div>
    </div>
    </React.Fragment>
);
}
export default Home;
