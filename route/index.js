const uuid = require('uuid');
const path = require('path');
function addRoutes(app, db, myModel) {
    const objRep = {
        myModel,
        db,
        uuid
    }

   
    app.get('/todo', getTodosMW(objRep));
    app.get('/remove/:tid', getTodoMW(objRep), deleteTodoMW(objRep))
    app.get('/', getTodosMW(objRep), renderMW(objRep, 'index'));
    app.put('/todo', addTodoMW(objRep));
    app.delete('/todo/:tid', getTodoMW(objRep), deleteTodoMW(objRep));
    //app.get('/static/todo.css', (req,res,next) => { res.sendFile(path.join(__dirname, "../static/todo.css"))});
}

const getTodosMW = require('../middleware/getTodos');
const getTodoMW = require('../middleware/getTodo');
const addTodoMW = require('../middleware/addTodo');
const deleteTodoMW  = require('../middleware/deleteTodo');
const renderMW = require('../middleware/render');

module.exports = addRoutes;