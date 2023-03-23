const express = require('express');
const app = express();
const todosRouter=require("./Routes/todo.route")
const cors=require('cors');
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors());
app.get('/', (req, res) => res.send('hello'))
app.use("/todo",todosRouter)

app.listen(8080, () => {console.log('server started on port 8080')})