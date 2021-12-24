import React,{useContext} from "react";
import { ThemeContext } from "../context";

import { NavLink } from "react-router-dom";

const Navigation= () =>{
    const theme= useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
    return(
        <div style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} } >
        <div className="row" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }>
        <div className="col-10 mx-auto" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }>

        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: darkMode && "#333" }}>
        <button className="navbar-toggler" type="button" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white'}} data-toggle="collapse"   data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white'}}></span>
          
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }>
          <ul className="navbar-nav mr-auto" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }>
            <li className="nav-item active" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }>
             <NavLink className="nav-link" to="/" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }>Home </NavLink>
            </li>
            <li className="nav-item active">
            <NavLink className="nav-link" to="/about" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }>About </NavLink>
           </li>
           <li className="nav-item active">
           <NavLink className="nav-link" to="/projects" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }> projects </NavLink>
          </li>
          <li className="nav-item active">
          <NavLink className="nav-link" to="/edu" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }>education </NavLink>
         </li>
         <li className="nav-item active">
         <NavLink className="nav-link" to="/skills" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }>Skills </NavLink>
        </li>
         <li className="nav-item active">
         <NavLink className="nav-link" to="/contact" style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }>Contact </NavLink>
        </li>
          </ul>
         
        </div>
      </nav>
      
      </div>
      </div>
        </div>
    );
}
export default Navigation;