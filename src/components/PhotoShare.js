import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

export const PhotoShare = () => {

  return (
    <>
      <div id='photos' className='photoShareContainer' >
        <a href="https://photos.app.goo.gl/tYoWw3V8PaFNvj6X9" alt='Comparte tus fotos' target='_blank' rel='noreferrer noopener'>
          <FontAwesomeIcon icon={faCloudArrowUp} className='icon' />
          <h2 className='photoTitle'>Sube tus fotos del bodorrio</h2>
        </a>
      </div>
    </>
  )
}