
import '../css/style.css';
import Image from 'next/image';
import NavBar from '../NavBar/page'
import Link from 'next/link';


export default function CresteFactur(){
    const elementos = NavBar();
    return (
        <section>
         
        <form class="formulario">
        <h1>Factura</h1>
        <section class="container">
            <section class="input-container">
                <Image src="/icon/usuario.png" alt="Usuario" width={500} height={500}/>                
                <input type="text" name="cliente" placeholder="Nombre y Apellido del Cliente"/>
            </section>
            <section class="input-container">
                <Image src="/icon/producto.png" alt="Producto" width={500} height={500}/>               
                <input type="text" name="cantidad" placeholder="Nombre del Producto"/>
            </section>
            <section class="input-container">
                <Image src="/icon/cantidad.png" alt="Cantidad" width={500} height={500}/>               
                <input type="text" name="Productos" placeholder="Cantidad de Productos"/>
            </section>
            <section class="input-container">
                <p><Image src="/icon/metodo-de-pago.png" alt="Metodo" width={500} height={500}/> Método de Pago:</p><p>               
                    Tarjeta<input type="radio" name="option" value="tarjeta"/>
                    Efectivo<input type="radio" name="option" value="efectivo"/>
                    Pagó movil<input type="radio" name="option" value="pago movil"/>
                </p>
            </section>
            <section class="input-container">               
                <p>Fecha:<input type="date" name="Fecha"/></p>
            </section>
            
            <p></p>
            <Link href="../pages/factura">
            <input type="button" value="Realizar Factura" />
            </Link>
        </section>
    </form>
    </section>
    );
}