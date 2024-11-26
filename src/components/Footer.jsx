import { redesSociales } from "@/data/redesSociales";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="flex flex-row justify-around items-start">
        <div className="text-gray-400 my-10 w-6/12 px-10">
          <h3 className="font-semibold text-xl text-white">
            Soluciones Integrales Lauren
          </h3>
          <p className="my-2">
            Transformando espacios con calidad e innovación desde 1990.
          </p>
          <div className="flex flex-row justify-start items-center my-2">
              <div className="flex flex-row justify-center items-center">
                <FaMapMarkerAlt className="mr-2 text-2xl text-gray-300" />{" "}
                <p>Calle 45 # 7-116, Barranquilla, Colombia</p>
              </div>
            </div>
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.279353448704!2d-74.7997572!3d10.942257999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d2b974e9a4d5%3A0x2599fc9cc34499ec!2sAv.%20Murillo%20%237-116%2C%20Buenos%20Aires%2C%20Barranquilla%2C%20Atl%C3%A1ntico%2C%20Colombia!5e0!3m2!1ses-419!2ses!4v1732521788465!5m2!1ses-419!2ses"
              width="100%"
              height="60%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="text-gray-400 my-10 w-6/12 flex flex-col justify-center items-center h-[250px]">
          <h3 className="font-semibold text-xl text-white my-5">Contáctanos</h3>
          <div className="flex flex-row justify-around items-center w-full">
            <div className="flex flex-row justify-start items-center my-2">
              <Link href={redesSociales.facebook} target="_blank">
                <FaFacebook className="mx-2 text-2xl text-blue-600" />
              </Link>
              <Link href={redesSociales.instagram} target="_blank">
                <FaInstagram className="mx-2 text-2xl text-pink-600" />
              </Link>
              <Link href={redesSociales.whatsapp} target="_blank">
                <FaWhatsapp className="mx-2 text-2xl text-green-600" />
              </Link>
            </div>
            <div className="flex flex-row justify-start items-center my-2">
              <FaPhone className="mx-2 text-lg text-gray-300 rotate-90" />
              <p>323 7956198</p>
            </div>
            <div>
              <p className="my-2">info@puertasventanas.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="text-gray-400 text-center py-2">
          © 2023 Soluciones Integrales Lauren. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
