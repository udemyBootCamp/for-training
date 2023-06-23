import React, { useState } from "react";
import RandomNumber from "./RandomNumber";
import { LoginModule } from "./LoginModule";
import Todo from "./Todo";

function App() {
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [getNum, setNum] = useState(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNum(true);
    console.log(max, min);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.id === "max") {
      setMax(Number(e.currentTarget.value));
    } else if (e.currentTarget.id === "min") {
      setMin(Number(e.currentTarget.value));
    }
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="최소"
          onChange={changeHandler}
          id="min"
        />
        <input
          type="number"
          placeholder="최대"
          onChange={changeHandler}
          id="max"
        />
        <input type="submit" />
      </form>
      {getNum && <RandomNumber max={max} min={min} />}

      <LoginModule />
      <Todo />
    </div>
  );
}

export default App;
