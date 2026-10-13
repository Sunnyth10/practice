const express = require("express")
const app = express()
app.use(express.json())
const student=[]
app.get("/student",(req,res)=>{
    res.json(student)

})
app.post("/student",(req,res)=>{
    student.push(req.body)
    res.send("student added")
})
app.put("/student/:id",(req,res)=>{
    res.send(`student with id ${req.params.id} is updated`)
})
app.delete("/stdent/:id",(req,res)=>{
    res.send("student is deleted")
})
app.listen("8000",()=>{
    console.log("server is running....")
})
