const express = require('express')
const app = express()

app.use((req,res,next)=>{
    if(10>20){
        res.send("10 is greater than 20");
    next();
    }
})
app.get('/',(req,res)=>{
    res.send('welcome to mrv!')
    
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})