const express = require('express');
const router = express.Router();
const mysql = require('../mysql/index');
router.get("/",(req,res)=>{
    //const customerList=[];
    mysql.query("todoList")
    .then(result=>res.send(result));
    
});
//router.get("",(res,req)=>{});
router.post("/",(req,res)=>{
    mysql.query("inserttodo",req.body)
    .then(result=>res.send(result));
    
});

router.put("/:no",(req,res)=>{
    mysql.query("updatetodo",[req.body,req.params.no])
    .then(result=>res.send(result));
});

router.delete("/:id",(req,res)=>{
    mysql.query("deletetodo",req.params.id)
    .then(result=>res.send(result));
});

module.exports = router;