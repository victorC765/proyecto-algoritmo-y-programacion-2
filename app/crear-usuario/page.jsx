"use client"
import Image from 'next/image';
import Link from 'next/link';
import '../css/formulario.css'

export default function InitUser(){
    function regis(){
        alert("Usuario fue registrado con exito")
    }
    return (
        <form class="formulario">
            <section className='input-container'>
        <h1 className='titulo'>Registrar Usuario</h1>
        </section>
        <section class="container">
            <section class="input-container">               
                <Image src="/icon/usuario.png"  alt="Usuario" width={500} height={500}/>
                <input type="text" name="usuario" placeholder="Nombre y Apellido"/>
            </section>
            <section class="input-container">               
                <Image src="/icon/tarjeta-de-identificacion.png"  alt="ID" width={500} height={500}/>
                <input type="text" name="ID unico" placeholder="Cedula de Identidad"/>
            </section>         
            <section class="input-container">               
                <Image src="/icon/tarjeta-de-identificacion.png"  alt="IDU" width={500} height={500}/>
                <input type="text" name="ID unico" placeholder="Identidicador Unico"/>
            </section>
            <section class="input-container">               
                <Image src="/icon/tarjeta-de-identificacion.png"  alt="Frase" width={500} height={500}/>
                <input type="text" name="ID unico" placeholder="frase de recuperación"/>
            </section>

            <Link href="../app/page.jsx">
            <button className='boton'onClick={regis}>Registrar</button>
            </Link>
        </section>
    </form>
    )
}