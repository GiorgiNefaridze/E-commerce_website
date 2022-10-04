import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

import { GlobalStyle, AppWrapper } from "./App.style";

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
