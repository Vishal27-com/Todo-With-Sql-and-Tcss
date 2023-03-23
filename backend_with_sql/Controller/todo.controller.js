const db=require("../db")
const addTodo=(req,res)=>{
try {
  const {title}=req.body;
  const values=[title,false]
   const q="INSERT INTO todo_table(title,status) VALUES(?)"
   db.query(q,[values],(err,data)=>{
    if(err){
        return res.status(500).send({message:err.message,error:true});
    }
    else return res.status(200).send({message:'Posted',error:false})
}) 
} catch (error) {
    res.status(500).send({message:error.message,error:false})
}
}

const getTodo=(req,res)=>{
    try {
    const q='SELECT * FROM todo_table';
    db.query(q,(err,data)=>{
        if(err){
            return res.status(500).send({message:err.message,error:true});
        }
        else return res.status(200).send({message:data,error:false})
    }) 
    } catch (error) {
       res.status(500).send({message:error.message,error:false})
    }
}

const patchTodo=(req,res)=>{
    try {
        const {id}=req.params;
        const {newStatus}=req.body;
        const q="UPDATE todo_table SET `status`= ? WHERE id = ?";
        db.query(q,[newStatus,id],(err,data)=>{
            if(err){
                return res.status(500).send({message:err.message,error:true});
            }
            else return res.status(200).send({message:'Updated',error:false})
        }) 
    } catch (error) {
        res.status(500).send({message:error.message,error:false})
    }
}

const deleteTodo=(req,res)=>{
    try {
        const {id}=req.params;
        const q='DELETE FROM todo_table WHERE id=?'
        db.query(q,[id],(err,data)=>{
            if(err){
                return res.status(500).send({message:err.message,error:true});
            }
            else return res.status(200).send({message:'Deleted',error:false})
        }) 
    } catch (error) {
        res.status(500).send({message:error.message,error:false})
    }
}
module.exports={addTodo,getTodo,patchTodo,deleteTodo}