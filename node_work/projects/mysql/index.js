const mysql = require('mysql2');
const sqls = require('./sql');

const conn ={
    connectionLimit:10,
    host:'127.0.0.1',
    port:'3306',
    user:'hr',
    password:'hr',
    database:'test'
};
const pool = mysql.createPool(conn);
function query(alias,values){
    return new Promise((resolve,reject) => {
        pool.query(sqls[alias], values, 
            function(err,result){
            if(err){
                console.log(err);
                reject({err});
            }
            else{
                resolve(result);
            }
        });}
    );
}



module.exports={query};