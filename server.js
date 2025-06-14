const express=require("express");
const app=express();
const port=5000;
const ejs=require('ejs');


app.set('view engine','ejs')
const data={title:"merhaba",message:"hello"}
app.get('/',(req,res)=>{
    res.render('index',{data:data})
})


app.listen(port,()=>{
    console.log(port ,"dinleniyor")
})