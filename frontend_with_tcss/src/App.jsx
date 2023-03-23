import { useEffect, useState } from 'react'
import { addTodo, deleteTodoApi, getTodoApi, patchTodoApi } from './api'
import './App.css'
import Input from './Components/Input'
import List from './Components/List'
function App() {
  const [todos,setTodos]=useState([]);
  const getTodo=async ()=>{
  try {
    let res=await getTodoApi();
    setTodos(res.data.message);
  } catch (error) {
    
  }
  }
  const postTodo=async (title)=>{
    try {
      const todo={title}
      await addTodo(todo);
      getTodo();
    } catch (error) {
      
    }
  }
  const updateTodo=async (id,newStatus)=>{
  try {
    await patchTodoApi(id,{newStatus});
    getTodo();
  } catch (error) {
    
  }
  }
  const deleteTodo=async (id)=>{
  try {
    await deleteTodoApi(id);
    getTodo();
  } catch (error) {
    
  }
  }
  useEffect(()=>{
    getTodo();
  },[])
  return (
    <div className='min-h-screen bg-sky-500'>
    <Input postTodo={postTodo} />
    <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
