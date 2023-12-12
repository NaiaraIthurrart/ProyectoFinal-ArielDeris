
import React, { useState } from 'react';


const FormularioInicioSesion = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para enviar la información al backend
    console.log('Enviar datos al backend:', { usuario, contrasena });
  };

  return (
    <div className="formularioInicioSesion">
    <form onSubmit={handleSubmit}>
      <label>
        Usuario: <br /> 
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </label>
      <br/> <br/>
      <label>
        Contraseña: <br /> 
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </label>
      <br />
      <button type="submit">Iniciar Sesión</button>
    </form>
    </div>
  );
};

export default FormularioInicioSesion;
