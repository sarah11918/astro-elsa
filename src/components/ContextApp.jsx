import React from "react";
import Child from "../components/Child.jsx";
import RootContext from "../components/RootContext.jsx";


const data = {
  number: 123,
  text: "ABC",
  func: () => {
    alert("Hello!");
  },
};

function ContextApp() {
  return (
    <RootContext.Provider value={data}>
      <Child/>
    </RootContext.Provider>
  );
}

export default ContextApp;