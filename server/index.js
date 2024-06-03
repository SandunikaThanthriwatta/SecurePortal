const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const app=express();

app.listen(4000,()=>{
    console.log("server started on port 4000");
});

mongoose.connect("mongodb+srv://sandunika:sandu.07@cluster1.eabvy73.mongodb.net/login-with-jwt?retryWrites=true&w=majority&appName=Cluster1t",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB connection successful");
}).catch(err=>{
    console.log(err.message);
});

app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET","POST"],
    credentials:true,
}));

app.use(express.json());