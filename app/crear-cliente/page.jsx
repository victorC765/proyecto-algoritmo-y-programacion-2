import '../css/formulario.css'
import Image from 'next/image';
import Link from 'next/link';

export default function CreateClient(){
    return (
        <form class="formulario">
        <h1 className='titulo'>Registro de Cliente</h1>
        <section class="container">
            <section className="input-container">
                <Image src="/icon/usuario.png" alt="Usuario" width={500} height={500}/>           
                <input type="text" name="cliente" placeholder="Nombre y Apellido"/>
            </section>
            <section className="input-container">
                <Image src="/icon/tarjeta-de-identificacion.png" alt="ID" width={500} height={500}/>                 
                <input type="text" name="cedula"placeholder="Cédula de Identidad"/>
            </section>
            <section className="input-container">
                <Image src="/icon/telefono.png" alt="Telefono" width={500} height={500}/>               
                <input type="text" name="telefono" placeholder="Número de Telefono"/>
            </section>
            <section className="input-container">
                <Image src="/icon/casa.png" alt="Domicilio" width={500} height={500}/>                 
                <input type="text" name="Domicilio"placeholder="Dirección de Domicilio"/>
            </section>

            <section className="input-container">
                <p>Sexo:
                  <input type="radio" name="genero" value="male" checked/> Hombre
                  <input type="radio" name="genero" value="female"checked/> Mujer
                  <input type="radio" name="genero" value="other"checked/> Otro
                 </p>
            </section>
            <p></p>
            <Link href="./NavBar">
            <button className='boton'>Registrar Cliente</button>
            </Link>
        </section>
    </form>
    )
} 