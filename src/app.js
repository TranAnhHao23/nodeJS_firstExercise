const express = require('express');
const path = require('path');

const morgan = require('morgan');

const {engine} = require('express-handlebars');

const app = express();
const port = 3000;

//add route
const route = require('./routes/index');

//Http logger
app.use(morgan('combined'));

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views/'));

// Home, search, contact

// Routes init
route(app);

console.log("PATH: " + path.join(__dirname, 'resources/views'));

app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
});



