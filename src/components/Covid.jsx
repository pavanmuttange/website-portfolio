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
    <div className="grid-container">
    <div className="grid-item1">
    <p><span>OUR</span> COUNTRY</p>
    <p>INDIA</p>
    </div>
    <div className="grid-item2">
    <p><span>TOTAL</span> CONFIRMED</p>
    <p>{data.confirmed}</p>
    </div>
    <div className="grid-item3">
    <p><span>TOTAL</span> RECOVERED</p>
    <p>{data.recovered}</p>
    </div>
    <div className="grid-item4">
    <p><span>TOTAL</span> ACTIVE</p>
    <p>{data.active}</p>
    </div>
    <div className="grid-item5">
    <p><span>TOTAL</span> DEATHS</p>
    <p>{data.deaths}</p>
    </div>
    <div className="grid-item6">
    <p><span>LAST</span> UPDATED</p>
    <p>{data.lastupdatedtime}</p>
    </div>
    </div>
    </section>
    </div>
    );
}
export default Covid;