const express = require('express')
const router = require("express").Router();
const Facture = require ("../models/facture");
const Products= require ("../models/products");
const Clients = require ("../models/clients");

router.get('/:id',(req,res)=>{
  Facture.findById(req.params.id)
  .then(facture=>{res.json([facture])})
    .catch(
        (err) => {
        console.log(err)})  
})


router.get('/', async (req,res)=>{
    try {
        const facture = await Facture.find({})
        res.json(facture) 
    } catch (error) {
        console.log(error)
    }
  
    
})
// 

router.post ('/new',(req,res,next)=>{
  // prixcharge=0
  // var totcharg=parseInt(totcharge)
  // var totprice=parseInt(totalPrice)
  // prixcharge=totalPrice-totcharg
  
  const  products=(req.body.inputFields)
 const Array =products.map((product,key)=>product.unitPrice*product.Qts)
 const result = products.map(function(el) {
  var o = Object.assign({}, el);
  o.price = el.Qts*el.unitPrice;
  return o;
})
const totalPrice = result.reduce(function (accumulator, item) {
  return accumulator + item.price;
}, 0);
var chargetot=0
var charge=parseInt(req.body.charge)
  var chargeEmp=parseInt(req.body.chargeEmployer)
  
  if (chargeEmp===null){ 
    
    chargetot=charge

  }else{
    chargetot=charge+chargeEmp
  } 
 const tot =totalPrice-chargetot
//  console.log(tot)
// console.log(chargetot)
// console.log(totalPrice)
// console.log(result)

    const newchFacture = new Facture({
      facturename:req.body.facturename,
        clientname:req.body.clientname,
        charge:req.body.charge,
        chargeEmployer:req.body.chargeEmployer,
        inputFields:result,
        totalPrice:totalPrice,
        totCharge:chargetot,
        total:tot
    })
    newchFacture.save()
    .then(()=>res.json("Facture added with success"))
    .catch(
        (err) => {
        console.log(err)})
  })



router.delete('/delete/:id', (req, res) => {
    Facture.findByIdAndDelete(req.params.id)
      .then(() => res.json(" Facture deleted with success"))
      .catch(
        (err) => {
          console.log(err)
        })
  })

//retrive a product by his id ok






module.exports = router