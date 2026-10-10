import express, { json } from "express";
import jwt, { decode } from "jsonwebtoken";
const app = express();
app.use(express.json());
const SECRET_KEY = 'mysecretkey';

app.post("/login",(req, res)=>{
    const {username,password}=req.body;
    if(username ==='admin'&& password ==='1234'){
        const token = jwt.sign(
            {userkname:username},
            SECRET_KEY,
            {expiresIn:"1h"}
        );
        res.json({
            message:"login successful",
            token:token
        })
    } else{
        res.status(401).json({
            message:"Invalid credenials"
        })
    }
});


function verifyToken(req,res,next){
    const authHeader= req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            message:"Token Required"
        });
        
    }
    

     const token = authHeader.split(" ")[1];
   jwt.verify(token, SECRET_KEY,(err,decoded)=>{
    if(err){
        return res.status(403).json({
            message:"Invalid Token"
        });
    }
    req.user = decoded;
    next();



});
}

app.get('/profile',verifyToken,(req,res)=>{
    res.json({
        message:"Welcome",
        user:req.user
    });
});

app.listen(3000,()=>{
    console.log("server running on port 3000")
});