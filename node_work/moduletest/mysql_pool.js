const mysql = require('mysql2');

const conn ={
    connectionLimit:10,
    host:'127.0.0.1',
    port:'3306',
    user:'hr',
    password:'hr',
    database:'test'
};
const pool = mysql.createPool(conn);

// const query = async(alias,values)=>{
//     return new Promise((resolve,reject)=>pool.query())
// }


const sql="INSERT INTO "
        +" customers"
        +" set ?";

let customer = {
    name:'kim',
    email: 'kim@gmail.com',
    phone: '010-4444-4444'
}


pool.query(sql,customer,function(err,result){
    if(err){
        console.log(err);
    }
    console.log(result);
});
