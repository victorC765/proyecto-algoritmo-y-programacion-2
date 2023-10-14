
import '../css/menu.css';
import '../css/pagina.css';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (

<header className="header">
<nav>
  <section className="container">
  <section className="btn-menu">
      <label htmlFor='btn-menu'>☰</label>
  </section>
      <section className="logo">
      <h1>FacturAdd</h1>
      </section>
      <section className="menu">
          <a href="#">acerca de</a>
          <a href="#">Cerrar sesion</a>
  </section>
  </section>    
</nav>

<section className="capa"></section>


<input type="checkbox" id="btn-menu"/>
<section className="container-menu">
<section className="cont-menu">
  <nav>
      <ul className="nav">
         <li><a><Image src="/icon/cliente.png" alt="Cliente" width={500} height={500}/> Clientes</a>
          <ul>
              <li><Link href="../crear-cliente">Registrar cliente</Link></li>
              <li><a href="">Clientes</a></li>
          </ul>
         </li>
         <li><a><Image src="/icon/factura.png" alt="Factura" width={500} height={500}/> Factura</a>
          <ul>
              <li><Link href="../crear-factura">Nueva Factura</Link></li>
          </ul>
        </li>
         <li><a><Image src="/icon/producto menu.png" alt="Producto" width={500} height={500}/> Productos</a>
         <ul>
             <li><Link href="../crear-producto">Registrar Producto</Link></li>
         </ul>
         </li>
         <li><a><Image src="/icon/ajustes.png" alt="Ajustes" width={500} height={500}/> Ajustes</a></li>
      </ul>
  </nav>
     <label htmlFor='btn-menu'>✖️</label>
</section>
</section>
</header>
);
}