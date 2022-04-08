const express = require('express');
const { url } = require('inspector');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const ToDo = require('./models/toDo');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

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

    ToDo.find({}, function(err, tasks){
        if(err){
            console.log('Error in fetching tasks');
            return;
        };

        return res.render('home', {
            title: "My To-Do List",
            todo_List: tasks
        });
    });  
});

// app.get('/delete-task/', function(req, res){
//     console.log(req.query);
    
    
// })
var complete = ["finish jquery"]

app.get('/removetask', function(req, res){
    //get the id from query in the ul
    let id = req.query.id;

    //find the contact in the database using id and delete
    ToDo.findByIdAndDelete(id, function(){
        if(err){
            console.log('error in deleting an object');
            return;
        }

        return res.redirect('back');
        
    });
    // var deleteTask = req.body.check;
    // let taskIndex = toDoList.findIndex(task => task.deleteTask == deleteTask);
    
    // if(taskIndex != -1){
    //     toDoList.splice(taskIndex, 1);
    // }

    
});

// app.get('/delete-btn/', function(req, res){
//     let date = req.query.date;
//     let taskIndex = toDoList.findIndex(task => task.date == date);
    
//     if(taskIndex != -1){
//         toDoList.splice(taskIndex, 1);
//     }

//     return res.redirect('back');
// })

app.post('/create-task', function(req, res){
    // toDoList.push({
    //     task: req.body.task,
    //     date: req.body.date,
    //     option: req.body.option
    // });

    ToDo.create({
        task: req.body.task,
        date: req.body.date,
        option: req.body.option
        
    }, function(err, newTask){
        if(err){
            console.log('error in creating a task');
            return;
        }
        console.log('******', newTask);
        return res.redirect('/');
    });

    // toDoList.push(req.body);
    // return res.redirect('/');
    // return res.redirect('back');
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log('Express Server is running successfully on Port:', port);
})