const express = require('express')
const router = require("express").Router();
const ChargeClient = require ("../models/chargeClient");

router.get('/', async (req,res)=>{
    try {
        const chargeClient = await ChargeClient.find({})
        res.json(chargeClient) 
    } catch (error) {
        console.log(error)
    }
  
    
})
router.post('/new',(req,res)=>{
  const newchClient = new ChargeClient({
      name:req.body.name,
      price:req.body.price,
      bankAccountName:req.body.bankAccountName,
      employerName:req.body.employerName
      
  })
  newchClient.save()
  .then(()=>res.json("charge client added with success"))
  .catch(
      (err) => {
      console.log(err)})
})
router.post('/new',(req,res)=>{
    const newChargeClient = new ChargeClient ({
        name:req.body.name,
        price:req.body.price,
        bankAccountName:req.body.bankAccountName,
        employerName:req.body.employerName,
         
    })
    
     console.log(newChargeClient)
    newChargeClient.save()
    .then(()=>res.json("charge client  added with success"))
    .catch(
        (err) => {
        console.log(err)})
})
// delete a client charge by his id ok
router.delete('/delete-chargecl/:id', (req, res) => {
    ChargeClient.findByIdAndDelete(req.params.id)
      .then(() => res.json("client charge deleted with success"))
      .catch(
        (err) => {
          console.log(err)
        })
  })
  //retrive a client charge  by his id ok
router.get('/:id',(req,res)=>{
    ChargeClient.findById(req.params.id)
    .then(clientcharge=>{res.json(clientcharge)})
      .catch(
          (err) => {
          console.log(err)})  
  })
module.exports = router