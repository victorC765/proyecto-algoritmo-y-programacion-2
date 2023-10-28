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
                <span className="MP1"><Image src="/icon/metodo-de-pago.png" alt="Metodo" width={500} height={500}/> Método de Pago: </span> <br/>           
                    <span className="MP2">Tarjeta<input type="radio" name="option" value="tarjeta" checked/></span>
                    <span className="MP3">Efectivo<input type="radio" name="option" value="efectivo"checked/></span>
                    <span className="MP4">Pagó movil<input type="radio" name="option" value="pago movil"checked/></span>
              
            </section>
            <section className="input-container">               
                <span className="MP2">Fecha:<input className="inputDate" 
                type="date"
                 name="Fecha"/></span>
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