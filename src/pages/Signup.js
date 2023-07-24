import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import {  toast } from 'react-toastify';

const Signup = () => {
  const{user, signUp} = UserAuth()
  const[email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      toast.success('Succesfully Registered !', {
        position: toast.POSITION.TOP_CENTER
      });
      navigate('./Login.js')
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }
  
  return (
      <>
            <div className='w-full h-screen'>
              <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/95bae10c-9773-4447-af4e-612a244231bd/IN-en-20230717-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
          <div className='absolute bg-black/70 top-0 left-0 w-full h-screen'></div>
              <div className='fixed w-full px-4 py-24 z-50'>
                  <div className='max-w-[450px] h-[500px] bg-black/70  text-white mx-auto'>
                     
                      <div className='max-w-[320px] mx-auto py-16'>
                          <h1 className='text-3xl font-bold uppercase '> Sign Up</h1>
                    
              <form onSubmit={handleSubmit } className='w-full flex flex-col py-4'>
                <input onChange={(e) => setEmail(e.target.value)}
                  className='w-full p-3 my-3 rounded bg-white/10   pl-3' type="email" placeholder=' Email' autoComplete='email' />
                              <input onChange={(e) => setPassword(e.target.value)} className='w-full p-3 my-3 rounded bg-white/10  pl-3 ' type="password" placeholder=' Password' autoComplete='current-password'/>
                             <button className='bg-red-600 py-2 my-6 w-full'> Sign Up</button>
                          </form>
                          <p className='text-sm text-center text-gray-400 leading-loose '> Already a member? 
                              <span className='text-white pl-2 text-lg'>
                              <Link to='/login' >
                                   Sign In
                              </Link>
                </span> </p>
                  
                      </div>
               </div>   
         </div>
         
         
         
          </div>
    </>
  )
}

export default Signup