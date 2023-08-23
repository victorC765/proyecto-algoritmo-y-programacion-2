
import Image from 'next/image';

export default function InitUser(){
    return (
        <form class="formulario">
        <h1>Usuario</h1>
        <section class="container">
            <section class="input-container">               
                <Image src="/icon/usuario.png"  alt="Usuario" width={500} height={500}/>
                <input type="text" name="usuario" placeholder="Nombre y Apellido"/>
            </section>
            <section class="input-container">               
                <Image src="/icon/tarjeta-de-identificacion.png"  alt="ID usuario" width={500} height={500}/>
                <input type="text" name="ID usuario" placeholder="Cédula de Identidad"/>
            </section>
            <input type="button" value="Registrar Entrada" onclick="location.href='index.html'" />
        </section>
    </form>
    )
}