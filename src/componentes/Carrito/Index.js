import React from "react";
import IMG from "../../assets/imagenes/EntreLibros.png";

const Carrito = () => {
  return (
    <div>
      <h1 className="titulosecundario">Carrito</h1>

      <div className="carritos">
        <div className="carrito">
          <div className="carrito__close">
            <box-icon name="x"></box-icon>
          </div>

          <h2>Productos de su Carrito</h2>

          <div className="carrito__center">
            <div className="carrito__item">
              <img src={IMG} alt="Producto" />
              <div>
                <h3>title</h3>
                <p className="price">$500</p>
                <div>
                  <box-icon name="up-arrow" type="solid"></box-icon>
                  <p className="cantidad">1</p>
                  <box-icon name="down-arrow" type="solid"></box-icon>
                </div>
              </div>
            </div>

            <div className="remove__item">
              <box-icon name="trash" type="solid"></box-icon>
            </div>
          </div>

          <div className="carrito__footer">
            <h3>Total: $2334</h3>
            <button className="btn">Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
