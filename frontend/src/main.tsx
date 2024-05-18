import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{fontFamily: "persian"}} className="fixed top-0 bottom-0 left-0 right-0 bg-moon">
      <App />
    </div>
  </React.StrictMode>
);
