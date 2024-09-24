import React from 'react'
import GptSearchBar from './GptSearchBar';
import { BG_URL} from '../utilis/constants';
const GptSearch = () => {
  return (
    <div>
        < div className='fixed -z-10'>
        <img className='h-screen object-cover md:w-screen'
          src={BG_URL}
          alt="bg-image" /> 
      </div>
      <div className=''>
      <GptSearchBar/>
      </div>
        
    </div>
  )
}

export default GptSearch;