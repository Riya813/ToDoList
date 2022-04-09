//require the library
const mongoose = require('mongoose');

//connect to database
main().catch(err => console.log(err));

//acquire the connection (to check if it is successful)
async function main() {
  await mongoose.connect('mongodb://localhost:27017/toDo_List_db');
};

//error
const db = mongoose.connection;

//up and running then print the message
db.on('error', console.error.bind(console, 'errer coonnecting to db'));
db.once('open', function(){
    console.log('Successfully connected to a database');
})