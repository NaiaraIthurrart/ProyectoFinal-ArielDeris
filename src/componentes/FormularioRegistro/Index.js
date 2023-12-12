import React, { useState } from 'react';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la información al backend
    const datosRegistro = { nombre, apellido, email, telefono, contrasena };
    console.log('Enviar datos al backend:', datosRegistro);
  };

  return (
    <div className="formularioInicioSesion">
    <form onSubmit={handleSubmit}>

      <label>
        Nombre: <br/>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>

      <br />

      <label>
        Apellido: <br/>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </label>

      <br />

      <label>
        Email: <br/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <br />

      <label>
        Teléfono (opcional): <br/>
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </label>

      <br />

      <label>
        Escoja una contraseña: <br/>
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </label>

      <br />
      
      <button type="submit">Registrarse</button>
    </form>

    </div>
  );
};

export default Registro;