import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    Nombre: '',
    Email: '',
    Mensaje: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        'serviceID', // paste your ServiceID here (you'll get one when your service is created).
        'templateID', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'Luis Santiago Cortes Hernández', // put your name here.
          from_email: form.email,
          to_email: 'lscortesh@gmail.com', //put your email here.
          message: form.message,
        },
        'yourpublickey' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            Nombre: '',
            Email: '',
            Mensaje: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <h3 className={styles.sectionHeadTextLight}>Contacto.</h3>

        {/* Formulario y campos de entrada del formulario, como antes */}
        
        {/* Agregar enlace a LinkedIn */}
        <div className="my-4">
          <a
            href="https://www.linkedin.com/in/luis-santiago-cort%C3%A9s-553687107/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-timberWolf font-medium hover:underline">
            Visita mi perfil en LinkedIn
          </a>
          <br />
          <a
            href="https://platzi.com/p/SantiagoCortesDev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-timberWolf font-medium hover:underline">
            Visita mi perfil en Platzi
          </a>
          <br />
          <a
            href="https://github.com/LuisSantiagoCortes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-timberWolf font-medium hover:underline">
            Visita mi perfil en GitHub
          </a>
          {/* Agrega más enlaces de blogs según sea necesario */}
        </div>
        

    
        
        {/* Hipervínculo de agradecimientos */}
        <div className="my-4">
          <a
            href="https://github.com/shaqdeff/Portfolio-Template"
            target="_blank"
            rel="noopener noreferrer"
            className="text-timberWolf font-medium hover:underline">
            Agradecimientos a Shaqdeff
          </a>
        </div>
    

      </motion.div>
    </div>
    
  );
  
};

export default SectionWrapper(Contact, 'contact');
