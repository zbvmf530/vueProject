const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const boardRouter = require('./routes/board.js');
const customerRouter = require('./routes/customer.js');
const todosRouter = require('./routes/todo.js');
const fileRouter = require('./routes/file.js');
const cors = require('cors');
const morgan = require('morgan');


require('dotenv').config();
// 폼 쿼리 방식
app.use(express.urlencoded({ extended: false }));

// json parser 미들웨어 방식
app.use(express.json());
app.use(cookieParser());

app.use(cors());
app.use(morgan(':method :url :status :res[content-length] :date'));

app.use('/board',boardRouter);
app.use('/customer',customerRouter);
app.use('/todo',todosRouter);
app.use('/file', fileRouter);

app.listen(port,()=>{
    console.log(`서버 실행. http://localhost:${port}`);
});


// map.put('~~.do',new ~~~()) <- frontcontroller와 같은기능
app.get('/', (req,res)=>{
    res.send('Hello World!');
    console.log('Cookies: ', req.cookies)
});


// app.get('/post', (req,res)=>{
//     let gson = '';
//     axios.get(`http://localhost:${port}/posts`)
//     .then(json=>console.log(gson = json.data));
//     res.send(gson);
// });

// 정규표현식을 이용한 url 요청 처리
// app.get(/a/, function(req,resp){
//     resp.send("a가 포함");
// });


app.get(/^insert/, function(req,resp){
    resp.send("insert로 시작하는 url");
});

const ex0 = function (req,res,next){
    console.log('첫번째 콜백');
    next();
}

const ex1 = function (req,res,next){
    console.log('두번째 콜백');
    next();
}

const ex2 = function (req,res,next){
    res.send('세번째 콜백');
}

app.get('/examples', [ex0,ex1,ex2]);