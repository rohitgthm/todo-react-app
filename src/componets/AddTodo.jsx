import React, { useState } from "react";
// import { Delete, CheckCheck, CalendarClock } from "lucide-react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const todoKey = "todoTask";

const AddTodo = () => {
  const [todo, setTodo] = useState({ id: "", content: "", checked: false }); // state for getting input value
  const [timeStamp, setTimeStamp] = useState(); // state for todo creation date
  const [taskList, setTaskList] = useState(() => {
    const getTaskFromLocal = localStorage.getItem(todoKey);
    if (!getTaskFromLocal) return [];
    return JSON.parse(getTaskFromLocal);
  }); // state of an array to storing todo

  // function for adding todo in list

  const addTodoInArray = () => {
    const { id, content, checked } = todo;

    // if the input field is empty then return
    if (!content) return;
    const taskisInList = taskList.find(
      (curTask) => curTask.content === content
    );
    if (taskisInList) return;

    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    setTimeStamp(formattedDate);
    setTaskList((prevTask) => [...prevTask, { id, content, checked }]);
    setTodo({ id: "", content: "", checked: false });
  };

  localStorage.setItem(todoKey, JSON.stringify(taskList));

  // handle delete todo button
  const handleDelete = (value) => {
    const updatedTask = taskList.filter((curTask) => curTask.content !== value);
    setTaskList(updatedTask);
  };

  // handle checked todo button
  const handleChecked = (value) => {
    const updatedTask = taskList.map((curTask) => {
      if (curTask.id === value.id) {
        return { ...curTask, checked: !curTask.checked };
      }
      return curTask;
    });
    setTaskList(updatedTask);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <TodoForm addTodoFunc={addTodoInArray} todo={todo} setTodo={setTodo} />

      <TodoList
        taskList={taskList}
        handleDelete={handleDelete}
        timeStamp={timeStamp}
        checked={todo.checked}
        handleChecked={handleChecked}
      />
    </div>
  );
};

export default AddTodo;
