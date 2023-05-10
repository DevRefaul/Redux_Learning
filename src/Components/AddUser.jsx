import React, { useReducer } from "react";
import reducer, { initialState } from "../Reducer/reducer";

const AddUser = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

return (
  <section className="flex justify-center items-center h-[100vh]">
    <div>
      {/* form */}
      <div>
        <label htmlFor="adduser">Add User</label>
        <input
          type="text"
          id="adduser"
          placeholder="Add New User"
          className="block border-2 p-2 my-4 border-rose-500 focus:border-rose-500"
        />
        <button
          onClick={() => {
            const user = document.getElementById("adduser").value;
            if (!user) {
              return alert("Enter A User First");
            }
            dispatch({ type: "AddUser", payload: { user } });
            document.getElementById("adduser").value = "";
          }}
          className="my-2 bg-rose-500 text-white px-4 py-2"
        >
          Add User
        </button>
      </div>

      {/* users */}
      {state.users.length ? (
        state.users.map((user, i) => (
          <p key={i} className="text-lg font-medium text-teal-500">{`${
            i + 1
          }. ${user}`}</p>
        ))
      ) : (
        <p>No Users Found</p>
      )}
    </div>
  </section>
);
};

export default AddUser;
