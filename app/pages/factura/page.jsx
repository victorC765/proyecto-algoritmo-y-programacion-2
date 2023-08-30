import "../css/factura.css"
import "../css/style.css"

export default function Factura(){
    return(
        <section class="factura" >
        <h1>Factura</h1>
        
        <section class="datos-cliente">
          <p>Nombre del cliente: Juan Pérez</p>
          <p>Dirección: Calle Principal, 123</p>
          <p>Ciudad: Ciudad de Ejemplo</p>
        </section>
        
        <table class="tabla-productos">
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
              <td colspan="3" class="total">Total:</td>
              <td>$35.00</td>
            </tr>
          </tfoot>
        </table>
        
        <p>Gracias por su compra.</p> 
        <section class="position">
        <input type="button" value="Imprimir" />
        </section>
      </section>

    );
}