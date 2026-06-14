import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/ProductPage";
import MobileFooter from "./Pages/MobileFooter";
import Footer from "./Pages/Footer";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <MobileFooter />
      <Footer />
    </HashRouter>
  );
}

export default App;
