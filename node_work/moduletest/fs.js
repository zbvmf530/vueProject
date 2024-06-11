const  fs = require('node:fs');

// // 비동기 read
// fs.readFile('./process.js','utf-8', (err,data)=>{
//     if(err) console.log(err);
//     console.log(data);
// })
// console.log("1. start");

// 동기 read
// var text = fs.readFileSync('./path.js','utf-8');

// console.log(text);
// console.log("1. start");


// filewrite
let data = '파일쓰기 테스트';

// 동기
fs.writeFileSync('./temp.txt',data,'utf-8',(err)=>{if(err)console.log(err)}); 

// 비동기
fs.writeFile('./temp2.txt','비동기 파일쓰기 테스트','utf-8',(err)=>{if(err)console.log(err)})