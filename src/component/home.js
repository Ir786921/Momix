import { Link } from "react-router-dom";
import Footer from "./Footer";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import React, { useEffect, useState } from "react";

const Section = ({ question, answer ,isvisible,setIsvisible }) => {
  
  return (
    <div className="tw-flex tw-flex-col tw-items-center">
      <div className="tw-outline tw-bg-slate-700 tw-w-2/3 tw-p-3 tw-rounded-md hover:tw-bg-slate-500"  onClick={()=>{
          setIsvisible(true);
        }}  >
        {" "}
        <h4 className="tw-inline-block tw-text-white">{question}</h4>{" "}
        <span className="tw-text-white tw-float-right">{ isvisible ? ( <i className="bi bi-dash-lg" onClick={()=>{
     setIsvisible(false);
        }}></i>):(<i className="bi bi-plus-lg tw-text-white tw-text-lg"  ></i>)}</span>
        <br />
       {isvisible && <p className="tw-text-white">{answer}</p>} 
      </div>
    </div>
  );
};

const Home = () => {
  const [category, setCategory] = useState([]);
  const [sectionconfig,setSectionconfig] = useState({
    Q1:false,
    Q2:false,
    Q3:false,
  })
  useEffect(() => {
    apicall();
  }, []);
  async function apicall() {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=9bcbb8d5e8df89fac03126e45c292f30&language=en"
    );
    const result = await response.json();
    setCategory(result.genres);
  }
  return (
    <div className="conatiner-fluid" style={{ backgroundColor: "#041e50" }}>
      <>
        <SearchBar />

        <h1 className="m-3 tw-text-white tw-p-2 tw-rounded-lg tw-text-center">
           Various Category of Movies and Tv Shows:
        </h1>
        <div className="tw-grid tw-grid-cols-5 tw-gap-4 tw-p-2 m-2">
          {category.map((item) => {
            return (
              <Link
                to={`/genre/${item?.name}/${item?.id}`}
                key={item?.id}
                className="tw-m-2 tw-bg-red-800 tw-text-white tw-p-2 tw-rounded-lg hover:tw-bg-sky-900 hover:tw-text-white tw-cursor-pointer tw-no-underline"
              >
                <h5 className="text-center">{item?.name}</h5>
              </Link>
            );
          })}
        </div>
        <br />
        <div className="tw-p-6">
          <h1 className="text-center tw-text-white">
            Frequently Asked Questions
          </h1>
          <br />
          <Section
            question={"What is Momix"}
            answer={
              "Momix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more"
            }
            isvisible = {sectionconfig.Q1}
            setIsvisible={()=>{
              setSectionconfig({
                Q1:true,
                Q2:false,
                Q3:false
              })
            }}
          />
          <br />
          <Section
            question={"What can i watch on Momix"}
            answer={
              "Momix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
            }
            isvisible = {sectionconfig.Q2}
            setIsvisible={()=>{
              setSectionconfig({
                Q1:false,
                Q2:true,
                Q3:false
              })
            }}
          />
          <br />
          <Section
            question={"Is Momix is Good for Kids"}
            answer={
              "The Momix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.."
            }
            isvisible = {sectionconfig.Q3}
            setIsvisible={()=>{
              setSectionconfig({
                Q1:false,
                Q2:false,
                Q3:true
              })
            }}
          />
        </div>
      </>
    </div>
  );
};

export default Home;
