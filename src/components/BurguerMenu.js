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
          <nav className='navBurguer'>
            <a href='#home' onClick={() => setBurguerToogle(!burguerToogle)}>Inicio</a>
            <a href='#confirmation' onClick={() => setBurguerToogle(!burguerToogle)}>Confirma tu asitencia</a>
            <a href="#location" onClick={() => setBurguerToogle(!burguerToogle)}>Detalles del evento</a>
            <a href='#photos' onClick={() => setBurguerToogle(!burguerToogle)}>Comparte tus fotos</a>
            <a href="#galery" onClick={() => setBurguerToogle(!burguerToogle)}>Galería</a>
            <a href="#form" onClick={() => setBurguerToogle(!burguerToogle)}>Contacto</a>
          </nav>
        )}
      </div>
    </>
  );
}