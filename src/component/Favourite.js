
import React, { useRef,useEffect } from 'react'
import Caros from './Carousel';
import { useDispatch, useSelector } from 'react-redux';
import Store from './store';
import { removefavourite , clearfavourite} from './listslice.js';

const Favourite = () => {
    const favEntertainment = useSelector(Store => Store.wishlist.item);
    const dispatch = useDispatch();
  
  console.log(favEntertainment);

  return (
  <div className='container-fluid'style={{backgroundColor:"#041e50"}}>
  <div className='container p-4 tw-h-screen'>
    {favEntertainment.length>0 && <button className='tw-p-2 tw-bg-red-600 tw-text-white tw-rounded-md mb-5' onClick={()=>{
      dispatch( clearfavourite());
    }}>Clear Favourite </button> } 
   {favEntertainment.length > 0 ? ( <>
    <div className="row tw-ring tw-rounded-xl tw-p-2">
   <div className="col-4"> <div  className='tw-flex tw-justify-around'> <Caros data={favEntertainment}/> </div></div>
 
      <div className="col-8">
     <div className='mt-5 '> {favEntertainment.map((item) => {
       return (
        <>
        <h1 className='tw-text-white tw-inline-block'>{item.media_type === "movie" ? item.original_title : item.name}</h1>
       
        <span className="tw-float-right tw-text-white tw-font-bold tw-text-2xl tw-mr-2">
                   
                  <i className="bi bi-trash3-fill tw-text-white tw-text-2xl tw-cursor-pointer" onClick={()=>{
                        dispatch(removefavourite());
                    }}></i>
                </span>

                <br />
     
        <span className="tw-text-slate-400 tw-text-md">
                  {item.media_type === "movie"
                    ? item.release_date
                    : item.first_air_date}
                  |
                </span>
                <span className="tw-text-slate-400 tw-text-md">
                  {item.runtime}&nbsp;min |
                </span>
               <span className="tw-text-slate-400 tw-text-md">16+</span> 
                <br />
                <br />
                
                <span className="tw-text-slate-300">
                     <h5 className='tw-inline-block tw-text-slate-600'>Genre :</h5>&nbsp;&nbsp;&nbsp;  {item.genres.map((a) => {
                        return <span>{a?.name}&nbsp;,&nbsp;</span>;
                      })}
                    </span>
                    <br />
                    <br />
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Vote Count : &nbsp;&nbsp;&nbsp;{" "}
                      <span className="tw-text-slate-300">
                        {item.vote_average}
                      </span>
                    </h5>
                    <br />
                    <br />
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Vote Count : &nbsp;&nbsp;&nbsp;{" "}
                      <span className="tw-text-slate-300">
                        {item.status}
                      </span>
                    </h5>
        </>
       )
      })}</div>
      </div>
      </div>
      </>) : (<h4 className='tw-text-white'>empty!! Add your favourite movies and shows</h4>)}
     
   
  </div>
    
  </div>
  )
}

export default Favourite;