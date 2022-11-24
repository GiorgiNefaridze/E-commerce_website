import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18next";

import { AuthContextProvider } from "./context/authContext";
import { CartProductsContextProvider } from "./context/cartProductsContext";
import { BrowserRouter as Router } from "react-router-dom";

import "swiper/css/bundle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthContextProvider>
    <CartProductsContextProvider>
      <Router>
        <App />
      </Router>
    </CartProductsContextProvider>
  </AuthContextProvider>
);
