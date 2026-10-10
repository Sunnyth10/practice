import jwt from "jsonwebtoken";
const secretKey = "mysecretkey"; 
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlN1bm55Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzg1NTY3Mzk2LCJleHAiOjE3ODU1NzA5OTZ9.9jv47zvOl20mXNrEe-W3vfHvT0PSyDGHT3dzfYD6wkM";

try{
    const decoded = jwt.verify(token, secretKey);
    console.log('valid token');
    console.log(decoded);

}catch(err){
    console.log("invalide token");
}