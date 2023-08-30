


import '../css/style.css'
export default function CreatePro(){
    return (
        
        <form class="formulario">
            <h1>Producto</h1>
            <section class="input-container">
             <input type="text"  name="nombre-de-producto" placeholder="nombre del producto"/>
            </section>
            <section class="input-container">
             <input type="text"  name="precio" placeholder="Precio del producto"/>
            </section>        
            <section class="input-container">
             <input type="text"  name="codigo" placeholder="codigo de producto"/>
            </section>    
            <section class="input-container">
            <input type="button" value="Realizar Factura" onclick="location.href='index.html'"/>
            </section>    
        </form>
    )
}