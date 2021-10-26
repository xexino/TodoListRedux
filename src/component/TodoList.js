import React from 'react'
import { connect } from 'react-redux'
import { onDeleteAction , toogleTaskAction } from '../store/action/todo'
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
        onDelete: taskId =>
            dispatch(onDeleteAction(taskId)),
        toogleTask: taskId =>
            dispatch(toogleTaskAction(taskId)),
    }),

)
export default TodoListStore(TodoList)