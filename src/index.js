import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Nav from "./components/Nav.tsx";
// import img1 from "./img/Vector.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Nav /> */}
    <App />
  </React.StrictMode>
);
