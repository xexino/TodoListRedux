import React from 'react'
import { connect } from 'react-redux'
import { TYPE_TODO_CHECK, TYPE_TODO_DELETE } from '../store/types/todo'
import TodoItem from './TodoItem'

function TodoList({ todos = [], onDelete, toogleTask }) {
    return (
        <ul className="m-2">
            {todos.map(t => <TodoItem
                onDeleteTask={onDelete}
                ontoogleTask={toogleTask}
                key={t.id}
                task={t}
            />)}
        </ul>
    )
}

const TodoListStore = connect((state) => ({
    todos: state.todos
}),
    (dispatch) => ({
        toogleTask: taskId => dispatch({
            type: TYPE_TODO_CHECK,
            payload: { taskId }
        }),
        onDelete: taskId => dispatch({
            type: TYPE_TODO_DELETE,
            payload: { taskId }
        }),
    }),

)
export default TodoListStore(TodoList)