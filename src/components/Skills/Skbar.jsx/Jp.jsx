import React,{useState,useEffect} from "react";



let progressInterval=null;
const Jp = ()=>{

    const [progress, setProgress]=useState(0)

    useEffect( ()=>{
        progressInterval= setInterval(()=>{
        setProgress(prev=>prev+1);
        },100);
    },[]);

    useEffect(()=>{
        if(progress>=75){
            clearInterval(progressInterval);
        }
    },[progress])
    return(
        <div className="rp">
        <h5 className="rp-head">JavaScript</h5>
        <div className="progress w-80" style={{height:30}}>
        <div className="progress-bar progress-bar-stripped progress-bar-animated" role="progressbar" style={{width:`${progress}%`}}>{progress}%</div>
        </div>
        </div>
       
    );
}
export default Jp;