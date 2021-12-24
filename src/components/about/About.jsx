import React  from "react";
import './about.css'  ;
import abt from '../../img/abt.jpg';
const About =()=>{
    return(
        <div className="a">
        <div className="a-left">
       <div className="a-card1"></div>
        <div className="a-card2">
        <img src={abt} alt="" className="a-img"/>
        </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">ABOUT ME</h1>
        <p className="a-sub">Hello,I am pavan,holding masters degree(MCA) master of computer application from Garden city university.
        i want to secure a challenging position that utilizes my yers of experience and 
        to work in dynamic environment to keep adding value to the organization,while allowing me the opportunity to grow personally
       
       <div>
       <div className="abt-main">
       <h2>BIRTHDAY : </h2>
       <p>16 FEBRUARY 1999</p>
       </div>
       <div>
       <h2>DEGREE : </h2>
       <p>MASTER OF COMPUTER APPLICATION</p>
       </div>
       <div>
       <h2>COLLEGE : </h2>
       <p>GARDEN CITY UNIVERSITY</p>
       </div>
       <div>
       <h2>PHONE : </h2>
       <p>+91 9663096024</p>
       </div>
       <div>
       <h2>E-MAIL : </h2>
       <p>pavanmuttange@gmail.com</p>
       </div>
       <div>
       <h2>CITY : </h2>
       <p>BANGALORE</p>
       </div>
       </div>
        </p>
        
        </div>
        </div>
    );
}
export default About;
