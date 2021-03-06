const mongoose = require('mongoose');

//todo model schema
const toDoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    option: {
        type: String,
        required: false
    }
});


const ToDo = mongoose.model('toDo', toDoSchema);

module.exports = ToDo;