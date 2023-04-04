import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./components/navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
