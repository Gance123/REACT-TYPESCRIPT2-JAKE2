import { FC } from "react";
import { TodoType } from "./types/todo";

// props: Pick<TodoType, "userId"| "title" | "completed">
// props: Omit<TodoType, "Id">

// export const Todo = (props: Omit<TodoType, "id">) => {
export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return (
    <>
      <p>{`${completeMark}${title}(ユーザ：${userId})`}</p>
    </>
  );
};
