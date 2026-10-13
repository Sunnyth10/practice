const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log('middleware execution...');
    next();
})
app.get('/',(req,res)=>{
    res.send('welcome to mrv');
})
app.listen(6000,()=>{
    console.log('server is running')
})
app.listen(5000,()=>{
    console.log("server is running on port 5000");
})