
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Caros from './Carousel';

const Geners = () => {

  const [data,setData] = useState([]);
  const [tvdata,setTvdata] = useState([]);
  const [movie,setMovie] = useState(true);
  const [show,setShow] = useState(false);
  const type1 = useLocation().pathname;
 ;
  const {name,id } = useParams();
  console.log(id);



  const mediatypedata = data.map((item)=>Object.assign(item,{media_type:"movie"}));
  
 
  
  const mediatypetvdata = tvdata.map((item)=>Object.assign(item,{media_type:"tv"}));
  

  useEffect(()=>{genreApi()},[]);
  useEffect(()=>{genretvApi()},[]);


  async function genreApi() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US&sort_by=release_date.desc&page=1&with_genres=${id}`);
    const result = await response.json();
    setData(result.results);

  }

  async function genretvApi() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US&sort_by=release_date.desc&page=1&with_genres=${id}`);
    const result = await response.json();
    setTvdata(result.results);

  }
  return (
   <div className="container-fluid" style={{backgroundColor:"#041e50"}}>
    <div className="container">
      <div className="row">
        <div className="col-12">
               <div className='tw-flex tw-justify-between tw-p-2'>
                <h1 className='tw-text-red-600'>{type1.slice(7,13)}&nbsp;{movie ? "Movies" : "Shows" }</h1>
                <div className='tw-bg-red-600 tw-rounded-xl tw-w-44 tw-flex tw-justify-center tw-p-1'>
                <button style={{ backgroundColor:`${movie? "#17A8E3" : " "}`}} onClick={()=>{
                  setMovie(!movie);
                  setShow(false)
                }} className="tw-mr-2 tw-rounded-md tw-border-0 tw-p-2 tw-text-purple-800 tw-font-semibold tw-hover:tw-bg-red-500">
                  Movie
                </button>
                <button onClick={()=>{
                  setShow(!show);
                  setMovie(false)
                }} style={{ backgroundColor:`${show? "#17A8E3" : " "}`}} className="tw-rounded-md tw-border-0 tw-p-2 tw-text-purple-800 tw-font-semibold">
                  Show
                </button>
                </div>
                       
               
               </div>

               <div>
              {movie ? <Caros data={mediatypedata} /> :<Caros data={mediatypetvdata} /> } 
               </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Geners;