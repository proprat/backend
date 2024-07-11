require('dotenv').config()
const express=require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/chayos',(req,res)=>
{
    res.send("<link/>")
})


app.listen(process.env.PORT,()=>{
 console.log(`example app ${port}`)
})
 