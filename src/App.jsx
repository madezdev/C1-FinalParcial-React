import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/UI/footer/Footer";
import { NavBar } from "./components/UI/navbar/NavBar";
import  Home  from "./page/home/Home";
import  Contacto  from "./page/contacto/Contacto";
import  {OdontDetailContainer}  from "./components/OdontDetailContainer/OdontDetailContainer";
import  Destacado  from "./page/destacados/Destacados";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/card/:id" element={<OdontDetailContainer />} />
        <Route path="/destacados" element={<Destacado />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
