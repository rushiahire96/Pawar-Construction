require('dotenv').config();
require('./database/db')
const bodyParser = require('body-parser');

const express = require('express');


const productR = require('./routes/productRoute');

const app = express();
//localhost:8015/products
app.set('view engine', 'ejs'); // lets access all ejs files from 'views' folder


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/uploads',express.static('uploads'));
app.use('/uploads1',express.static('uploads1'));
app.use('/products',productR);

//app.get('/home',(req,res)=>{
//    res.render('showdata');
//});

app.listen(process.env.PORT,()=>{
    console.log('server is running');
});