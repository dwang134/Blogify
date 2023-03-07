import axios, {AxiosError} from 'axios';
import React, { FormEvent, useRef, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

const Login = () => {

  const [err, setErr] = useState<string>('')

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try{
        await axios.post(`${import.meta.env.VITE_PROXY}/auth/login`, {
          username: userRef.current!.value,
          password: passwordRef.current!.value
        }, { withCredentials: true });
        navigate('/');
    }catch(err: unknown | AxiosError){
      if (axios.isAxiosError(err)){
        err.response? setErr(err.response.data) : setErr('');
      }
    }
    
    //check if all fields are filled 
  }

  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-slate-200	'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center bg-white w-1/3 h-1/2 gap-y-5 rounded-md'>
      <h1 className='text-4xl font-bold mb-7'>Login</h1>
          <input ref={userRef} required className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1' type='text' placeholder='username' />
          <input ref={passwordRef} required className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1' type='password' placeholder='password' />
          <button type= 'submit' className='border-2 w-1/4 rounded-md p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white border-none mt-2'>Login</button>
          {err && <p className='text-center text-red-500'>{err}</p> }
          <span className='text-center'>Don't have an account? <Link to='/register' className= 'underline text-blue-600 visited:text-purple-800'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login