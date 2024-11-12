import React, { useState } from "react";
function StepCounter() {
  const [count, step] = useState(0);
  let [st_value, fin_value] = useState(0);

  const change = (e) => {
    fin_value(() => (st_value = e.target.value));
  };
  const decrement = () => {
    step((count) => count - st_value);
    console.log(st_value);
  };
  const increment = () => {
    step((count) => parseInt(count) + parseInt(st_value));
  };

  return (
    <div className="main">
      <h1>
        Счётчик с определённым шагом: <span>{count}</span>
      </h1>
      <input
        type="number"
        placeholder="введите цифру"
        min={0}
        onChange={change}
      />
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
export default StepCounter;
