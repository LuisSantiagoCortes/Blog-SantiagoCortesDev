import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Acerca de mi</p>
        <h2 className={styles.sectionHeadText}>¿Quién Soy?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        <p>¡Hola! Bienvenido a mi sitio web de servidores, computación en la nube e IoT.</p>
        
        <p>Soy Luis Santiago Cortés Hernández, un experto en la configuración y administración de servidores, así como en la implementación de soluciones de computación en la nube y en el desarrollo de soluciones de IoT.</p>
      </motion.p>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>¿Qué encontrarás en el blog?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        <p>Este sitio web es una herramienta que pongo a disposición de aquellos interesados en la construcción de soluciones tecnológicas innovadoras y eficientes. Aquí encontrarás una selección de mis proyectos más destacados, así como mis certificaciones y habilidades técnicas en los campos de servidores, computación en la nube e IoT.</p>

        <p>Mi objetivo al compartir mi portafolio es brindar a otros la oportunidad de aprender de mis experiencias y conocimientos. Los proyectos que he desarrollado son ejemplos concretos de soluciones que he implementado para empresas de diversos sectores, lo que puede servir de inspiración para la construcción de nuevas soluciones personalizadas.</p>
        
        <p>Además, también puedes encontrar en mi portafolio una lista de mis habilidades técnicas y certificaciones, las cuales pueden ser de utilidad al buscar un experto en servidores, computación en la nube e IoT para colaborar en nuevos proyectos.</p>

        <p>Espero que mi portafolio sea de utilidad para ti en tu búsqueda de soluciones tecnológicas eficientes y de alta calidad. Si tienes alguna pregunta o deseas más información, no dudes en contactarme.</p>
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, 'about');
