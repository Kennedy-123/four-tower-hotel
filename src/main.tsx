import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  NavBar from "./components/Navbar.tsx";
import Footer from "./components/Footer";
import RoomPage from "./pages/RoomPage.tsx";
import AmenitiesPage from "./pages/AmenitiesPage.tsx";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rooms" element={<RoomPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
