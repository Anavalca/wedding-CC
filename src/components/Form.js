import emailjs from 'emailjs-com';
import { useState } from "react";

const YOUR_SERVICE_ID = "service_jb41tc9";
const YOUR_TEMPLATE_ID = "template_e9uaova";
const YOUR_USER_ID = "user_priKHmSsrK6ZMxp3YGXJ4";

export function validateEmail(email) {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return String(email).toLowerCase().match(pattern) !== null;
}

export const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setmessage] = useState('');
  const [submittedForm, setSubmittedForm] = useState(false);

  const enableSubmit = name && email && message;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      return;
    }

    if (enableSubmit && !submittedForm) {
      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
        .then((result) => {
          setSubmittedForm(true);
        }, (error) => {
          alert('Ha ocurrido un error al enviar el formualrio. Por favor, vuelve a intentarlo más tarde');
        });
    }
  }

  return (
    <form id="formTable" className="topBefore" onSubmit={sendEmail}>
      <input id="name"
        type="text"
        placeholder="NOMBRE Y APELLIDOS"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="contact_name" />
      <input id="email"
        type="text"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="contact_email" />
      <span>MENSAJE</span>
      <textarea id="message"
        type="text"
        value={message}
        onChange={(e) => setmessage(e.target.value)}
        name="message" />
      <input id="submit"
        className={`${submittedForm ? 'sent' : ''}`}
        type="submit"
        value={`${submittedForm ? 'FORMULARIO ENVIADO' : 'ENVIAR'}`}
        disabled={!enableSubmit}
      />
    </form>
  );
}