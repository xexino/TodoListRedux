import { Provider } from "react-redux";
import TodoAdd from "./component/TodoAdd";
import TodoFilter from "./component/TodoFilter";
import TodoList from "./component/TodoList";
import store from "./store";

function App() {


  return (
    <Provider store={store}>
      <div className="App">

        <TodoAdd />
        <hr />
        <TodoFilter />

        <TodoList />

      </div>
    </Provider>
  );
}

export default App;
