import { createStore } from "redux"
import { TodoReducer } from "./reducers/todo"





const store = createStore(TodoReducer,
    // MIDLE WHERE POUR AFFICHER DANS STATE DAND DEV REDUC TOOLS
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store