//importing model
const ToDo = require('../models/toDo');

//function for index route
exports.getHome = function(req, res){
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
};

//function for creating new task
exports.createTask = function(req, res){
    console.log("create task called", req.body);
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
};

//function for removing any task
exports.removeTask = function(req, res){
    const bodyObj = req.body;
    console.log(req.body);
    if(Object.keys(bodyObj).length > 0) {
        console.log(Object.keys(bodyObj));
        ToDo.deleteMany({_id: {$in: Object.keys(bodyObj)}}, function(err, result) {
            if (err) {
                console.log(err);            
            } else {
              console.log(result);
            }
            return res.redirect('/');
        });
    } else {
        return res.redirect('/');
    }
};
