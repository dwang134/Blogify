import { Link } from "react-router-dom";
import '../style/styles.scss';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-2 h-30 bg-gray-100">
      <h1 className= 'font-bold text-3xl hover:cursor-pointer'>Blogify</h1>
      <div className="flex justify-center items-center w-1/2">
        <div className='flex justify-around items-center w-2/3'>
          <Link to="/?category=art">Art</Link>
          <Link to="/?category=science">Science</Link>
          <Link to="/?category=tech">Tech</Link>
          <Link to="/?category=cinema">Cinema</Link>
          <Link to="/?category=design">Design</Link>
          <Link to="/?category=food">Food</Link>
        </div>
        <div className='flex justify-around items-center w-1/3 py-3'>
          <Link className='font-bold' to='/profile/?user=userid'>Deelin</Link>
          <Link className='font-bold' to='/'>Logout</Link>
          <p className='font-semibold rounded-full border-black border p-1 h-12 w-12 flex flex-center items-center hover:border-teal-600 hover:shadow-lg hover:shadow-cyan-500/50 hover:text-teal-600 hover:cursor-pointer'>Write</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
