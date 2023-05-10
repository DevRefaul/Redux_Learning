import React from "react";

const AddUser = () => {
  return (
    <section className="flex justify-center items-center h-[100vh]">
      <div>
        <div>
          <label htmlFor="adduser">Add User</label>
          <input
            type="text"
            id="adduser"
            placeholder="Add New User"
            className="block border-2 p-2 my-4 border-rose-500 focus:border-rose-500"
          />
          <button className="my-2 bg-rose-500 text-white px-4 py-2">
            Add User
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddUser;
