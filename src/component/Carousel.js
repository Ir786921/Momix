import { Carousel } from "react-responsive-carousel";
import React, { useState } from "react";
import image1 from "./gallery-icon-picture-landscape-vector-sign-symbol_660702-313.avif";
import { Link } from "react-router-dom";

const Caros = ({ data }) => {

 

  return data.map((item) => {
    return (
      <Link
        to={`/details/${item?.media_type}/${item?.id}`}
        className="tw-rounded-md tw-overflow-hidden tw-drop-shadow-lg tw-w-44 tw-inline-block tw-m-10 tw-h-64 tw-relative tw-outline hover:tw-outline-red-600 after:tw-text-red-900 after:tw-text-xl"
        key={item?.id}
      >
        <div className="tw-absolute tw-rounded-full tw-border-10 tw-border-black-900 tw-text-red-900 tw-bg-yellow-200 tw-w-12 tw-h-6 tw-text-white-900 tw-flex tw-justify-center tw-font-bold">
          {item?.vote_average}
        </div>
   
        <img
          src={
            item.poster_path == null
              ? image1
              : `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`
          }
          alt="title"
          className="tw-w-full "
        
        />
      </Link>
    );
  });
};
export default Caros;
