import React from 'react'
import { connect } from 'react-redux'
import { TYPE_TODO_FILTER } from '../store/types/todo'

function TodoFilter({filterTask}) {
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
const TodoFilterStore = connect(null, (dispatch) => ({
    filterTask:querry =>dispatch ({
        type : TYPE_TODO_FILTER,
        payload: {querry}
    })  }))

export default TodoFilterStore(TodoFilter)