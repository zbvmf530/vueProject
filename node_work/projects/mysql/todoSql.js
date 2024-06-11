module.exports = {
    todoList: `select * from todos order by no`,
    inserttodo:`insert into todos set ?`,
    updatetodo:`update todos set ? where no = ?`,
    deletetodo: `delete from todos where no = ?`,
    gettodo : `select * from todos where no = ?`
}