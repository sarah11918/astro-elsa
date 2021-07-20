import React from "react";
import Home from "../components/Home.js";
import { AuthProvider } from "../components/Auth.js";

const MyApp = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

export default MyApp;