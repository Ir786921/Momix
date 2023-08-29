
import React from 'react';
import { useState,useEffect } from 'react';
import Caros from './Carousel';
import Navbar from './Navbar';
import Footer from './Footer';

const Series = () => {

    
    const [popular,setPopular] = useState([]);
    const [airing,setAiring] = useState([]);

    const [dayclick,setDayclick] = useState(true);
    const [weekclick,setWeekclick] = useState(false);

    const popularmediatypedata = popular.map((item)=>Object.assign(item,{media_type:"tv"}));
    console.log(popularmediatypedata);

    
    const airingmediatypedata = airing.map((item)=>Object.assign(item,{media_type:"tv"}));
    console.log(airingmediatypedata);


  
    useEffect(()=>{popularapi();},[]);
    useEffect(()=>{Airingapi();},[]);

  

    async function popularapi(){
        const response = await fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US&page=1");
        const result = await response.json();
        setPopular(result.results)
    }

    async function Airingapi(){
        const response = await fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US&page=1");
        const result = await response.json();
        setAiring(result.results)
    }

  return (
    <>
 
   
    <div className="container-fluid" style={{backgroundColor:"#041e50"}}>
    <div className="container-sm">
      <div className="row-sm">
        <div className="col-12">
          <div className="tw-flex tw-justify-between tw-p-2">
            <h4 className="tw-items-center tw-p-2 tw-text-red-800 tw-font-semibold"> Top Shows</h4>
            <div>
              <div className="tw-bg-red-500 tw-rounded-xl tw-w-44 tw-flex tw-justify-center tw-p-1">
                <button style={{ backgroundColor:`${dayclick? "#17A8E3" : " "}`}} onClick={()=>{
                  setDayclick(!dayclick);
                  setWeekclick(false)
                }} className="tw-mr-2 tw-rounded-md tw-border-0 tw-p-2 tw-text-purple-800 tw-font-semibold ">
                  Popular
                </button>
                <button onClick={()=>{
                  setWeekclick(!weekclick);
                  setDayclick(false)
                }} style={{ backgroundColor:`${weekclick? "#17A8E3" : " "}`}} className="tw-rounded-md tw-border-0 tw-p-2 tw-text-purple-800 tw-font-semibold">
                  On Air
                </button>
              </div>
            
            </div>
          </div>
        { dayclick ? <Caros data = {popularmediatypedata}/> : <Caros data = {airingmediatypedata} /> }
        </div>
      </div>
    </div>
  </div>
 

  </>
  )


}

export default Series;