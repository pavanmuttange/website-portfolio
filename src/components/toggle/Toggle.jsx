import React from "react";
import './toggle.css';
import sun from '../../img/sun.png';
import moon from '../../img/moon.png';
import { ThemeContext } from "../../context";
import{useContext} from 'react';

const Toggle = () =>{
    const theme =useContext(ThemeContext)

    const handleClick = ()=>{
        theme.dispatch({type:"TOGGLE"})
    }
    
    return(
        <div className="t">
        <img  src={sun} alt="" className="t-img"/>
        <img  src={moon} alt="" className="t-img"/>
        <div className="t-b" onClick={handleClick} style={{left: theme.state.darkMode ? 0 :25}} ></div>
        </div>
    )
}

export default Toggle;