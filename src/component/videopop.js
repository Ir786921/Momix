
import React from 'react'
import ReactPlayer from 'react-player';

const Videopop = ({show,setShow,videoid,setVideoid}) => {

    // const hidepop = ()=>{
    //     setShow(false);
    //     setVideoid(null)
    // }
  return (
       
    <div className='tw-w-full'>
        {/* <div onClick={hidepop}></div> */}
        
            {/* <span onClick={hidepop}>close</span> */}
            <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoid}`}
            controls
            width="100%"
            height="100%"
            />
       
    </div>
  )
}

export default Videopop;