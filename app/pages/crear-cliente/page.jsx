import '../css/style.css'
import Image from 'next/image';
import Link from 'next/link';

export default function CreateClient(){
    return (
        <form class="formulario">
        <h1>Registro de Cliente</h1>
        <section class="container">
            <section class="input-container">
                <Image src="/icon/usuario.png" alt="Usuario" width={500} height={500}/>           
                <input type="text" name="cliente" placeholder="Nombre y Apellido"/>
            </section>
            <section class="input-container">
                <Image src="/icon/tarjeta-de-identificacion.png" alt="ID" width={500} height={500}/>                 
                <input type="text" name="cedula"placeholder="Cédula de Identidad"/>
            </section>
            <section class="input-container">
                <Image src="/icon/telefono.png" alt="Telefono" width={500} height={500}/>               
                <input type="text" name="telefono" placeholder="Número de Telefono"/>
            </section>
            <section class="input-container">
                <Image src="/icon/casa.png" alt="Domicilio" width={500} height={500}/>                 
                <input type="text" name="Domicilio"placeholder="Dirección de Domicilio"/>
            </section>

            <section class="input-container">
                <p>Sexo:
                  <input type="radio" name="gender" value="male" checked/> Hombre
                  <input type="radio" name="gender" value="female"/> Mujer
                  <input type="radio" name="gender" value="other"/> Otro
                 </p>
            </section>
            <p></p>
            <Link href="./NavBar">
            <input type="button" value="Registrar" onclick="location.href='index.html'"/>
            </Link>
        </section>
    </form>
    )
} 