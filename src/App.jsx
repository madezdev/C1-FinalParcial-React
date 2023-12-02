import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/UI/footer/Footer";
import { NavBar } from "./components/UI/navbar/NavBar";
import { CardListContainer } from "./page/home";
import { ContactPage } from "./page/contacto";
import { OdontDetailContainer } from "./components/OdontDetailContainer/OdontDetailContainer";
import { DestacadoPage } from "./page/destacados";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CardListContainer />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/card/:id" element={<OdontDetailContainer />} />
        <Route path="/destacados" element={<DestacadoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
