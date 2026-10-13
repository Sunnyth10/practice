const express = require('express');
const app = express();
app.use((req,res,next)=>{
    const isLogin=true;
    if(isLogin){
        next()
    }
    else{
        res.status(404).send("you are not logged in")
    }
})
app.get('/',(req,res)=>{
    res.send('welcome to mrv!')
})

app.listen(9000,()=>{
    console.log("server is running on port 9000");
})