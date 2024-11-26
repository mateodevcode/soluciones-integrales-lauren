import Image from "next/image";
import React from "react";

const Principal = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col lg:justify-center sm:justify-start lg:items-center sm:items-start h-[700px] lg:p-0 sm:p-5">
      <div className="w-/12 lg:pl-20 pr-5">
        <h2 className="font-semibold lg:text-5xl sm:text-3xl">Soluciones Integrales Lauren</h2>
        <p className="text-gray-600 lg:text-xl sm:text-base my-5">
          Transformamos espacios con nuestros productos de alta calidad y diseño
          innovador.
        </p>
        <button className='bg-black text-white px-5 py-3 rounded-md hover:bg-black/80 text-sm'>
                Ver Catálogo
            </button>
      </div>
      <div className="lg:w-[800px] sm:w-[350px] lg:mx-5 sm:mx-0 lg:my-0 sm:my-10">
        <Image
          src="https://i.postimg.cc/CK7HVZtg/b16244bd38fb4974633a40fcb058f38e.jpg"
          width={1920}
          height={1080}
          alt="imagen principal"
          className="rounded-md shadow-lg shadow-black/50"
        />
      </div>
    </div>
  );
};

export default Principal;
