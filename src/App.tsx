import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";

type TodoType = {
  // この型が入った配列群　=>　<Array<TodoType>>
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFechData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFechData}>データ取得</button>
      {todos.map((todo) => (
        //todo=res.data
        <Todo
          title={todo.title}
          userId={todo.userId}
          // <Todo>のtypeでcompleted?と設定しているので、記述無しでもエラーが起きない
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
