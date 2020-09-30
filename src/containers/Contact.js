import React from "react";
import ContactForm from "../components/ContactForm";

export const Contact = () => (
  <div className="contact-page">
    <h1>Contactez-nous</h1>
    <p>
      Des questions, des suggestions, contactez-nous ! Vous pouvez nous écrire
      directement à parents (at) collectberanger.paris ou directement via le
      formulaire ci-dessous.
    </p>
    <ContactForm />
  </div>
);
