import { useEffect } from 'react'
//import { API_OPTIONS } from '../utilis/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utilis/movieSlice';
import popularData from "../populardata.json"
const usePopularMovies=()=>{
    const dispatch=useDispatch()
    const popularVideos=useSelector(store=>store.movies.popularMovies)
  const getPopularMovies=()=>{
    //const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json=popularData;
     dispatch(addPopularMovies(json.results));
  };
  useEffect(()=>{
   !popularVideos&& getPopularMovies();
  })
}
export default usePopularMovies;    