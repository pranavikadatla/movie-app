import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../utilis/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utilis/userSlice";
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
    onAuthStateChanged(auth, (user) => {
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
  }, [])
  return (

    <div className='absolute px-8 py-2 w-screen  bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo" />
      {user && (<div className='flex '>
        <img className='w-10 h-10 rounded-2xl mt-6 ' src={user?.photoURL} />
        <button className=' text-white bg-red-500 m-6 px-4 py-2  rounded-lg' onClick={handleSignOut}>Sign Out</button>
      </div>
      )}
    </div>
  )
}

export default Header;