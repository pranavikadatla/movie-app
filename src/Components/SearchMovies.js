import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SearchMovies = (movieNames) => {
  console.log(movieNames)
    return movieNames && (
      <div className=' bg-black w-screen'>
        <div className=' '> 
           {/* {
            movieNames&& movieNames.map(movieName=>(
              <div>
                <h1>{movieName.snippet.title}</h1>
              </div>
            ))
           } */}
          {/* <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Up Coming Movies"} movies={movies.upComingMovies} />  */}
        </div>
      </div>
    )
}

export default SearchMovies;