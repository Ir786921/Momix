
import React from 'react';
import { useState ,useEffect } from 'react';
import Caros from './Carousel';
import Navbar from './Navbar';
import Footer from './Footer';

const TopRated = () => {
   
    const [movie,setMovie] = useState([]);
    const [shows,setShows] = useState([]);
    const[title,setTitle] = useState("");


       
    const moviemediatypedata = movie.map((item)=>Object.assign(item,{media_type:"movie"}));
    console.log(moviemediatypedata);

      
    const tvmediatypedata = shows.map((item)=>Object.assign(item,{media_type:"tv"}));
    console.log(tvmediatypedata);


    const [dayclick,setDayclick] = useState(true);
    const [weekclick,setWeekclick] = useState(false);

   
   
    useEffect(()=>{Movieapi();},[]);
    useEffect(()=>{Showapi();},[]);

 

    async function Movieapi(){
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US&page=1");
        const result = await response.json();
        setMovie(result.results)
    }

    async function Showapi(){
        const response = await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US&page=1");
        const result = await response.json();
        setShows(result.results)
    }

  return (
    <>

    <div className="container-fluid" style={{backgroundColor:"#041e50"}}>
    <div className="container-sm">
      <div className="row-sm">
        <div className="col-12">
          <div className="tw-flex tw-justify-between tw-p-2">
            <h4 className="tw-text-red-600">Top Rated {title}</h4>
            <div>
              <div className="tw-bg-red-600 tw-rounded-xl tw-w-44 tw-flex tw-justify-center tw-p-1">
                <button style={{ backgroundColor:`${dayclick? "#17A8E3" : " "}`}} onClick={()=>{
                  setDayclick(!dayclick);
                  setWeekclick(false);
                  setTitle("Movies")
                }} className="tw-mr-2 tw-rounded-md tw-border-0 tw-p-2 tw-text-purple-800 tw-font-semibold tw-hover:tw-bg-red-500">
                  Movies
                </button>
                <button onClick={()=>{
                  setWeekclick(!weekclick);
                  setDayclick(false);
                  setTitle("Shows")
                }} style={{ backgroundColor:`${weekclick? "#17A8E3" : " "}`}} className="tw-rounded-md tw-border-0 tw-p-2 tw-text-purple-800 tw-font-semibold">
                  Show
                </button>
              </div>
            
            </div>
          </div>
        {dayclick ? <Caros data = {moviemediatypedata}/> : <Caros data = {tvmediatypedata}/>}
        </div>
      </div>
    </div>
  </div>

  </>
  )
}

export default TopRated;