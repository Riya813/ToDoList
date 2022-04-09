const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');

//importing controller
const home = require('./controllers/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

//routes
app.get('/', home.getHome);
app.post('/create-task', home.createTask);
app.post('/removetask', home.removeTask);

//starting server
app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log('Express Server is running successfully on Port:', port);
})