import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio/Index"
import ProductosLista from "./Productos/Index";
import FormularioInicioSesion from "./Formularioiniciosesion/Index"
import Registro from "./FormularioRegistro/Index"


export const Paginas = () => (
  <section>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<ProductosLista />} />
      <Route path="/formulario" element= {<FormularioInicioSesion/>} />
      <Route path="/registro" element= {<Registro/>}/>
    </Routes>
  </section>
);
