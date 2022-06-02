const express = require('express');
const path = require('path');

const morgan = require('morgan');

const { engine } = require('express-handlebars');

const app = express();
const port = 3000;



//Http logger
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views/'));

console.log("PATH: " + path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    console.log(req.query)
    res.render('search');
});

app.post('/search',(req, res) =>{
    res.send("hello")
})

app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
});



