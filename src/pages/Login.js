import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const Login = () => {
    const {user, logIn} = UserAuth()
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await logIn(email, password)
            toast.success('Successfully Logged In')
            navigate('/')
        } catch (error) {
             toast.error(error.message)
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
                          <h1 className='text-3xl font-bold uppercase '> Sign In</h1>
                    
                          <form onSubmit={handleSubmit} className='py-6 '>
                              <input onChange={(e) => setEmail(e.target.value)} className='w-full py-2 rounded bg-white/10 mb-5  pl-3' type="email" placeholder=' Email' autoComplete='email' />
                              <input onChange={(e) => setPassword(e.target.value)} className='w-full py-2 rounded bg-white/10  pl-3 ' type="password" placeholder=' Password' autoComplete='current-password'/>
                             <button className='bg-red-600 py-2 my-6 w-full'> Sign In</button>
                          </form>
                          <p className='text-sm text-center text-gray-400 leading-loose '> New to Netflix? 
                              <span className='text-white pl-2 text-lg'>
                              <Link to='../signup' >
                                   Sign up now
                              </Link>
                       </span> </p>
                      </div>
               </div>   
         </div>
         
         
         
          </div>
    </>
  )
}

export default Login