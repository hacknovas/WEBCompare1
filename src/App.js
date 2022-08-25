import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/Admin";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Regin from "./Components/Regin";
import ProductDetails from "./Components/ProductDetails";
import TimePass from "./Components/TimePass";


function App() {
  return (
    <>
      <TimePass/>
      {/* <BrowserRouter> */}
        {/* <Navbar /> */}
        {/* <Routes> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path="/product" element={<Products />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Regin />} /> */}
          {/* <Route path="/contactus" element={<ContactUs />} /> */}
          {/* <Route path="/logout" element={<Logout />} /> */}
          {/* <Route path="/pdetails" element={<ProductDetails />} /> */}
        {/* </Routes> */}
        {/* <Footer /> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;