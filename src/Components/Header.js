import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../utilis/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utilis/userSlice";
import { LOGO } from '../utilis/constants';
const Header = () => {
  const navigate = useNavigate()
  const dispatch=useDispatch();
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
  }, [])
  return (

    <div className='absolute px-8 py-2 w-screen  bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
        src={LOGO}
        alt="logo" />
      {user && (<div className='flex '>
        <img className=' h-10 rounded-md mt-6 ' src={user?.photoURL} />
        <button className=' text-white bg-red-600 m-6 px-4 py-2  rounded-lg text-lg' onClick={handleSignOut}>Sign Out</button>
      </div>
      )}
    </div>
  )
}

export default Header;