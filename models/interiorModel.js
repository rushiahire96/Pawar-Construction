const mongoose=require('mongoose');
 const Schema =mongoose.Schema;

 const interiorSchema =new Schema({
    name:String,
    size:String,
    path:String
 }); 

 const Interior =mongoose.model('Interior',interiorSchema);
 module.exports= Interior;