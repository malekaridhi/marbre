const express = require('express')
const router = require("express").Router();
const Products= require ("../models/products");

//retrive products  ok
router.get('/', async (req,res)=>{
    try {
        const products = await Products.find({})
        res.json(products) 
    } catch (error) {
        console.log(error)
    }
  
    
})
// add ncoming Quantity and alert Quantity
router.put('/update/:id',  (req,res)=>{
   
    Products.findById(req.params.id)

    .then(product=>{
        product.incomingQuantity=req.body.incomingQuantity;
        product.alertQuantity=req.body.alertQuantity;
        product.save()
        .then(()=>res.json(product))
        .catch(
            (err) => {
            console.log('error',err)})
    }) 
    .catch(
        (err) => {
        console.log(err)}) 
})
//retrive a product by his id ok
router.get('/:id',(req,res)=>{
    Products.findById(req.params.id)
    .then(product=>{res.json([product])})
      .catch(
          (err) => {
          console.log(err)})  
  })


// add a product ok 
router.post('/new',async(req,res)=>{
    const newProduct = new Products({
        name:req.body.name,
        refrence:req.body.refrence,
        unitPrice:req.body.unitPrice,
        image:req.body.image
        
    })
    newProduct.save()
    .then(()=>res.json("product added with success"))
    .catch(
        (err) => {
        console.log(err)})
})
// delete a product by his id ok
router.delete('/delete-product/:id', (req, res) => {
    Products.findByIdAndDelete(req.params.id)
      .then(() => res.json("product deleted with success"))
      .catch(
        (err) => {
          console.log(err)
        })
  })

//
module.exports = router;