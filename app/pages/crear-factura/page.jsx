export default function CresteFactur(){
    return (
        <form class="formulario">
        <h1>Factura</h1>
        <section class="container">
            <section class="input-container">
                <img src="assets/icon/usuario.png"/>                
                <input type="text" name="cliente" placeholder="Nombre y Apellido del Cliente"/>
            </section>
            <section class="input-container">
                <img src="assets/icon/producto.png"/>               
                <input type="text" name="cantidad" placeholder="Nombre del Producto"/>
            </section>
            <section class="input-container">
                <img src="assets/icon/cantidad.png"/>               
                <input type="text" name="Productos" placeholder="Cantidad de Productos"/>
            </section>
            <section class="input-container">
                <p><img src="assets/icon/metodo-de-pago.png"/> Método de Pago:</p><p>               
                    Tarjeta<input type="radio" name="option" value="tarjeta"/>
                    Efectivo<input type="radio" name="option" value="efectivo"/>
                    Pagó movil<input type="radio" name="option" value="pago movil"/>
                </p>
            </section>
            <section class="input-container">               
                <p>Fecha:<input type="date" name="Fecha"/></p>
            </section>
            
            <p></p>
            <input type="button" value="Realizar Factura" onclick="location.href='index.html'"/>
        </section>
    </form>
    );
}