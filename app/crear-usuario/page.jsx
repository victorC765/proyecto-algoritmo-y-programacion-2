
import Image from 'next/image';
import Link from 'next/link';
import '../css/style.css'

export default function InitUser(){
    return (
        <form class="formulario">
        <h1>Registrar Usuario</h1>
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

            <Link href="../pages/NavBar">
            <input type="button" value="Registrar Usuario"/>
            </Link>
        </section>
    </form>
    )
}