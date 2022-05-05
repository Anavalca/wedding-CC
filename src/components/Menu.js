import { useState } from "react";

export const Menu = () => {

  const [burguerToogle, setBurguerToogle] = useState(false)


  document.body.style.overflow = burguerToogle ? 'hidden' : 'auto';

  return (
    <nav className='navContainer'>
      <div className={`hamburguerNav ${burguerToogle ? 'open' : ''}`} onClick={() => setBurguerToogle(!burguerToogle)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <div className={`${burguerToogle ? 'hamburguerNavOpen' : 'closed'}`}>
          { burguerToogle && (
          <ul className='navBurguer'>
            <li><a href='#home' onClick={() => setBurguerToogle(!burguerToogle)}>Inicio</a></li>
            <li><a href="#location" onClick={() => setBurguerToogle(!burguerToogle)}>La boda</a></li>
            <li><a href="#map" onClick={() => setBurguerToogle(!burguerToogle)}>Ubicación</a></li>
            <li><a href="#galery" onClick={() => setBurguerToogle(!burguerToogle)}>Fotos</a></li>
            <li><a href="#form" onClick={() => setBurguerToogle(!burguerToogle)}>Contacto</a></li>
          </ul>
          )}
        </div>
      <ul className='nav'>
        <li><a href='#home'>Inicio</a></li>
        <li><a href="#location">La boda</a></li>
        <li><a href="#map">Ubicación</a></li>
        <li><a href="#galery">Fotos</a></li>
        <li><a href="#form">Contacto</a></li>
      </ul>
    </nav>
  );
}