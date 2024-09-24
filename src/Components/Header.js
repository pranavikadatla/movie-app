import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../utilis/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utilis/userSlice";
import { LOGO } from '../utilis/constants';
import { toggleGptSeatchView } from '../utilis/gptSlice';
const Header = () => {
  const navigate = useNavigate()
  const dispatch=useDispatch();
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser(
            {
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            }
          ));
          navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  }, [auth, dispatch, navigate])
  function handleGPTSearch(){
    dispatch(toggleGptSeatchView())
  }
  return (

    <div className='absolute px-8 py-2 w-screen  bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between  '>
      <img className='w-44 mx-auto md:mx-0'
        src={LOGO}
        alt="logo" />
      {user && (<div className='flex p-2 mx-auto  md:mx-0 -mt-5 md:mt-0'>  
        <button 
          className='mx-4 my-4 px-4 py-2 bg-yellow-500 text-white text-md rounded-lg border-none'
          onClick={handleGPTSearch}>
          {showGptSearch?"Home Page":"GPT Search" }</button>
        <img className=' h-10 rounded-md mt-4' src={user?.photoURL} />
        <button className=' text-white bg-purple-800 mx-3  my-4 px-3 py-2 rounded-lg text-lg' onClick={handleSignOut}>Sign Out</button>
      </div>
      )}
    </div>
  )
}

export default Header;