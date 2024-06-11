const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'd:/upload/' });

//router.use(multer());

router.post('/upload', upload.array('avatar'), (req,res)=>{
    console.log('파일크기 : ' + req.files[0].size);
    console.log('파일명 : ' + req.files[0].originalname);
    console.log('저장된파일명 : ' + req.files[0].filename);
    res.send("ok");
});

module.exports = router;