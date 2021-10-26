import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TYPE_TODO_ADD } from '../store/types/todo'

function TodoAdd({ onAddTask }) {
    const [Task, setTask] = useState("")
    const handelClick = () => {
        if (Task === "") {
            alert("eroooooooooooor")
            return
        }
        onAddTask(Task)
        setTask("")
    }
    return (
        <div className="m-3">
            <input
                type="text"
                placeholder="Add Task Here"
                onChange={(e) => setTask(e.target.value)}
                value={Task} /> 
            <button
                className="btn btn-warning"
                onClick={handelClick}>

                Add New Task</button>
        </div>
    )
}
const TodoAddStore = connect(null,
    (dispatch) => ({
        onAddTask: taskTitle => dispatch({
            type: TYPE_TODO_ADD,
            payload: { taskTitle }
        })
    })

)
export default TodoAddStore(TodoAdd)