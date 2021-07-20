import React from "react";
import Home from "../components/Home.js";
import { AuthProvider } from "../components/Auth.js";

const App = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

export default App;
