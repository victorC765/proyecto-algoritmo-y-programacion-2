
import Link from "next/link";
import "./css/menu.css";
import "./css/pagina.css";

export default function MotherPage(){
    return (<section>	<header class="header">
    <section class="container"> 
    <section class="btn-menu">
        <label for="btn-menu">☰</label>
    </section>
        <section class="logo">
            <h1>FacturAdd</h1>
        </section>
        <section class="menu">
            <a><span>Inicio</span></a>
            <a><span>acerca de</span></a>
            <a><span>Contacto</span></a>
        </section>
        </section>
</header>
<section class="capa"></section>
<input type="checkbox" id="btn-menu"></input>
<section class="container-menu">
<section class="cont-menu">
    <nav>
        <ul class="nav">
           <li><a><img src="assets/icon/usuario menu.png"></img><span>Usuario</span></a>
               <ul>
                <li><a><span>Inicio de Usuario</span></a></li>
               </ul> 
           </li>
           <li><a><img src="assets/icon/cliente.png"></img>Clientes</a>
            <ul>
                <li><a><span>Registrar cliente</span></a></li>
                <li><a><span>Clientes</span></a></li>
            </ul>
           </li>
           <li><a><img src="assets/icon/factura.png"></img><span>Factura</span></a>
            <ul>
                <li><Link href="/factura/crear-factura/page.jsx"><span>Nueva Factura</span></Link></li>
            </ul>
          </li>
           <li><a><img src="assets/icon/producto menu.png"></img><span> Productos</span></a></li>
           <li><a><img src="assets/icon/ajustes.png"></img><span>Ajustes</span></a></li>
        </ul>
    </nav>
    <label for="btn-menu">✖️</label>
</section>
</section>
</section>
    );
}