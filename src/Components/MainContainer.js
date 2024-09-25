import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies===null) return;
 const mainMovie=movies[0]; 
 const {title,overview}=mainMovie;
  return (
    <div className=' pt-[20%] bg-black md:pt-0'>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground />
    </div>
  )
}

export default MainContainer;