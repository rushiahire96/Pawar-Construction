const mongoose= require('mongoose');
async function connect(){
var ans_connect= await mongoose.connect('mongodb://localhost:27017/gopal_construction')
 //console.log(ans_connect);
}

connect()