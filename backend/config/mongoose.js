//require the library
const mongoose = require('mongoose');

//connect to database
main().catch(err => console.log(err));

//acquire the connection (to check if it is successful)
async function main() {
  // await mongoose.connect('mongodb://localhost:27017/toDo_List_db');
  await mongoose.connect('mongodb+srv://root:toor@cluster0.iafal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
};

//error
const db = mongoose.connection;

//up and running then print the message
db.on('error', console.error.bind(console, 'errer coonnecting to db'));
db.once('open', function(){
    console.log('Successfully connected to a database');
})