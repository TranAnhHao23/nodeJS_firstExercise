const express = require('express')
const {request, response} = require("express");
const app = express()
const port = 3000

let userController = require('./controller');

app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
})

app.get('/', (req, res) => {
    // console.log(users)
    res.send(userController.getAllUsers());
})

app.get('/create',(req, res) => {
    res.render('/create')
})

app.post('/create', (req, res) => {
    let response = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    }
    res.send(JSON.stringify(response))
})
app.put('/update', (req, res) => {

})

app.delete('/', (rep, res) => {
    res.send('DELETE Request Called')
})

app.get('/hello', (req, res) => {
    res.send('Got a hello GET request');
})


