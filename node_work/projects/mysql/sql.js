const boardSql = require('./boardSql');
const todoSql = require('./todoSql');

module.exports = {
    customerList: `select * from customers`,
    insertCustomer:`insert into customers set ?`,
    updateCustomer:`update customers set ? where id = ?`,
    deleteCustomer: `delete from customers where id = ?`,
    ...boardSql,
    ...todoSql
}