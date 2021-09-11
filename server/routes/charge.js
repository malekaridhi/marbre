const express = require('express')
const router = require("express").Router();
const Charge = require ("../models/charge");

// add a charge ok 


router.post('/new',(req,res)=>{
    var tot=0 
    var som1=parseInt(req.body.logistics)
    var som2=parseInt(req.body.landTransporter)
    var som3=parseInt(req.body.freightForword)
    var som4=parseInt(req.body.stam)
    var som5=parseInt(req.body.logistics)
    var som6=parseInt(req.body.ChamberOfCommerce)
    var som7=parseInt(req.body.FactoryCutting)
    var som8=parseInt(req.body.FactoryBuffing)
    var som9=parseInt(req.body.transporter)
    var som10=parseInt(req.body.otherCharge)
    var som11=parseInt(req.body.achatDuProduit)

    tot= som1+som2+som3+som4+som5+som6+som7+som8+som9+som10+som11
    const newCharge = new Charge({
        chargeName:req.body.chargeName,
        freightForword:req.body.freightForword,
        landTransporter:req.body.landTransporter,
        stam:req.body.stam,
        logistics:req.body.logistics,
        ChamberOfCommerce:req.body.ChamberOfCommerce,
        FactoryCutting:req.body.FactoryCutting,
        FactoryBuffing:req.body.FactoryBuffing,
        transporter:req.body.transporter,
        otherCharge:req.body.otherCharge,
        achatDuProduit:req.body.achatDuProduit,
        total:tot
        
    })

    newCharge.save()
    .then(()=>res.json("charge added with success"))
    .catch(
        (err) => {
        console.log(err)})
})
//FIND BY ID AND UPDATE charge 
router.put('/update/:id',  (req,res)=>{
    
    Charge.findById(req.params.id)
    
    
    .then(charge=>{
        charge.chargeName=req.body.chargeName;
        charge.reightForword=req.body.freightForword,
        charge.landTransporter=req.body.landTransporter,
        charge.stam=req.body.stam;
        charge.logistics=req.body.logistics;
        charge.ChamberOfCommerce=req.body.ChamberOfCommerce;
        charge.FactoryCutting=req.body.FactoryCutting;
        charge.FactoryBuffing=req.body.FactoryBuffing;
        charge.transporter=req.body.transporter;
        charge.otherCharge=req.body.otherCharge;
        charge.achatDuProduit=req.body.achatDuProduit
        
        charge.save()
        .then(()=>res.json(charge))
        .catch(
            (err) => {
            console.log('error',err)})
    }) 
    .catch(
        (err) => {
        console.log(err)})
  })
//get all

router.get('/', async (req,res)=>{
    try {
        const charge = await Charge.find({})
        res.json(charge) 
    } catch (error) {
        console.log(error)
    }
  

    
})
//retrive a charge by  id ok
router.get('/:id',(req,res)=>{
    Charge.findById(req.params.id)
    .then(charge=>{res.json(charge)})
      .catch(
          (err) => {
          console.log(err)})  
  })


//// delete a charge by his id ok
router.delete('/delete-charge/:id', (req, res) => {
    Charge.findByIdAndDelete(req.params.id)
      .then(() => res.json("charge deleted with success"))
      .catch(
        (err) => {
          console.log(err)
        })
  })
// add other charges

// router.put('/update-jj/:id', async (req,res)=>{
//     const charges =await Charge.findById(req.params.id);
//     const {name,value} = req.body;
//     const otherCharge={
//         name,
//         value
//     }
//    // Charge.findById(req.params.id)
//    charges.others.unshift(otherCharge)
//     await charges.save()
//     .then(() => res.json("charge deleted with success"))
//     .catch(
//       (err) => {
//         console.log(err)
//       })
//   })


module.exports = router;