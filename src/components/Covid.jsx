import React ,{useState,useEffect}from "react";
import './covid.css';

const Covid=()=>{
    const [data, setData]=useState();
    const getCovidData=async()=>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData= await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
            
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();
     }, []);
    
    return(
        <div>
        <section>
        <h1>🔴LIVE</h1>
    <h2 className="mh2">COVID-19 CORONAVIRUS TRACKER</h2>
    
    </section>
    </div>
    );
}
export default Covid;
