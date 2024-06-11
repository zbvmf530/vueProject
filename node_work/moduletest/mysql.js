const mysql = require('mysql2');

const conn = {
    host:'127.0.0.1',
    port:'3306',
    user:'hr',
    password:'hr',
    database:'test'
};

let connection = mysql.createConnection(conn);

connection.connect();

sql="SELECT * FROM customers";

connection.query(sql,function(err,results,fields){
    if(err){
        console.log(err);
    }
    console.log(results);
});

connection.end();