import React from "react";
import { Loader } from "lucide-react";
const Heading = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-gray-100 tracking-wide mb-2">
        Todo App
      </h1>
      <p className="text-gray-300 text-lg italic">
        “Turn your thoughts into tasks before they turn into regrets.”
      </p>
    </div>
  );
};

export default Heading;
