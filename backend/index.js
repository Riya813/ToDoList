const express = require('express');
const { url } = require('inspector');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());

var toDoList = [
    // {
    //     task: "Hiking",
    //     date: "13/04/2022",
    //     option: "Personal",
    // },
    // {
    //     task: "Biking",
    //     date: "13/04/2022",
    //     option: "Personal",
    // }
]

app.get('/', function(req, res){
    // res.send('<h1>Hello</h1>');

    return res.render('home', {
        title: "My To-Do List",
        todo_List: toDoList
    });
})

app.post('/create-task', function(req, res){
    // toDoList.push({
    //     task: req.body.task,
    //     date: req.body.date,
    //     option: req.body.option
    // });

    toDoList.push(req.body);
    return res.redirect('/');
    // return res.redirect('back');
})

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log('Express Server is running successfully on Port:', port);
})