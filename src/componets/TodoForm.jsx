import React, { useState } from "react";

const TodoForm = ({ addTodoFunc, todo, setTodo }) => {
  const handleInputChange = (value) => {
    setTodo((prev) => ({ ...prev, content: value }));
  };

  return (
    <form
      onSubmit={(e) => addTodoFunc(e.preventDefault())}
      className="flex justify-center items-center gap-2 p-5 w-full max-sm:flex max-sm:flex-col"
    >
      <input
        type="text"
        value={todo.content}
        autoComplete="off"
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Add Todo..."
        className="p-5 bg-sky-50 rounded text-xl text-gray-800 w-[40%] max-sm:w-[90%] outline-none"
      />
      <button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-700 text-white font-medium text-xl p-5 rounded-md transition duration-200 cursor-pointer"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
