import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  NavBar from "./components/Navbar.tsx";
import Footer from "./components/Footer";
import RoomPage from "./pages/RoomPage.tsx";
import AmenitiesPage from "./pages/AmenitiesPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rooms" element={<RoomPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
