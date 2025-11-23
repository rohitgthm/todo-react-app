import { CheckCheck, Delete } from "lucide-react";

const TodoList = ({
  taskList,
  handleDelete,
  timeStamp,
  handleChecked,
  checked,
}) => {
  // console.log(checked);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <ul className="w-full flex flex-col justify-center items-center mt-0">
        {taskList.map((item, index) => (
          <li
            key={index}
            className="bg-sky-50 text-zinc-900 w-[47%] m-2 p-5 rounded-md  text-xl font-medium flex flex-col gap-1 justify-between items-start max-sm:w-full max-sm:m-2"
          >
            <div className="w-full p-2">
              <p className="text-[13px] italic font-extralight font-mono text-green-500/90 mt-0">
                Date : {timeStamp}
              </p>
            </div>
            <div className="p-2 w-full flex gap-1">
              <p
                className={
                  !item.checked
                    ? "w-full text-xl"
                    : "line-through w-full text-xl"
                }
              >
                {item.content}
              </p>

              <div className=" flex justify-end items-end p-2 gap-5">
                <button
                  onClick={() => handleChecked(item)}
                  className="hover:text-green-500 cursor-pointer ml-1 transition duration-200"
                >
                  {" "}
                  <CheckCheck />
                </button>
                <button
                  onClick={() => handleDelete(item.content)}
                  className="hover:text-red-500 cursor-pointer ml-0 transition duration-200"
                >
                  <Delete />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
