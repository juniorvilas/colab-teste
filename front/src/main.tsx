import React from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import App from "./App.tsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
