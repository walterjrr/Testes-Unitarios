import React, { useState } from "react";
import "./index.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  function getModifier() {
    if (counter > 0) return "counter__titleIncrement";
    if (counter < 0) return "counter__titleDecrement";
    return "";
  }

  return (
    <div className="counter">
      <h1 className={`counter__title ${getModifier()}`}>{counter}</h1>
      <section className="buttons">
        <button
          onClick={() => setCounter(counter + 1)}
          className="button buttonIncrement"
        >
          incrementar
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="button buttonDecrement"
        >
          decrementar
        </button>
      </section>
    </div>
  );
}

export default Counter;