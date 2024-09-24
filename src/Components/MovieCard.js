import React from 'react'
import {IMG_CDN_URL} from "../utilis/constants";
const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;   
  return (
    <div className='w-32 md:w-44 pr-5 '>
      <img className='rounded' alt="Movie Card" src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard;