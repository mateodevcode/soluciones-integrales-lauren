import Image from "next/image";
import React from "react";

const Principal = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[700px]">
      <div className="w-/12 pl-20 pr-5">
        <h2 className="font-semibold text-5xl">Soluciones Integrales Lauren</h2>
        <p className="text-gray-600 text-xl my-5">
          Transformamos espacios con nuestros productos de alta calidad y diseño
          innovador.
        </p>
        <button className='bg-black text-white px-5 py-3 rounded-md hover:bg-black/80 text-sm'>
                Ver Catálogo
            </button>
      </div>
      <div className="w-[800px] mx-5">
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
