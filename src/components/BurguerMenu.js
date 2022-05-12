import { useState } from "react";

export const BurgerMenu = () => {

  const [burguerToogle, setBurguerToogle] = useState(false)

  document.body.style.overflow = burguerToogle ? 'hidden' : 'auto';

  return (
    <>
      <div className={`hamburguerNav ${burguerToogle ? 'open' : ''}`} onClick={() => setBurguerToogle(!burguerToogle)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${burguerToogle ? 'hamburguerNavOpen' : 'closed'}`}>
        {burguerToogle && (
          <ul className='navBurguer'>
            <li onClick={() => setBurguerToogle(!burguerToogle)}><a href='#home' >Inicio</a></li>
            <li onClick={() => setBurguerToogle(!burguerToogle)}><a href="#location">Detalles del evento</a></li>
            <li onClick={() => setBurguerToogle(!burguerToogle)}><a href="#galery" >Galeria</a></li>
            <li onClick={() => setBurguerToogle(!burguerToogle)}><a href="#form">Contacto</a></li>
          </ul>
        )}
      </div>
    </>
  );
}