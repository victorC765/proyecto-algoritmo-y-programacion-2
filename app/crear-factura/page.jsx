"use client"
import "../css/formulario.css";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


export default function CresteFactur(){
    const [nombreProducto,setNombreProducto] = useState("");
    const [IDproducto,setIDproducto] = useState("");
    return (
        
        <section>
         
        <form className="formulario">
        <h1 className="titulo">Factura</h1>
        <section className="container">
            <section className="input-container">
                <Image src="/icon/usuario.png" alt="Usuario" width={500} height={500}/>                
                <input type="text" name="cliente" placeholder="Nombre y Apellido del Cliente"/>
            </section>
            <section className="input-container">
                <Image src="/icon/producto.png" 
                alt="Producto" 
                width={500} 
                height={500}/>               
                <input type="text" 
                name="cantidad" 
                placeholder="Nombre del Producto"
                onChange={event=>setNombreProducto(event.target.value)}/>
            </section>
            <section className="input-container">
                <Image src="/icon/cantidad.png" alt="Cantidad" width={500} height={500}/>               
                <input type="text" name="Productos" placeholder="Cantidad de Productos"/>
            </section>
            <section className="input-container">
                <p><Image src="/icon/metodo-de-pago.png" alt="Metodo" width={500} height={500}/> Método de Pago:</p><p>               
                    Tarjeta<input type="radio" name="option" value="tarjeta" checked/>
                    Efectivo<input type="radio" name="option" value="efectivo"checked/>
                    Pagó movil<input type="radio" name="option" value="pago movil"checked/>
                </p>
            </section>
            <section className="input-container">               
                <p>Fecha:<input type="date" name="Fecha"/></p>
            </section>
            
            <p></p>
            <Link href="../factura">
            <button className='boton'>Realizar Factura</button>
            </Link>
        </section>
    </form>
    </section>
    );
}