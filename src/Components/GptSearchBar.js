import React, { useState } from 'react'
import { API_OPTIONS} from '../utilis/constants';
import { addGptMovieNames} from '../utilis/gptSlice';
import { useDispatch, useSelector } from 'react-redux';

const GptSearchBar = () => {
  const [searchText, setSearchText] = useState();
  let  movieNames = useSelector(store => store.gpt.movieNames);
  const dispatch = useDispatch();
  // const searchMovieTMDB = async (movie) => {
  //   const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie
  //     + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
  //   const json = await data.json();
  //   return json.results
  // }
  async function handleGptSearchClick() {
    const gptQuery = " only moives "
      + searchText + "";
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${gptQuery}&maxResults=20&type=video&key=AIzaSyDqCN3aoSwqQzaQ5Fu2By_2O_LGaMjO9Wc`);
    const data = await response.json();
    //   console.log(data.items);
    //   const gptQuery="Act as a Movie Recommendation System and suggest some movies for the query:"
    //   +searchText.current.value
    //   +" only give me  names of 5 movies by comma seperated like the Example result given ahead.Example result: Gadar,Shole,Don,Golmaal,Koi Mil Gaya";
    //   const gptResults = await client.chat.completions.create({
    //     messages: [{ role: 'user', content:gptQuery }],
    //     model: 'gpt-3.5-turbo',
    //   });
    //   if(!gptResults.choices){
    //     return null;
    //   }
    //    console.log(gptResults.choices?.[0]?.message?.content); 
    //    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
    //    const promiseArray=gptMovies.map(movie=>searchMovieTMDB(movie));
    //    const tmdbResults= await Promise.all(promiseArray);
    //    console.log(tmdbResults);
    //    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
    movieNames = data.items;
    dispatch(addGptMovieNames(movieNames));
    // <GptMovieSuggestions searchValue={searchText && searchText}/>
  }
  return (
    <div>
      <div className=' pt-[35%] md:pt-[10%] flex justify-center '>
        <form className='bg-black rounded-lg w-full mx-4 md:w-1/2 grid grid-cols-12 px-1' onSubmit={(e) => e.preventDefault()}>
          <input className=' px-3 md:px-2 py-3 my-3  md:my-3 mx-1 col-span-10 rounded-lg'
            value={searchText}
            type="text"
            placeholder='What would you like to Watch?'
            onChange={(e) => setSearchText(e.target.value)} />
          <button
            className=' col-span-2 my-3 mx-2 md:mx-2 p-1 bg-blue-600 text-white text-lg rounded-lg'
            onClick={() => handleGptSearchClick()}>
            Search
          </button>
        </form>
      </div>
      <div className=' p-4 m-4 mt-6 text-white bg-black bg-opacity-70'>
        <div className='flex justify-around flex-wrap'>
          {searchText ? (movieNames && movieNames.map(movieName => (
            <div className='my-2 ml-14 md:ml-0 w-full  md:w-60 ' key={movieName.id.videoId}>
              <h1 classname="text-center">{movieName.snippet.title.slice(0,10)}</h1>
              <img className='rounded-lg w-58 h-60 bg-gray-400 p-1  my-1' src={movieName.snippet.thumbnails.high.url} />
            </div>
          ))) :
          <h1 className='text-red-600 text-3xl  mx-auto'>Please Enter a Search Value</h1>

          }
        </div>
      </div>
    </div>

  )
}

export default GptSearchBar;