import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from './utilis/Validate';

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState("");
  const name=useRef(null);
  const email = useRef(null);
  const password=useRef(null);
  const handleButtonClick = () => {
     console.log(email.current.value)
     console.log(password.current.value)
     const message=checkValidData(email.current.value,password.current.value)
     console.log(message);
     setErrorMessage(message);
  }
  const toggleForm = () => {
    setSignInForm(!signInForm)
  }
  return (
    <div className=''>
      <Header />
      < div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg"
          alt="bg-image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute bg-black w-3/12  text-white  p-8 mt-32 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
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
          type='password' placeholder='Enter Password'
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