import React from "react";
import IMGPORTADA from "../../assets/imagenes/libroportada.jpg";
import { Link } from "react-router-dom";

 const Inicio = ()=>
{return(
    <div>
        <h1 className="titulosecundario">Sobre Nosotros</h1>
        <p className= "parrafoinicio">
            
            Somos una empresa dedicada a la venta de libros. Esperamos que en nuestra página puedas encontrar tus favoritos. 
            Si no encuentras algún producto, no dudes en consultarnos por la posibilidad de sumarlo a nuestro inventario.
        
        </p>
        
            <div className="imginicio">
                <img src={IMGPORTADA}></img>
            </div>

        
             <div className="iniciodesesion">
             
             <p className="parrafoinicio">Si eres cliente habitual:</p>
                <div>
                    <Link to="/formulario">
                    <button className="btninicio" onClick={() => console.log('Iniciar Sesión')}>Iniciar Sesión</button>
                    </Link>
                </div>
            

           
            <p className="parrafoinicio">Si eres nuevo: </p>
                <div>
                    <Link to="/registro">
                    <button className="btninicio" onClick={() => console.log('Registrarse')}>Registrarse</button>
                    </Link>
                </div>

            </div>
       

    
    </div>
)}

export default Inicio
