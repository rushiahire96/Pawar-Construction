const mongoose=require('mongoose');
 const Schema =mongoose.Schema;

 const productSchema =new Schema({
    name:String,
    size:String,
    path:String
 }); 

 const Pro =mongoose.model('product',productSchema);
 module.exports= Pro;