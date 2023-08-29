
import React, { useContext } from 'react';

import SearchBar from './SearchBar';
import searchdata from './Context';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
 
  <div>  <nav className="tw-flex tw-justify-around tw-bg-black">
  <h1 className="text-center font-bold p-2 tw-text-white"> <Link to="/" className='tw-no-underline tw-text-red-600'> Momix</Link></h1>
  <ul className="tw-flex tw-justify-evenly">
    <li className="tw-text-xl tw-gap-10 tw-text-slate-50 tw-text-1.5xl tw-font-semibold tw-m-2 tw-p-2 tw-list-none">
    <Link to="/movie" className='tw-no-underline tw-text-red-600'> Movies</Link> 
    </li>
    
    <li className="tw-text-xl tw-gap-10 tw-text-slate-50 tw-text-1.5xl tw-font-semibold tw-m-2 tw-p-2 tw-list-none"><Link to="/shows" className='tw-no-underline tw-text-red-600'>Shows</Link></li>
    <li className="tw-text-xl tw-gap-10 tw-text-slate-50 tw-text-1.5xl tw-font-semibold tw-m-2 tw-p-2 tw-list-none"><Link to="/trending" className='tw-no-underline tw-text-red-600'>Trending</Link></li>
    <li className="tw-text-xl tw-gap-10 tw-text-slate-50 tw-text-1.5xl tw-font-semibold tw-m-2 tw-p-2 tw-list-none"><Link to="/topRated" className='tw-no-underline tw-text-red-600'>Top Rated</Link></li>
    <li className="tw-text-xl tw-gap-10 tw-text-slate-50 tw-text-1.5xl tw-font-semibold tw-m-2 tw-p-2 tw-list-none"><Link to="/favourities" className='tw-no-underline tw-text-red-600'>Favourities</Link></li>

  
  </ul>
</nav>

</div>
   
   
  )
  
}

export default Navbar;