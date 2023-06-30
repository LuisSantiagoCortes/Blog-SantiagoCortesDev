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
        <h2 className={styles.sectionHeadText}>¿Quién Soy?.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Soy ingeniero mecatrónico y me especializo en administrar los servidores en la nube de AWS (Linux) para garantizar una alta disponibilidad y escalabilidad de los servicios. Mi pasión por el aprendizaje y mi interés en proyectos con impacto en Latinoamérica me llevan a involucrarme desde la planeación, diseño, prototipado y puesta en marcha, además, mi experiencia en el desarrollo de software y maquinaria industrial, combinada con mi formación en ingeniería mecatrónica, me permite abordar problemas desde una perspectiva integral, mejorando la calidad del software y la integración del hardware (IoT, IIoT). Me apasiona crear soluciones eficientes y efectivas para problemas complejos, y estoy siempre en busca de nuevos desafíos para seguir creciendo profesionalmente.
      </motion.p>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>¿Qué encontrarás en el blog?.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Soy ingeniero mecatrónico y me especializo en administrar los servidores en la nube de AWS (Linux) para garantizar una alta disponibilidad y escalabilidad de los servicios. Mi pasión por el aprendizaje y mi interés en proyectos con impacto en Latinoamérica me llevan a involucrarme desde la planeación, diseño, prototipado y puesta en marcha, además, mi experiencia en el desarrollo de software y maquinaria industrial, combinada con mi formación en ingeniería mecatrónica, me permite abordar problemas desde una perspectiva integral, mejorando la calidad del software y la integración del hardware (IoT, IIoT). Me apasiona crear soluciones eficientes y efectivas para problemas complejos, y estoy siempre en busca de nuevos desafíos para seguir creciendo profesionalmente.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
