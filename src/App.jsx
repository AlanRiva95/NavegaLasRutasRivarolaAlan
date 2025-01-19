import BotonCambioTexto from "./page/BotonCambio"
import Header from "./page/Header"
import NavBar from "./page/NavBar"
import Galeria from "./page/Galeria"
import Masculinos from "./page/Masculinos"
import Femeninos from "./page/Femeninos"
import NuevosIngresas from "./page/NuevosIngresas"
import Footer from "./page/Footer"
import Home from "./page/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/masculinos" element={<Masculinos/>} />
          <Route path="/galeria" element={<Galeria/>} />
          <Route path="/femeninos" element={<Femeninos/>} />
          <Route path="/Nuevos/" element={<NuevosIngresas/>} />
        </Routes>


        <Footer/>
        <BotonCambioTexto/>
      </BrowserRouter>
    </>
  )
}

export default App
