const multer=require('multer');
const nodemailer = require("nodemailer");

const unique =Date.now();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null, unique + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage }).single('path')
  const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads1')
    },
    filename: function (req, file, cb) {
      
      cb(null, unique + file.originalname)
    }
  })
  
  const upload1 = multer({ storage: storage1 }).single('path')
const productM = require('../models/productModel');
const interiorM = require('../models/interiorModel');

 
const insertProduct= async(req,res)=>{
    //console.log(req.body );
    //res.send({msg:1})
    try{
        const instance =new productM(req.body);
        var ans =instance.save();
        res.send({msg:ans})
    }catch(err){
        console.log(err);
    }
}
const addpage =(req,res)=>{
    res.render('addp');
}
const insertInterior= async(req,res)=>{
    //console.log(req.body );
    //res.send({msg:1})
    try{
        const instance =new interiorM(req.body);
        var ans =instance.save();
        res.send({msg:ans})
    }catch(err){
        console.log(err);
    }
}
const showproduct =async function(req,res){
    try {
        var result =await productM.find();
        res.render('show',{data:result});
    } catch (error) {
        console.log(error);
    }
    
}
const showInterior =async function(req,res){
    try {
        var result =await interiorM.find();
        res.render('showint',{data:result});
    } catch (error) {
        console.log(error);
    }
    
}
const updateProduct=async(req,res)=>{
    console.log(req.params);
    console.log(req.body);
    try {
        var ans= await productM.findByIdAndUpdate(req.params.pid,req.body);
        res.send({msg:ans});
    } catch (error) {
        console.log(err);
    }
    res.send({msg:2})
    
}
const selectProduct=async(req,res)=>{
    //res.send({msg:3})
    try{
        var ans =await productM.find({});
        res.send({msg:ans})
    }catch(err){
        console.log(err);
    }
    
}
const deleteProduct=async(req,res)=>{
    //console.log(req.params);
    //res.send({msg:4})
    try{
        var ans =await productM.findByIdAndDelete(req.params.pid);
        res.send({mag:ans});
    }catch(err){}
}
const productAction = (req,res)=>{
    upload(req, res,async  function (err) {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
        } else if (err) {
          // An unknown error occurred when uploading.
        }
        //console.log(req.body);
        //console.log(req.file);
        req.body.path =req.file.filename;

        try{
            const instance =new productM(req.body);
            var ans =await instance.save();
            //res.send({msg:ans})
            res.redirect('show')
        }catch(err){
            console.log(err);
        }
        // Everything went fine.
      })
}
const productAction1 = (req,res)=>{
    upload1(req, res,async  function (err) {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
        } else if (err) {
          // An unknown error occurred when uploading.
        }
        //console.log(req.body);
        //console.log(req.file);
        req.body.path =req.file.filename;

        try{
            const instance =new interiorM(req.body);
            var ans =await instance.save();
            //res.send({msg:ans})
            res.redirect('showint')
        }catch(err){
            console.log(err);
        }
        // Everything went fine.
      })
}
async function main(usermail) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smpt.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'gopalpawar@gmail.com', // generated ethereal user
        pass: 'gopal123', // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '<gopalpawar@gmail.com>', // sender address
      to: usermail, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
const emailAction = (req,res)=>{
    console.log(req.body);
    main(req.body.your_email).catch(ree=>console.log(err))
}



module.exports={
    insertProduct,
    insertInterior,
    updateProduct,
    deleteProduct,
    selectProduct,
    productAction,
    productAction1,
    addpage,
    showproduct,
    showInterior,
    emailAction

}