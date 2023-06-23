import React, { useState } from "react";

const Todo = () => {
  const [todolist, setTodoList] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList([...todolist, e.currentTarget.todo.value]);
    e.currentTarget.todo.value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo" name="todo" />
      </form>
      <ul>
        {todolist.length === 0 ? (
          <li>
            <span>할일이 아직 없습니다.</span>
          </li>
        ) : (
          todolist.map((todo) => {
            return <li key={Math.random()}>{todo}</li>;
          })
        )}
      </ul>
    </div>
  );
};

export default Todo;
