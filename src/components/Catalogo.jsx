"use client"
import { productos } from "@/data/productos";
import Image from "next/image";
import React from "react";

const Catalogo = () => {
  return (
    <div className="flex flex-col justify-start items-center lg:h-[550px] sm:h-[1400px] w-full bg-[#F3F4F6] lg:pt-20 sm:pt-10" id="productos">
      <h2 className="font-semibold text-3xl">Nuestros Productos</h2>
      <div className="flex lg:flex-row sm:flex-col justify-center items-center mt-10 w-full pb-10">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="bg-[#F9FAFB] w-[300px] h-[250px] rounded-md mx-5 shadow-lg shadow-black/30 bg-black/90 flex flex-col justify-between items-center hover:scale-105 cursor-pointer hover:shadow-blue-950 transition-transform duration-300 lg:my-0 sm:my-4"
          >
            <Image src={producto.imagen} width={100} height={100} alt="imagen producto" />
            <h3 className="font-semibold text-xl bg-white w-full rounded-b-md text-center py-2">{producto.nombre}</h3>
          </div>
        ))}
      </div>
      <button className="bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-black/80" onClick={() => alert("Funciona!")}>
        Ver más
      </button>
    </div>
  );
};

export default Catalogo;
