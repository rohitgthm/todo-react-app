import React from "react";
import Heading from "./componets/Heading";
import AddTodo from "./componets/AddTodo";
import Help from "./componets/Help";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start gap-5">
      <Heading />
      <AddTodo />
      {/* <Help /> */}
    </div>
  );
};

export default App;
