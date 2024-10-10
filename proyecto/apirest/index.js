const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");

const app=express();
const port=3001;

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

app.get("/mensaje",(req,res)=>{
    res.send("Servidor ejecutado")
})

app.post("/guardar",(req,res)=>{
    try {
        //const {nombre}=req.body;
    console.log(req.body);
    } catch (error) {
        console.log(error.message);   
    }
});

app.listen(port,()=>{
    console.log("Servidor ejecutado en el puerto 3001");
});