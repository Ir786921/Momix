import React, { useContext } from "react";

import searchdata from "./Context";

const SearchOutput = () => {
       const info = useContext(searchdata)
  return (
    <div className="container-fluid tw-bg-gradient-to-r tw-from-indigo-500 tw-via-purple-500 tw-to-pink-500 .. tw-p-2">
        <Card info = {info.api}/>
    </div>
  );
};

export default SearchOutput;
