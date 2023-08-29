import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import Videopop from "./videopop";
import { useDispatch, useSelector } from "react-redux";

import Store from "./store";
import { addfavourite } from "./listslice";
import wishlistslice from "./listslice";
import Caros from "./Carousel";

const Details = () => {
  const [data, setData] = useState([]);

  const [cast, setCast] = useState([]);
  const [genre, setGenre] = useState([]);
  const [tvcast, seTvcast] = useState([]);
  const [clicked,setClicked] = useState(false);
  const [similar,setSimilar] = useState([]);
  const [recommendations ,setRecommendations] = useState([]);

  const [production, setProduction] = useState([]);

  const [overview, setoverview] = useState(true);
  const [details, setDetails] = useState(false);
  const [show, setShow] = useState(false);
  const [videoid, setVideoid] = useState(null);
  const [trailersearch, setTrailersearch] = useState([]);
  const { media_type, id } = useParams();
  const final = [];
 
  data["media_type"] = `${media_type}`;

  const castname = cast.map((item) => {
    return item?.name;
  });

  
  // Redux work 
  const wishlist = useSelector(Store => Store.wishlist.item);
  console.log(wishlist);
  const dispatch = useDispatch ();
 
  
  
  for (let i = 0; i < castname.length; i++) {
    const finalcast = castname[i];
    final.push(finalcast);
  }

 


  const Trailer = trailersearch.filter((item) => {
    return item.type === "Trailer";
  });



  useEffect(() => {
    detailsapi();
  }, []);

  useEffect(() => {
    Castapi();
  }, []);

  useEffect(() => {
    Similarapi();
  }, []);
  useEffect(() => {
    recommendedapi();
  }, []);

  async function detailsapi() {
    const response = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}?&append_to_response=videos&api_key=9bcbb8d5e8df89fac03126e45c292f30`
    );
    const result = await response.json();
    setData(result);
    setGenre(result.genres);
    setProduction(result.production_companies);
    setTrailersearch(result.videos.results);
    (media_type === "tv" && seTvcast(result.created_by));
  }

  async function Castapi() {
    const response = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US`
    );
    const result = await response.json();
    setCast(result.cast);
  }

  async function Similarapi() {
    const response = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US&page=1`
    );
    const result = await response.json();
    setSimilar(result.results);
  }


  async function recommendedapi() {
    const response = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/recommendations?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en-US&page=1`
    );
    const result = await response.json();
    setRecommendations(result.results);
  }
  return (
    <>
      <div className="container-fluid tw-bg-black">
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-6 tw-flex tw-flex-col">
              <div className="tw-rounded-md tw-overflow-hidden tw-shadow-lg tw-items-center tw-h-[350px] tw-object-fit tw-m-10 tw-relative tw-outline hover:tw-outline-red-600">
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`}
                  alt=""
                  className="tw-w-full tw-h-full tw-rounded-xl "
                />
              </div>

              <div className="tw-rounded-md tw-flex tw-justify-center tw-h-56 mt-4 tw-p-2 tw-rounded-xl tw-outline hover:tw-outline-red-600">
                <Videopop
                  show={show}
                  setShow={setShow}
                  videoid={Trailer[0]?.key}
                  setVideoid={setVideoid}
                />
              </div>
              <br />
            </div>
            <div className="col-sm-6">
              <div className="mt-5">
                <h1 className="tw-text-white tw-inline-block">
                  {media_type === "movie" ? data.original_title : data.name}
                </h1>
                <span className="tw-float-right tw-text-white tw-font-bold tw-text-2xl">
                  {data.vote_average} &nbsp;
                  <i className="bi bi-star-fill tw-text-yellow-400 tw-text-2xl"></i>
                </span>
                <br />
                <span className="tw-text-white tw-text-md">
                  {media_type === "movie"
                    ? data.release_date
                    : data.first_air_date}{" "}
                  |
                </span>{" "}
                <span className="tw-text-white tw-text-md">
                  {data.runtime}&nbsp;min |
                </span>{" "}
                |<span className="tw-text-white tw-text-md">16+</span> <br />
                <br />
                <br />
                <div className="tw-bg-slate-900 tw-p-2 tw-rounded-lg tw-flext tw-w-full tw-outline">
                  <h4
                    className="tw-text-white tw-inline-block tw-cursor-pointer tw-p-2 tw-rounded-md"
                    onClick={() => {
                      setoverview(true);
                      setDetails(false);
                    }}
                    style={{ backgroundColor: `${overview ? "#EF4444" : " "}` }}
                  >
                    Overview
                  </h4>
                  <h4
                    className="tw-inline-block tw-text-white tw-ml-10 tw-cursor-pointer tw-p-2 tw-rounded-md"
                    onClick={() => {
                      setDetails(!details);
                      setoverview(false);
                    }}
                    style={{ backgroundColor: `${details ? "#EF4444" : " "}` }}
                  >
                    Details
                  </h4>
                  <span className="tw-float-right tw-p-2 tw-text-white">
          <i
            className= {`bi bi-heart-fill tw-text-2xl ${clicked ?"tw-text-red-600" : " "}`}
            
            onClick={() => {
             
              dispatch(addfavourite(data));
              setClicked(!clicked);
             
            }}
          ></i>
        </span>
                </div>
                <br />
                {overview ? (
                  <div className="tw-bg-slate-900 tw-p-3 tw-rounded-lg tw-outline tw-overflow-y-auto tw-h-[408px]">
                    <p className="tw-text-slate-300">{data.overview}</p>
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Staring :
                    </h5>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    <span className="tw-text-slate-300">
                      { final.map((item) => {
                            return (
                              <span className="">{item}&nbsp;,&nbsp; </span>
                            );
                          })
                      }
                    </span>
                    <br />
                    <br />
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Genres :
                    </h5>{" "}
                    &nbsp;&nbsp;&nbsp;{" "}
                    <span className="tw-text-slate-300">
                      {genre.map((item) => {
                        return <span>{item?.name}&nbsp;,&nbsp;</span>;
                      })}
                    </span>
                    <br />
                    <br />
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Productions :
                    </h5>{" "}
                    &nbsp;&nbsp;&nbsp;{" "}
                    <span className="tw-text-slate-300">
                      {production.map((item) => {
                        return <span>{item?.name}&nbsp;,&nbsp;</span>;
                      })}
                    </span>
                    <br />
                    <br />
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Tagline :
                    </h5>{" "}
                    &nbsp;&nbsp;&nbsp;{" "}
                    <span className="tw-text-slate-300">{data.tagline}</span>
                  </div>
                ) : (
                  <div className="tw-bg-slate-900 tw-p-2 tw-rounded-lg tw-outline">
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Country : &nbsp;&nbsp;&nbsp;{" "}
                      <span className="tw-text-slate-300">
                        {data.production_countries[0]?.name}
                      </span>
                    </h5>
                    <br />
                    <br />
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Popularity : &nbsp;&nbsp;&nbsp;{" "}
                      <span className="tw-text-slate-300">
                        {data.popularity}
                      </span>
                    </h5>
                    <br />
                    <br />
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Language : &nbsp;&nbsp;&nbsp;{" "}
                      <span className="tw-text-slate-300">
                        {data.spoken_languages[0]?.name}
                      </span>
                    </h5>
                    <br />
                    <br />
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Vote Count : &nbsp;&nbsp;&nbsp;{" "}
                      <span className="tw-text-slate-300">
                        {data.vote_count}
                      </span>
                    </h5>
                    <br />
                    <br />
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Imdb id : &nbsp;&nbsp;&nbsp;{" "}
                      <span className="tw-text-slate-300">{data.imdb_id}</span>
                    </h5>
                    <br />
                    <br />
                    <h5 className="tw-inline-block tw-text-slate-600">
                      status : &nbsp;&nbsp;&nbsp;{" "}
                      <span className="tw-text-slate-300">{data.status}</span>
                    </h5>
                    <br />
                    <br />
                    <h5 className="tw-inline-block tw-text-slate-600">
                      Budget: &nbsp;&nbsp;&nbsp;{" "}
                      <span className="tw-text-slate-300">{data.budget}</span>
                    </h5>
                    <br />
                    <br />
                  </div>
                )}
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="text-white">
            <h2>Similar  {media_type}</h2>
          
            <div className="tw-overflow-x-auto">
              <Caros data={similar} />
            </div>
            <br />
            <br />
            <h2> Recommended {media_type}</h2>
          
            <div className="tw-overflow-x-auto">
              <Caros data={recommendations} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
