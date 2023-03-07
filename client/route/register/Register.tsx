import axios, {AxiosError} from 'axios';
import { setDefaultResultOrder } from 'dns';
import {useState, useRef, FormEvent} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { request } from 'http';

const Register:React.FC = () => {

  const [errMsg, setErr] = useState<string>('');
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  console.log(import.meta.env.VITE_PROXY)

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(`${import.meta.env.VITE_PROXY}/auth/register`, {
        username: nameRef.current!.value,
        email: emailRef.current!.value,
        password: passwordRef.current!.value,
      });
      // console.log(res);
      navigate("/login");
    } catch (err: unknown | AxiosError) {
      if (axios.isAxiosError(err)) {
        err.response ? setErr(err.response.data) : setErr("");
      }
    }
    
    //check if all fields are filled 
  }


  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-slate-200	">
      <h1 className="text-4xl font-bold mb-7">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center bg-white w-1/3 h-1/2 gap-y-5 rounded-md">
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1"
          type="text"
          placeholder="username"
          required
          ref={nameRef}
        />
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1"
          type="email"
          placeholder="email"
          required
          ref={emailRef}
        />
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-3/4 rounded-md sm:text-sm focus:ring-1"
          type="password"
          placeholder="password"
          required
          ref={passwordRef}
        />
        <button className="border-2 w-1/4 rounded-md p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white border-none mt-2" type='submit'>
          Register
        </button>
        {errMsg && <p className="text-center text-red-500">{errMsg}</p>}
        <span className="text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline text-blue-600 visited:text-purple-800"
          >
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
