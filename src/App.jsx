import { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  return (
    <section className="flex justify-center items-center h-[100vh]">
      <div>
        <h2 className="my-6">Counter</h2>
        <p className="my-6">
          Current Count is{" "}
          <span className="text-3xl font-semibold text-rose-500">{state}</span>
        </p>
        <span>
          <button
            onClick={() => setState(state + 1)}
            className="px-2 py-1 mx-2 bg-rose-500 text-2xl text-white"
          >
            +
          </button>
        </span>
        <span>
          <button className="px-2 py-1 mx-2 bg-rose-500 text-2xl text-white">
            -
          </button>
        </span>
      </div>
    </section>
  );
}

export default App;
