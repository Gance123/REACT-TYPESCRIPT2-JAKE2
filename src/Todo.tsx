type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
  //completedは無くてもいいという印を親であるAppに渡す
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return (
    <>
      <p>{`${completeMark}${title}(ユーザ：${userId})`}</p>
    </>
  );
};
