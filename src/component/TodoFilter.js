import React from 'react'
import { connect } from 'react-redux'
import { filterTaskByTitleAction } from '../store/action/todo'

function TodoFilter({ filterTask }) {
    const handelchange = (e) => {
        filterTask(e.target.value)
    }
    return (
        <div className="w-50 mx-auto">
            <input
                type="search"
                placeholder="type here to search"
                onChange={handelchange} />
        </div>
    )
}
const TodoFilterStore = connect(null,
    (dispatch) => ({
        filterTask: querry =>
        dispatch(filterTaskByTitleAction(querry))
    })
)

export default TodoFilterStore(TodoFilter)