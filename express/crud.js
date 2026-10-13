const express = require("express")
const app=express();
app.use(express.json());
const students=[];
app.get("/students",(req,res)=>{
    res.json(students);
})
app.post("/students/",(req,res)=>{
    students.push(req.body)
    res.send("students added")
})
app.put("/students/:id",(req,res)=>{
const id = Number(req.params.id);
const student = students.find(s => s.id === id);
if (!student) {
    return res.status(404).send("Student Not Found")
}
student.name = req.body.name;
//student.course=req.body.course;
res.send("Student Updated Successfully")
});
app.delete("/students/:id",(req,res)=>{
    const id = Number(req.params.id);
    const index = students.findIndex(s => s.id == id);
    if (index == -1){
        return res.status(404).send("Student Not Found");
    }
    students.splice(index,1);
    res.send("Student Deleted Successfully");
});
app.listen("8004",()=>{
    console.log("server is running...")
})                                          