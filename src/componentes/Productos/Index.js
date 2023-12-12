import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext} from "../../context/Dataprovider";
import Productoitem from "./Productoitem"

const ProductosLista = () => {

    const value = useContext (DataContext)
    const [productos] = value.productos
    return (
    
        <>
        <h1 className="titulosecundario">Nuestros Productos</h1>
        
        <div className="contenedor__productos">
        {
            productos.map(producto=> (
                <Productoitem key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                image={producto.image}
                category={producto.category}
                cantidad={producto.cantidad}
                />
       
            ))
        }
        </div>
      
        </>
    
    )
}

export default ProductosLista