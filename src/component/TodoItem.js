import { Task } from '../models/task'

export default function TodoItem({ task = new Task(), onDeleteTask, ontoogleTask }) {

    const handelchange = () => {
        ontoogleTask(task.id)
    }
    const handelClick = () => {
        onDeleteTask(task.id)
    }

    return (
        <li className="m-2 p-2 border d-flex justify-content-between align-items-center">
            <div>
                <input type="checkbox"
                    className="m-1"
                    onChange={handelchange}
                />
                <span className={task.isCompleted ? "text-decoration-line-through" : ""}>{task.title}</span>
            </div>
            <button
                className="btn btn-danger m-1"
                onClick={handelClick}>
                Delete
            </button>
        </li>
    )
}



