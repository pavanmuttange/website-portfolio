import React from "react";
import Project from "../projects/Project";
import './projectlist.css';
import {project} from "../../data"

const ProjectList = () =>{
    return(
        <div className="p1">
        <div className="p1-text">
        <h1 className="p-title"> PERSONAL PROJECTS</h1>
        <p className="p1-disc">
        hello here are my projects which i have worked on 
        </p>
        </div>

        <div className="p1-list">
        {project.map((item )=>(
            <Project key={item.id} img={item.img} link={item.link} />
        ))}
        
        
        </div>
        </div>
    )

}
export default ProjectList;