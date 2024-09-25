import { useEffect } from 'react'
//import { API_OPTIONS } from '../utilis/constants';
import { useDispatch, useSelector} from 'react-redux';
import { addTrailerVideo } from '../utilis/movieSlice';
import trailerVideoData from "../trailerVideo.json"

const useTrailerVideo = ( ) => {
    const dispatch=useDispatch();
    const  trailerVideo=useSelector(store=>store.movies.trailerVideo)
    const getMovieVideos = () => {
        //const data = await fetch('https://api.themoviedb.org/3/movie/957452/videos?language=en-US', API_OPTIONS)
        const json =trailerVideoData ;

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))

    }
    useEffect(() => {
      !trailerVideo && getMovieVideos()
    })
}

export default useTrailerVideo;