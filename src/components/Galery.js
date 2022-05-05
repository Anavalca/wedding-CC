import galeryData from './../data/galeryData.json';
import galeryDataExtra from './../data/galeryDataExtra.json';
import { GaleryElement } from './GaleryElement'
import { SRLWrapper } from "simple-react-lightbox";
import { useState } from "react";

export const Galery = () => {
  const [buttonStatus, setButtonStatus] = useState(false)

  return (
    <div id='galery' className='galeryContainer' >
      <h2 className='sectionTitle'>Fotos</h2>
      <div className='sectionLine'></div>
      <p className='subtitle'>Una vez finalizado el evento podrás ver y descargar todas las fotografías en esta sección. Pincha en cualquiera de ellas para acceder a las opciones.</p>
      <SRLWrapper>
        <div className='imgGaleryContainer' >
          {galeryData.map(elem =>
            <GaleryElement element={elem} key={elem.id} />
          )}
        </div>
        <button className={`${buttonStatus ? 'hidden' : ''}`} onClick={setButtonStatus}>Ver más fotos</button>
        {buttonStatus && (
          <div className='imgGaleryContainer' >
            {galeryDataExtra.map(elem =>
              <GaleryElement element={elem} key={elem.id} />
            )}
          </div>
        )}
      </SRLWrapper>
    </div>
  );
}