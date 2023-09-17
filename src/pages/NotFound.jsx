import React from 'react';
import astronautLost from '/src/assets/notfound/astronaut_white.png'; 

const NotFound = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen">
      <img src={astronautLost} alt="Astronauta perdido" className="max-w-full max-h-full mb-4" />
      <h1 className="text-4xl font-bold mb-4">¡Oops! Parece que te has perdido...</h1>
      <p className="text-lg">Parece que esta página no existe en nuestro universo web.</p>
      <p className="text-lg">¿Quieres volver a la página de inicio?</p>
      <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded mt-4">
        Ir a la página de inicio
      </button>

    </div>
  );
};

export default NotFound;
