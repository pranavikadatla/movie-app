import { useEffect } from 'react'
//import { API_OPTIONS } from '../utilis/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utilis/movieSlice';
import nowPlayingData from "../nowPlayingData.json"
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
  const getNowPlayingMovies=()=>{
   // const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json=nowPlayingData;
    // console.log(json.results)
     dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(()=>{
   !nowPlayingMovies&&  getNowPlayingMovies();
  })
}
export default useNowPlayingMovies;