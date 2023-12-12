import React from "react";



const Productoitem = ({ image, title, category, price }) => {
    return (

        <div className="producto">
            <a href="#">
                <div className="producto__img">
                    <img src={image} alt={title} />
                </div>
            </a>

            <div className="productos__footer">
                <h1 className="title">{title}</h1>
                <p>{category}</p>
                <p className="price">{`$${price}`}</p>
            </div>

            <div className="buttom">
                <button className="btn">
                    Añadir al carrito
                </button>
                <div>
                    <a href="#" className="btn">Vista</a>
                </div>
            </div>
        </div> 
    );
}

export default Productoitem;
