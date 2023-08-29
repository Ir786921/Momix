
import { useState , useEffect } from 'react';
import Caros from './Carousel';
import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

const Movies = () => {


    const [popular,setPopular] = useState([]);
    
    const [upcoming,setUpcoming] = useState([]);

    const [dayclick,setDayclick] = useState(true);
    const [weekclick,setWeekclick] = useState(false);

   
    useEffect(()=>{popularapi();},[]);
    useEffect(()=>{Upcomingapi();},[]);

   
    const popularmediatypedata = popular.map((item)=>Object.assign(item,{media_type:"movie"}));
    console.log(popularmediatypedata);

    const upcomingmediatypedata = upcoming.map((item)=>Object.assign(item,{media_type:"movie"}));
    console.log(upcomingmediatypedata);


    async function popularapi(){
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=9bcbb8d5e8df89fac03126e45c292f30&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc");
        const result = await response.json();
        setPopular(result.results)
    }

    async function Upcomingapi(){
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US&page=1");
        const result = await response.json();
        setUpcoming(result.results)
    }

  return (
   <>
  
    <div className="container-fluid" style={{backgroundColor:"#041e50"}}>
    <div className="container-sm">
      <div className="row-sm">
        <div className="col-12">
          <div className="tw-flex tw-justify-between tw-p-2">
            <h4 className="tw-text-red-600">Top Movies</h4>
            <div>
              <div className="tw-bg-red-600 tw-rounded-xl tw-w-44 tw-flex tw-justify-center tw-p-1">
                <button style={{ backgroundColor:`${dayclick? "#17A8E3" : " "}`}} onClick={()=>{
                  setDayclick(!dayclick);
                  setWeekclick(false)
                }} className="tw-mr-2 tw-rounded-md tw-border-0 tw-p-2 tw-text-purple-800 tw-font-semibold tw-hover:tw-bg-red-500">
                  Popular
                </button>
                <button onClick={()=>{
                  setWeekclick(!weekclick);
                  setDayclick(false)
                }} style={{ backgroundColor:`${weekclick? "#17A8E3" : " "}`}} className="tw-rounded-md tw-border-0 tw-p-2 tw-text-purple-800 tw-font-semibold">
                  Upcoming
                </button>
              </div>
            
            </div>
          </div>
        {  dayclick ? <Caros data = {popularmediatypedata}/> : <Caros data = {upcomingmediatypedata}/>}
        </div>
      </div>
    </div>
  </div>
  
 
  </>
  )
}

export default Movies;