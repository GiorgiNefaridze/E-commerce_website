import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18next";

import { BrowserRouter as Router } from "react-router-dom";

import "swiper/css/bundle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <App />
  </Router>
);