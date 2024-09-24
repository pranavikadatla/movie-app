import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies)
  return movies && (
    <div className=' bg-black w-screen'>
      <div className='pl-3 md:pl-10 -mt-10 md:-mt-[23%] relative z-20'> 
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Up Coming Movies"} movies={movies.upComingMovies} /> 
      </div>
    </div>
  )
}

export default SecondContainer;