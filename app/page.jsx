import Image from 'next/image';
import './pages/css/style.css'
import Link from 'next/link';
export default function InitUser()
{
    return (
        <form class="formulario">
        <h1>Inicio de Sesión</h1>
        <section class="container">
            <section class="input-container">               
                <Image src="/icon/usuario.png"  alt="Usuario" width={500} height={500}/>
                <input type="text" name="usuario" placeholder="Nombre y Apellido"/>
            </section>
            <section class="input-container">               
                <Image src="/icon/tarjeta-de-identificacion.png"  alt="IDU" width={500} height={500}/>
                <input type="text" name="ID unico" placeholder="Identidicador Unico"/>
            </section>
            <section class="input-container">
                <p>             
                <Link href="./pages/crear-usuario">¿No tienes una cuenta ?</Link>
                </p>
            </section>
            <Link href="/pages/NavBar">
            <input type="button" value="Iniciar Sesión" />
            </Link>
        </section>
    </form>
    )
}
    
   
