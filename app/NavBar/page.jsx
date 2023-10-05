

import '../css/menu.css';
import '../css/pagina.css';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (

<header class="header">
<nav>
  <section class="container">
  <section class="btn-menu">
      <label for="btn-menu">☰</label>
  </section>
      <section class="logo">
      <h1>FacturAdd</h1>
      </section>
      <section class="menu">
          <a href="#">acerca de</a>
          <a href="#">Cerrar sesion</a>
  </section>
      </section>
</nav>

<section class="capa"></section>


<input type="checkbox" id="btn-menu"/>
<section class="container-menu">
<section class="cont-menu">
  <nav>
      <ul class="nav">
         <li><a><Image src="/icon/cliente.png" alt="Cliente" width={500} height={500}/> Clientes</a>
          <ul>
              <li><Link href="/pages/crear-cliente">Registrar cliente</Link></li>
              <li><a href="">Clientes</a></li>
          </ul>
         </li>
         <li><a><Image src="/icon/factura.png" alt="Factura" width={500} height={500}/> Factura</a>
          <ul>
              <li><Link href="/pages/crear-factura">Nueva Factura</Link></li>
          </ul>
        </li>
         <li><a><Image src="/icon/producto menu.png" alt="Producto" width={500} height={500}/> Productos</a>
         <ul>
             <li><Link href="/pages/crear-producto">Registrar Producto</Link></li>
         </ul>
         </li>
         <li><a><Image src="/icon/ajustes.png" alt="Ajustes" width={500} height={500}/> Ajustes</a></li>
      </ul>
  </nav>
  <label for="btn-menu">✖️</label>
</section>
</section>
</header>
);
}