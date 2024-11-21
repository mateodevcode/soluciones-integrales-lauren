
const Footer = () => {
  return (
    <div className="bg-gray-800">
        <div className="flex flex-row justify-around items-start">
            <div className="text-gray-400 my-10">
                <h3 className="font-semibold text-xl text-white">Soluciones Integrales Lauren</h3>
                <p>Transformando espacios con calidad e innovación desde 1990.</p>
            </div>
            <div className="text-gray-400 my-10">
                <h3 className="font-semibold text-xl text-white">Contáctanos</h3>
                <p>Email: info@puertasventanas.com</p>
                <p>Telofono: (123) 456-7890</p>
            </div>
        </div>
        <div>
            <hr />
            <p className='text-gray-400 text-center py-2'>© 2023 Soluciones Integrales Lauren. Todos los derechos reservados.</p>
        </div>
    </div>
  )
}

export default Footer