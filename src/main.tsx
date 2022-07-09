import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";

// making html, body, root full screen
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
