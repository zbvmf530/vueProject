module.exports = {
    todoList: `select * from todo order by no`,
    inserttodo:`insert into todo set ?`,
    updatetodo:`update todo set ? where no = ?`,
    deletetodo: `delete from todo where no = ?`,
    gettodo : `select * from todo where no = ?`
}