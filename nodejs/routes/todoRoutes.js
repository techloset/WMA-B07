var express = require('express');
var todoRouter = express.Router();

const {fetchTodos, getTodoById, createTodo, updateTodo, deleteTodo} = require('../controllers/todosController');
const authVerify = require('../middlewares/auth');

todoRouter.get('/', fetchTodos);
todoRouter.get('/:id', authVerify,getTodoById)
todoRouter.post('/create', authVerify,createTodo)
todoRouter.put('/update/:id', authVerify,updateTodo)
todoRouter.delete('/delete/:id',authVerify,deleteTodo)

module.exports = todoRouter;