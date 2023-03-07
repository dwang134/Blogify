import React from "react";
import { Link } from "react-router-dom";
import Menu from '../../components/Menu';

const Post = () => {
  return (
    <div className="single flex gap-12">
      <div className="content flex flex-col gap-7">
        <img className='w-full h-72 object-cover' src="" alt="" />
        <div className="user flex items-center gap-2 text-base">
          <img className='w-26 h-26 object-cover rounded-full' src="" alt="" />
          <div className="info">
            <span className='font-bold'>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit flex gap-2">
            <Link to={`/write?edit=2`}>
              <img className='w-5 h-5' src="" alt="" />
            </Link>
            <img className='w-full h-72 object-cover' src="" alt="" />
          </div> {/*edit*/}
        </div> {/*user*/}
      </div> {/*content*/}
      <Menu/>
    </div>
  );
};

export default Post;
