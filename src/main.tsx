import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";

import FirebaseContext from "./context/FirebaseContext";
import { db, auth } from "./lib/firebase.config";

// making html, body, root full screen
ReactDOM.createRoot(document.getElementById("root")!).render(
  <FirebaseContext.Provider value={{ db, auth }}>
    <App />
  </FirebaseContext.Provider>
);
