
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpComingMovies from '../Hooks/useUpComingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpComingMovies();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondContainer/>

    </div>
  )
}

export default Browse;