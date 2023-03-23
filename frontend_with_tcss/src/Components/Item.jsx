const Item = ({data,updateTodo,deleteTodo}) => {
  return (
    <div className='flex justify-between items-center border border-solid border-sky-800 h-12 p-1 mt-1 rounded-md'>
    <p className='font-semibold'>{data?.title}</p>
    <p className='cursor-pointer' onClick={()=>updateTodo(data?.id,data?.status?0:1)}>{data?.status?"Completed":"Pending"}</p>
    <img className='h-4 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png" alt="delete" onClick={()=>deleteTodo(data.id)} />
    </div>
  )
}

export default Item