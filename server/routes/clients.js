const express = require('express')
const router = require("express").Router();
const Clients = require ("../models/clients");
//retrive clients ok 
router.get('/', async (req,res)=>{
    try {
        const clients = await Clients.find({})
        res.json(clients) 
    } catch (error) {
        console.log(error)
    }
  
    
})
// edit client 
//FIND BY ID AND UPDATE cLIENT 
router.put('/update/:id',  (req,res)=>{
  console.log(".hhhhhhh",req)
  Clients.findById(req.params.id)

  .then(client=>{
      client.name=req.body.name;
      client.lastname=req.body.lastname
      client.adress=req.body.adress;
      client.companyName=req.body.companyName;
      client.save()
      .then(()=>res.json(client))
      .catch(
          (err) => {
          console.log('aaaaajjjjjo',err)})
  }) 
  .catch(
      (err) => {
      console.log(err)})
})
//retrive a client by his id ok
router.get('/:id',(req,res)=>{
    Clients.findById(req.params.id)
    .then(client=>{res.json(client)})
      .catch(
          (err) => {
          console.log(err)})  
  })


// add a client ok 
router.post('/new',(req,res)=>{
    const newClient = new Clients({
        name:req.body.name,
        lastname:req.body.lastname,
        adress:req.body.adress,
        companyName:req.body.companyName
        
    })
    newClient.save()
    .then(()=>res.json("client added with success"))
    .catch(
        (err) => {
        console.log(err)})
})
// delete a client by his id ok
router.delete('/delete-client/:id', (req, res) => {
    Clients.findByIdAndDelete(req.params.id)
      .then(() => res.json("client deleted with success"))
      .catch(
        (err) => {
          console.log(err)
        })
  })
















module.exports = router;