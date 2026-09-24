import { Routes, Route, useLocation } from "react-router";
import { motion } from "motion/react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import { Stays, Flights, Experiences, About, Contact } from "./pages/Pages.jsx";

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar />
      <motion.main key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
