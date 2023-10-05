"use client"
import "../css/factura.css"
import "../css/formulario.css"
import React from 'react'


export default function imprimir(){
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="tabla">
       <h1 className="titulo">Factura</h1>
        
        <section className="datos-cliente">
          <p>Nombre del cliente: Juan Pérez</p>
          <p>Dirección: Calle Principal, 123</p>
          <p>Ciudad: Ciudad de Ejemplo</p>
        </section>
        
        <table className="tabla-productos">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Producto 1</td>
              <td>2</td>
              <td>$10.00</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Producto 2</td>
              <td>1</td>
              <td>$15.00</td>
              <td>$15.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="total">Total:</td>
              <td>$35.00</td>
            </tr>
          </tfoot>
        </table>
        
        <p>Gracias por su compra.</p> 
      <button onClick={handlePrint} className="boton">Imprimir</button>
    </section>
  );
}