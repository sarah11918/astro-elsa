import React, { useContext } from "react";

import RootContext from "../components/RootContext.jsx";

const GrandChild = () => {
  const data = useContext(RootContext);
  return (
    <div style={{border: "2px solid black"}}>
      <p>{data.number}</p>
      <p>{data.text}</p>
      <p><button onClick={data.func}>A Button</button></p>
    </div>
  );
};

export default GrandChild;