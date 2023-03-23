import axios from 'axios';
const BASE_URL='http://localhost:8080'
export const addTodo=async (todo)=>{
return await axios.post(`${BASE_URL}/todo`,todo)
}
export const getTodoApi=async ()=>{
return await axios.get(`${BASE_URL}/todo`);
}
export const patchTodoApi=async (id,newStatus)=>{
return await axios.patch(`${BASE_URL}/todo/${id}`,newStatus);
}
export const deleteTodoApi=async (id)=>{
return await axios.delete(`${BASE_URL}/todo/${id}`)
}