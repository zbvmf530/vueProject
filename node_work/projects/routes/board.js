const express = require('express');
const router = express.Router();
const mysql = require('../mysql/index');
const multer = require('multer');
const upload = multer({ dest: 'd:/upload/' });
router.get("/",  async (req,res)=>{
    let pageNo;
    isNaN(Number(req.query.page))
    ?pageNo  = 0
    :pageNo = (Number(req.query.page)-1)*10;

    let boardList = await mysql.query("boardList",pageNo)
                    .then(result=>result);
    res.send(boardList);
});

 router.get("/:no", async (req,res)=>{
    let board = await mysql.query("getBoard",req.params.no)
                            .then(result=>result);
    res.send(board);
});

router.post("/",upload.single('avatar'), (req,res)=>{
    // 첨부파일이 있으면
    let data = {...req.body};
    if(req.file != null){
        data.filename = req.file.originalname;
        data.uploadfilename = req.file.filename;
    }
    mysql.query("insertBoard",data)
    .then(result=>res.send(result));
});


router.put("/:no",(req,res)=>{
    mysql.query("updateBoard",[req.body,req.params.no])
    .then(result=>res.send(result));
 });

 router.delete("/:no",(req,res)=>{
    mysql.query("deleteBoard",req.params.no)
    .then(result=>res.send(result));
});

module.exports = router;