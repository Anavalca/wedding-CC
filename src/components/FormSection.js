import { Form } from './Form';

export const FormSection = () => {

  return (
    <div id='form' className='formContainer' >
      <div className='formBackground'>
        <h2 className='sectionTitle'>Contacto</h2>
        <p className='subtitle'>Puedes ponerte en contacto con nosotros o confirmar tu asistencia rellenando el siguiente formulario.</p>
        <Form />
      </div>
    </div>
  );
}