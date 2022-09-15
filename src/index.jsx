import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/styles.scss";

const root = ReactDom.createRoot( document.getElementById("root") );

root.render(
  <Router>
    <App/>
  </Router>
)