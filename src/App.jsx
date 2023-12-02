import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/UI/footer/Footer";
import { NavBar } from "./components/UI/navbar/NavBar";
import { CardListContainer } from "./components/cardListContainer/CardListContainer";
import { ContactPage } from "./components/contactPage/ContactPage";
import { OdontDetailContainer } from "./components/OdontDetailContainer/OdontDetailContainer";
import { DestacadoPage } from "./page/DestacadoPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CardListContainer />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/card/:id" element={<OdontDetailContainer />} />
        <Route path="/destacados" element={<DestacadoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
