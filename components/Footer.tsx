import { Link } from "react-router-dom"

const Footer:React.FC = () => {
  return (
    <div className='flex justify-between items-center h-32 bg-gray-100 px-8 py-5'>
      <h1 className='font-semibold text-xl'>Blogify</h1>
      <p>Made by <Link to='www.linkedin.com/in/ching-wei/'>Dylan Wang</Link></p>
    </div>
  )
}

export default Footer