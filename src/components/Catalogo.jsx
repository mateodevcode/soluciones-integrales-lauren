import { productos } from "@/data/productos";
import Image from "next/image";
import React from "react";

const Catalogo = () => {
  return (
    <div className="flex flex-col justify-start items-center h-[500px] w-full bg-[#F3F4F6] pt-20">
      <h2 className="font-semibold text-3xl">Nuestros Productos</h2>
      <div className="flex flex-row justify-center items-center mt-10 w-full pb-10">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="bg-[#F9FAFB] w-[300px] h-[250px] rounded-md mx-5 shadow-lg shadow-black/30 bg-black/90 flex flex-col justify-between items-center"
          >
            <Image src={producto.imagen} width={100} height={100} alt="imagen producto" />
            <h3 className="font-semibold text-xl bg-white w-full rounded-b-md text-center py-2">{producto.nombre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
