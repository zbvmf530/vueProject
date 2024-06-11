const express = require('express');
const router = express.Router();

let no = 2;
let board = [
    {no: 1, title: "testtitle", writer: "kim",content: "testcontent"},
    {no: 2, title: "testtitle2", writer: "park",content: "testcontent2"}
];

router.get("/",(req,res)=>{
    
    res.send(board);
});

// const requestTime = function (req, res, next) {
//     req.requestTime = Date.now()
//     next()
//   }
// router.use(requestTime);

// router.get('/', (req, res) => {
//     const date = new Date(req.requestTime);
//   let responseText = 'Hello World!<br>'
//   responseText += `<small>Requested at: ${date}</small>`
//   res.send(responseText)
// });

router.get("/:no",(req,res)=>{
    res.send(board[req.params.no-1]);
});

//router.get("",(res,req)=>{});
router.post("/",(req,res)=>{
    // console.log(req.body);
    board.push(req.body);
    console.log("데이터 추가완료! 추가결과 : ")
    console.log(board)
    res.send(board);
});

router.put("/:no",(req,res)=>{
    
   board = board.map(obj=>obj.no == req.params.no?{...obj,...req.body}:obj);
    res.send(board);
});

router.delete("/:no",(req,res)=>{
    // indexOf -> splice
    board = board.filter(item=>item.no != no);
    res.send(board);
});

module.exports = router;