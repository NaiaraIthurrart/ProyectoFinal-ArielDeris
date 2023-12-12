import React from "react";
import EntreLibros from "../../assets/imagenes/EntreLibros.png";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header> 
            <div className="tituloprincipal">
                <h1>Entre Libros</h1>
            </div>

            <Link to="/">
                <div className="logo">
                    <img src={EntreLibros} alt="logo" height="150px" width="150px"/>
                </div>
            </Link>
           

            <ul>
                <li>
                    <Link to= "/">Inicio</Link>
                </li>

                <li>
                    <Link to="/productos">Productos</Link>
                </li>
            </ul>

            <div className="cart">
            <Link to="/"><box-icon name="cart"></box-icon></Link> 
                <span className="item__total">0</span>
            </div>

            
        </header>
    )
}