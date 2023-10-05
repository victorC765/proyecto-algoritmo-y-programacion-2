"use client"
import "./css/formulario.css"
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  const [nombre,setNombre] = useState("");
  const [IDunico,setIDunico] = useState("");
  const [error,setError]=useState(false);
  

  return (
    <section className="input-container">
     
      <form className="formulario">
      <h1 className="titulo">INICIO</h1>
      <section className="input-container">
      <Image src="/icon/usuario.png"  alt="Usuario" width={500} height={500}/>
        <input type="text"
        value={nombre}
        onChange={event=>setNombre(event.target.value)} 
        name="usuario" 
        placeholder="Nombre y Apellido"/>
      </section>

      <section className="input-container">
      <Image src="/icon/tarjeta-de-identificacion.png"  alt="IDU" width={500} height={500}/>               
      <input type="text"
      name="ID unico" 
      value={IDunico}
      onChange={event=>setIDunico(event.target.value)} 
      placeholder="Identidicador Unico"/>
      </section>
      <section className="input-container">
      <Link href="./crear-usuario">
           <p>¿No estas registrado? 
            Registrate para continuar</p>
      </Link>
      </section>

      <Link href="./NavBar" >
      <button className="boton">Iniciar Sesion</button>
      </Link>
      </form>
    </section>
  );
}