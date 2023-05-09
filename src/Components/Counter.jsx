import React, { useReducer } from "react";
import reducer, { initialState } from "../Reducer/reducer";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section className="flex justify-center items-center h-[100vh]">
      <div>
        <h2 className="my-6 text-4xl font-semibold text-center">Counter</h2>
        <p className="my-6">
          Current Count is{" "}
          <span className="text-3xl font-semibold text-rose-500">
            {state.count}
          </span>
        </p>
        <div className="flex justify-center">
          <span>
            <button
              onClick={() => dispatch({ type: "Increment" })}
              className="px-2 py-1 mx-2 bg-rose-500 text-2xl text-white"
            >
              +
            </button>
          </span>
          <span>
            <button
              onClick={() => dispatch({ type: "Decrement" })}
              className="px-2 py-1 mx-2 bg-rose-500 text-2xl text-white"
            >
              -
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Counter;
