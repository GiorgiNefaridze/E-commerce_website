import { Routes, Route } from "react-router-dom";

import { IsAuthContextProvider } from "./context/isAuth";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";

import { GlobalStyle, AppWrapper } from "./App.style";

const App = () => {
  return (
    <IsAuthContextProvider>
      <AppWrapper>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </AppWrapper>
    </IsAuthContextProvider>
  );
};

export default App;
