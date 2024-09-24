import { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { addUpComingMovies } from '../utilis/movieSlice';
const useUpComingMovies=()=>{
    const dispatch=useDispatch()
  const getUpComingMovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
    const json=await data.json();
     dispatch(addUpComingMovies(json.results));
  };
  useEffect(()=>{
    getUpComingMovies();
  },[getUpComingMovies ])
}
export default useUpComingMovies;