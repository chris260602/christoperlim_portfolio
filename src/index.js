import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
