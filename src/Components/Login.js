import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utilis/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/userSlice';
import { BG_URL, USER_ICON } from '../utilis/constants';
const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch=useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message);
    if (message) return;
    if (!signInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL:  USER_ICON,
            //https://example.com/jane-q-user/profile.jpg
          })
          .then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL}= auth.currentUser;
            dispatch(
              addUser(
                { uid:uid,
                  email:email,
                  displayName:displayName,
                  photoURL:photoURL
                }));
          })
          .catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage)
        });
    }
  } 
  const toggleForm = () => {
    setSignInForm(!signInForm)
  }
  return (
    <div className=''>
      <Header />
      < div className='absolute'>
        <img  className='h-screen object-cover md:w-screen'
          src={BG_URL}
          alt="bg-image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute bg-black w-9/12   md:w-3/12  text-white  p-8 mt-32 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
        <h1 className='mx-auto m-2 font-bold text-2xl py-2'>
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {signInForm ? "" :
          <input
            ref={name}
            type='text' placeholder='Enter Name'
            className='mx-auto  w-full px-2  py-3 m-3 rounded bg-gray-600 ' />}
        <input
          ref={email}
          type='text' placeholder='Enter Email'
          className='mx-auto  w-full px-2  py-3 m-3 rounded bg-gray-600 ' />
        <input
          ref={password}
          type='text' placeholder='Enter Password'
          className=' mx-auto px-2 w-full py-3 m-4 rounded bg-gray-600' />
        <p className='text-lg font-bold text-red-600'> {errorMessage}</p>
        <button className='mx-auto   py-2 w-full m-3 mb-4 rounded  bg-red-700'
          onClick={handleButtonClick}>
          {signInForm ? "Sign In" : "Sign Up"}</button>
        <div className='flex'>
          <span className='text-gray-300'>
            {signInForm ? "New to Netflix ?" : "Already Registered ?  "}
          </span>
          <p className='text-white font-bold cursor-pointer ' onClick={toggleForm}>
            {signInForm ? "Sign up Now" : "Sign in Now"}
          </p>
        </div>
      </form>
    </div>

  )
}

export default Login;