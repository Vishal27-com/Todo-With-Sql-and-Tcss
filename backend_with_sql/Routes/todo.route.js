const express=require('express');
const { addTodo, getTodo, patchTodo, deleteTodo } = require('../Controller/todo.controller');
const app=express.Router();

app.post('/',addTodo);
app.get('/',getTodo);
app.patch('/:id',patchTodo);
app.delete('/:id',deleteTodo);

module.exports=app;