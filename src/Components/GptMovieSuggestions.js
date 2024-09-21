import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import SearchMovies from './SearchMovies';

const GptMovieSuggestions = ({searchValue}) => {
  const movieNames=useSelector(store=>store.gpt.movieNames);
  console.log(searchValue);
  return (
    <div className='p-4 m-2 text-white bg-black bg-opacity-70'>
      <div>
           { searchValue ? ( movieNames&&movieNames.map(movieName=>(
              <div key={movieName.id.videoId}>
                <h1>{movieName.snippet.title}</h1>
               <img src={movieName.snippet.thumbnails.high.url}/> 
              </div>
            ))):
            <h1 className='text-red-600 text-3xl text-center'>Please Enter a Search Value</h1>
          
           }
      </div>
      </div>
  )
}

export default GptMovieSuggestions;