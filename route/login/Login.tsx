import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-slate-200	'>
      <form className='flex flex-col items-center justify-center bg-white w-1/3 h-1/2 gap-y-5 rounded-md'>
      <h1 className='text-4xl font-bold mb-7'>Login</h1>
          <input required className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1' type='text' placeholder='username' />
          <input required className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1' type='password' placeholder='password' />
          <button className= 'border-2 w-1/4 rounded-md p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white border-none mt-2'>Login</button>
          <p className='text-center text-red-500'>Please fill out all fields!</p>
          <span className='text-center'>Don't have an account? <Link to='/register' className= 'underline text-blue-600 visited:text-purple-800'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login