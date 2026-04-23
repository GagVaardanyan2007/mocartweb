import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/navigation/Navbar.jsx";
import Footer from "./components/homepage/Footer.jsx";
import { footerdata } from "../data/footer.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<App />} />
    </Routes>
    <Footer data={footerdata}/>
  </BrowserRouter>
);
