const express =require("express");

const app=express();

const PORT= 8081;

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "server is running",
    });
});

app.get("*",(req,res)=>{
    res.status(404).json({
        message: "not found",
    });
});
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
});
