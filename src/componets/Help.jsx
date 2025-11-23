import React, { useState } from "react";

const Help = () => {
  const [date, setDate] = useState();

  return (
    <div>
      help block
      <span> {date} </span> <br />
      <button onClick={getDate}>click</button>
    </div>
  );
};

export default Help;
