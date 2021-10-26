import {
    TYPE_TODO_ADD,
    TYPE_TODO_DELETE,
    TYPE_TODO_FILTER,
    TYPE_TODO_CHECK
} from "../types/todo"

export const onDeleteAction = (taskId) => ({
        type: TYPE_TODO_DELETE,
        payload: { taskId }
    })
export const toogleTaskAction = (taskId) => ({
    type: TYPE_TODO_CHECK,
    payload: { taskId }
})

export const onAddTaskAction = (taskTitle) => ({
    type: TYPE_TODO_ADD,
    payload: { taskTitle }
})

export const filterTaskByTitleAction = (querry) => (
    {
        type: TYPE_TODO_FILTER,
        payload: { querry }
    })