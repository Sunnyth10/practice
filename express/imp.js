const express = require('express');
const app = express();

app.get('/students', (req, res) => {
    res.json({name:'Sunny', age:22, city:'Bangalore'});
    res.status(200).send("successfully sent the response");

});

app.listen("3000",() =>{
    console.log('Server is running on port 3000');
})  
