import React, { useContext, useEffect, useState } from "react";
import searchdata from "./Context";
import image from "../asset/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { App } from "..";
import SearchOutput from "./SearchOutput";
import Caros from "./Carousel";

const SearchBar = () => {
  
const SearchApi = useContext(searchdata)
  const [searchtext, setSearchtext] = useState("");
  const [list, setList] = useState(SearchApi.api);
  useEffect(() => {getapidata()}, []);
  async function getapidata() {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=9bcbb8d5e8df89fac03126e45c292f30&include_adult=false&language=en-US&page=1&query=${searchtext}`);
    const result = await response.json();
    setList(result.results)
  }

  
 


  function handleclick(){
   getapidata();
  }
  return (
    <>
 <div
  className="border container-fluid"
   style={{
     backgroundImage: `radial-gradient( rgba(4,9,30,0.7) , rgba(4,9,30,0.7)),url(${image})`,
      backgroundPosition: "cover",
      height: 650,
     }}
   >
    <div className="container-fluid mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 tw-p-4">
            <div className="tw-flex tw-flex-col justify-center tw-gap-4">
            
              <h1 className="tw-text-6xl text-center tw-text-white">The biggest Indian hits. The best Indian stories. All streaming here.</h1>
              <h4 className="text-center tw-text-white tw-w-[450px] tw-m-auto">
              Millions of movies, TV shows.<br/> Explore now.
              </h4>
              <h4 className="text-center tw-text-white tw-w-[450px] tw-m-auto">
              Watch anywhere. Cancel anytime.
              </h4>
              <div className="mt-5 tw-flex tw-justify-center">
                <input
                  type="search"
                  className="tw-w-2/3 tw-p-2 tw-rounded-tl-xl tw-outline hover:tw-outline-red-600"
                  value={searchtext}
                  onChange={(e) => {
                    setSearchtext(e.target.value);
                  }}
                />
                <button className="tw-rounded-br-xl tw-border-0 tw-p-2 tw-active:tw-border-2" onClick={handleclick}>
                  search
                </button>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div>
      <Caros data={list}/>
    </div>

    </>
  );
};

export default SearchBar;
