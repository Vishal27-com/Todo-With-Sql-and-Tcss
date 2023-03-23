import React, { useState } from 'react'

const Input = ({postTodo}) => {
    const [text,setText]=useState('');
  return (
    <div className='flex  justify-center pt-6 '>
        <input type="text" placeholder='Title' className='outline-sky-400 text-lg font-semibold p-1 rounded-md' onChange={(e)=>setText(e.target.value)} />
        <button className={`bg-green-500 text-white font-semibold p-2 ml-2 rounded-md`} onClick={()=>postTodo(text)}>Add</button>
    </div>
  )
}

export default Input