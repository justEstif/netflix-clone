import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";

import FirebaseContext from "./context/FirebaseContext";
import { firebase } from "./lib/firebase.config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FirebaseContext.Provider value={firebase}>
    <App />
  </FirebaseContext.Provider>
);
