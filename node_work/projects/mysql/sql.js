module.exports = {
    customerList: `select * from customers`,
    insertCustomer:`insert into customers set ?`,
    updateCustomer:`update customers set ? where id = ?`,
    deleteCustomer: `delete from customers where id = ?`
}