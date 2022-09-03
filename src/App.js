import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/Admin";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Credientials from "./Components/Credientials";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import ProductDetails from "./Components/ProductDetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Credientials />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/pdetails" element={<ProductDetails />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;