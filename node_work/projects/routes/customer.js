const express = require('express');
const router = express.Router();
const mysql = require('../mysql/index');
router.get("/",(req,res)=>{
    //const customerList=[];
    mysql.query("customerList")
    .then(result=>res.send(result));
    
});
//router.get("",(res,req)=>{});
router.post("/",(req,res)=>{
    mysql.query("insertCustomer",req.body)
    .then(result=>res.send(result));
    
});

router.put("/",(req,res)=>{
    mysql.query("updateCustomer",req.body.param)
    .then(result=>res.send(result));
});

router.delete("/:id",(req,res)=>{
    mysql.query("deleteCustomer",req.params.id)
    .then(result=>res.send(result));
});

module.exports = router;