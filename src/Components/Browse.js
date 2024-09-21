
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpComingMovies from '../Hooks/useUpComingMovies';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpComingMovies();
  
  return (
    <div>
      <Header/>
      {showGptSearch?
         <GptSearch/>:(
          <>
          <MainContainer/>
          <SecondContainer/></>
      )}
   </div>
  )
}

export default Browse;