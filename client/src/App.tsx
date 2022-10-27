import { Routes, Route } from "react-router-dom";

import { IsAuthContextProvider } from "./context/isAuth";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";

import { GlobalStyle, AppWrapper } from "./App.style";

import { AllProducts } from "./data/database";

const App = () => {
  // console.log(AllProducts);
  
  // const newItes = AllProducts.map(item => ({...item, discountPrice: 0}))
  // newItes.forEach(el => delete el.id)
  
  // console.log(JSON.stringify(newItes));
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
