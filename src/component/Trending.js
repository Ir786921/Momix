import React, { useEffect, useState } from "react";
import Caros from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Trending = () => {
    const [day,setDay] = useState([]);
    const [week,setWeek] = useState([]);
    const [dayclick,setDayclick] = useState(true);
    const [weekclick,setWeekclick] = useState(false);

   
    useEffect(()=>{dayapi();},[]);
    useEffect(()=>{weekapi();},[]);

    async function dayapi(){
        const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US&pages=1");
        const result = await response.json();
        setDay(result.results)
    }

    async function weekapi(){
        const response = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US&pages=1");
        const result = await response.json();
        setWeek(result.results)
    }
  return (
    <>
 
    <div className="container-fluid" style={{backgroundColor:"#041e50"}}>
      <div className="container-sm">
        <div className="row-sm">
          <div className="col-12">
            <div className="tw-flex tw-justify-between tw-p-2">
              <h4 className="tw-text-red-600">Trending Movies/Shows</h4>
              <div>
                <div className="tw-bg-red-600 tw-rounded-xl tw-w-44 tw-flex tw-justify-center tw-p-1">
                  <button style={{ backgroundColor:`${dayclick? "#17A8E3" : " "}`}} onClick={()=>{
                    setDayclick(!dayclick);
                    setWeekclick(false)
                  }} className="tw-mr-2 tw-w-12 tw-rounded-md tw-border-0 tw-p-2 tw-text-purple-800 tw-font-semibold tw-hover:tw-bg-red-500">
                    Day
                  </button>
                  <button onClick={()=>{
                    setWeekclick(!weekclick);
                    setDayclick(false)
                  }} style={{ backgroundColor:`${weekclick? "#17A8E3" : " "}`}} className="tw-rounded-md tw-border-0 tw-p-2 tw-text-purple-800 tw-font-semibold">
                    Week
                  </button>
                </div>
              
              </div>
            </div>
          {dayclick ? <Caros data = {day}/> : <Caros data = {week}/>}
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Trending;
