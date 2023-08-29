import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./component/Navbar";
import SearchBar from "./component/SearchBar";
import SearchOutput from "./component/SearchOutput";
import searchdata from "./component/Context";
import Trending from "./component/Trending";
import Movies from "./component/Movies";
import { Outlet, Route, RouterProvider, createBrowserRouter, useParams , useLocation} from "react-router-dom";
import Form from "./component/form";
import Home from "./component/home";
import Footer from "./component/Footer";
import Series from "./component/Series";
import TopRated from "./component/TopRated";
import Details from "./component/Details";
import Geners from "./component/Geners";
import { Provider } from "react-redux";
import Store from "./component/store";
import Favourite from "./component/Favourite";


export const App = () => {
 
  const [data, setData] = useState([]);


const content = useLocation();
  let path =   content.pathname;
  console.log(path);
  const param = useParams();
 ;

  return(
    <Provider store={Store}>
 
<searchdata.Provider value={{
  greet:"hii",
  api: data
}}>

 {path != `/details/${param.id}` && <Navbar/>}

<Outlet/>
{path != `/details/${param.id}` && <Footer/>}

   </searchdata.Provider>
   
   </Provider>
  )
};

const routeConfig = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },{
        path:"/movie",
        element:<Movies/>
      },
      {
               path:"/details/:media_type/:id",
               element:<Details/>
             },
             {
                    path:"/trending",
                   element:<Trending/>
                  },
                  {
                           path:"/shows",
                          element:<Series />
                         },
                         {
                          path:"/topRated",
                           element:<TopRated/>
                         },
                         {path:"/genre/:gener/:id",
                        element:<Geners/>
                      },
                      {path:"/favourities",
                      element:<Favourite/>
                    }


    ]
 
   
  }
 
 
  

  
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routeConfig} />);
