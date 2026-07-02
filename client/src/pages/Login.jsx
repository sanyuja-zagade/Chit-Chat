import React, { useContext, useState } from 'react'
import assets from '../assets/assets'
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

  const [currentState, setCurrentState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const {login} = useContext(AuthContext);

  const onSubmitHandler = (event)=>{
    event.preventDefault();

    if (currentState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true)
      return;
    }

    login(currentState === "Sign up" ? 'signup':'login', {fullName, email, password, bio});
  }

  return (
    <div className='min-h-screen backdrop-blur-2xl bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col'>
      {/* --------- Logo --------- */}
      <img src={assets.logo_big} alt="logo" className='w-[min(30vw,250px)]' />

      {/* --------- SignUp / Login --------- */}
      <form onSubmit={onSubmitHandler} className='bg-white/8 text-white border-2 border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currentState}
          {isDataSubmitted && <img onClick={()=>setIsDataSubmitted(false)} src={assets.arrow_icon} alt="arrow-icon" className='w-5 cursor-pointer' />}
        </h2>

        {currentState === "Sign up" && !isDataSubmitted && (
          <input onChange={(e)=>setFullName(e.target.value)} value={fullName} type="text" placeholder='Enter full name' className='p-2 border border-gray-500 rounded-md focus:outline-none' required />
        )}

        {!isDataSubmitted && (
          <>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email Address' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />
          </>
        )}

        {currentState === "Sign up" && isDataSubmitted && (
          <textarea onChange={(e)=>setBio(e.target.value)} value={bio} placeholder='provide a short bio...' rows={4} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'></textarea>
        )}

        <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
          {currentState === "Sign up" ? "Create Account" : "Login Now"}
        </button>

        <div className='flex items-center gap-2 text-sm text-gray-500'>
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>

        <div className='flex flex-col items-center gap-2'>
          {currentState === "Sign up" ? (
            <p className='text-sm text-gray-600'>
              Already have an account?  
              <span onClick={()=>{setCurrentState("Login"); setIsDataSubmitted(false)}} className='font-medium text-violet-500 cursor-pointer'> Login here</span>
            </p>
          ) : (
            <p className='text-sm text-gray-600'>
              Create an account. 
              <span onClick={()=>{setCurrentState("Sign up")}} className='font-medium text-violet-500 cursor-pointer'> Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login
