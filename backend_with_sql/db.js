const mysql=require("mysql");
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'todos'
})
db.connect((err)=>{
    err?console.log(err):console.log("Database Connected");
})

module.exports=db;