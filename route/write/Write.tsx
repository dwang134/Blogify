import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState('');

  return (
    <div className="add m-20 flex gap-10">
      <div className="content w-9/12 flex flex-col gap-5 flex-5">
        <input className='border border-zinc-300 p-2' type="text" placeholder='Title'/>
        <div className='editorContainer h-full overflow-scroll border border-zinc-300'>
          <ReactQuill className='editor border-none' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu flex flex-col gap-5 w-3/12">
          <div className="item border border-zinc-300 p-2 flex-1 flex flex-col justify-between">
            <h1 className='text-3xl font-bold font-sans text-base'>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visiblity: </b> Public
            </span>
            <input className='hidden' type="file" id='file' name=''/>
            <label className='underline decoration-1 cursor-pointer' htmlFor='file'>Upload Image</label>
            <div className="buttons">
              <button className= 'bg-slate-200 w-32 text-sm font-sans hover:bg-white font-medium cursor-pointer text-teal-300 bg-slate-50 border border border-teal-300 py-1'>Save as a draft</button>
              <button className= ' bg-slate-200 w-32 text-sm font-sans hover:bg-slate-300 font-medium cursor-pointer text-slate-50 bg-teal-300 border border-teal-300 py-1'>Update</button>
            </div>
          </div>
          <div className="item border border-zinc-300 p-2 flex-1 flex flex-col justify-between text-sm">
            <h1 className='text-3xl font-bold font-sans text-base'>Category</h1>
            <div className="cat flex items-center text-teal-500 gap-1 font-sans font-semibold">
            <input type='radio' name='cat' value='art' id='art'/>
            <label htmlFor='art'>Art</label>
            </div>
            <div className="cat flex items-center text-teal-500 gap-1 font-sans font-semibold">
            <input type='radio' name='cat' value='science' id='science'/>
            <label htmlFor='science'>Science</label>
            </div>
            <div className="cat flex items-center text-teal-500 gap-1 font-sans font-semibold">
            <input type='radio' name='cat' value='technology' id='technology'/>
            <label htmlFor='tech'>Technology</label>
            </div>
            <div className="cat flex items-center text-teal-500 gap-1 font-sans font-semibold">
            <input type='radio' name='cat' value='cinema' id='cinema'/>
            <label htmlFor='cinema'>Cinema</label>
            </div>
            <div className="cat flex items-center text-teal-500 gap-1 font-sans font-semibold">
            <input type='radio' name='cat' value='design' id='design'/>
            <label htmlFor='design'>Design</label>
            </div>
            <div className="cat flex items-center text-teal-500 gap-1 font-sans font-semibold">
            <input type='radio' name='cat' value='food' id='food'/>
            <label htmlFor='food'>Food</label>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Write