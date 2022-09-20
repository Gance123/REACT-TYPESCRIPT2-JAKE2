import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { TodoType } from "./types/todo";
import "./styles.css";

const user = {
  name: "ggg",
  hobbies: ["game", "movie"]
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
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          // <Todo>のtypeでcompleted?と設定しているので、記述無しでもエラーが起きない
          completed={todo.completed}
        />
      ))}
      <Text color="red" fontSize="18px" />
      <UserProfile user={user} />
    </div>
  );
}
