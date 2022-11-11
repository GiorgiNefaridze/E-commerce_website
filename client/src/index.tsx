import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18next";

import { AuthContextProvider } from "./context/authContext";
import { BrowserRouter as Router } from "react-router-dom";

import "swiper/css/bundle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthContextProvider>
    <Router>
      <App />
    </Router>
  </AuthContextProvider>
);
