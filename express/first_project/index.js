require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get ('/',(req,res) => {
  res.send ('hello world!');
})

app.get('/instagram', (req,res)=>{
  res.send('instagram request is handle!')
})

app.get('/login',(req,res)=>{
  res.send('login successfully! ')
})
app.listen (process.env.PORT, ()=> {
  console.log(`example app listening on port ${port}`)
})
