const express=require('express');
const router =express.Router();

const productC =require('../controller/productController');
//http://localhost:8015/products
router
.get('/',productC.selectProduct)
.get('/add',productC.addpage)
.get('/show',productC.showproduct)
.get('/showint',productC.showInterior)
.post('/',productC.insertProduct)
.post('/product-action',productC.productAction)
.post('/product-action1',productC.productAction1)
.post('/email-action',productC.emailAction)
.delete('/:pid',productC.deleteProduct)
.put('/:pid',productC.updateProduct)

module.exports =router;