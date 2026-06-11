import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CategoryPage from "./Pages/CategoryPage";
import MobileFooter from "./Pages/MobileFooter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
      </Routes>
      <MobileFooter></MobileFooter>
    </BrowserRouter>
  );
}

export default App;
