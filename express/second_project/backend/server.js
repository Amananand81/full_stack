// import  express from 'express';
const express = require('express');
const app=  express();

app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id: 1,
            title:'joke one'
        },
        {
            id: 2,
            title:'joke 2'
        },
        {
            id: 3,
            title:'joke 3'
        },
        {
            id: 4,
            title:'joke 4'
        }
    ];
    res.send(jokes);
});
const port = process.env.PORT || 3000;
app.listen (port, () =>{
    console.log(`port is running on ${port}`)
})