import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  // console.log("movies",movies);
  
  return (
    <div className='px-2 '>
      <h1 className='text-3xl py-4  text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
         <div className='flex'>
          {movies && movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path?movie.poster_path:movie.snippet.thumbnails.default.url} />)}
        </div> 
      </div>
    </div>
  )
}

export default MovieList;