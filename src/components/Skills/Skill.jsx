import React from "react";
import '../Skills/Skill.css'
import Bp from "./Skbar.jsx/Bp";
import Gp from "./Skbar.jsx/Gp";
import Jp from "./Skbar.jsx/Jp";
import Mp from "./Skbar.jsx/Mp";
import Np from "./Skbar.jsx/Np";
import Npm from "./Skbar.jsx/Npm";
import Pp from "./Skbar.jsx/Pp";
import Rp from "./Skbar.jsx/Rp";



const Skill = ()=>{
    return(
        <div className="r">
        <h1>SKILLS</h1>
        <div  className="prg">
        <Rp />
        <Np />
        <Jp />
        <Npm />
        <Bp />
        <Mp />
        <Gp />
        <Pp />
        </div>
       </div>
       );
}
export default Skill;