import Caracteristicas from "@/components/Caracteristicas";
import Catalogo from "@/components/Catalogo";
import Contactanos from "@/components/Contactanos";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Principal from "@/components/Principal";
import Testimonios from "@/components/Testimonios";

export default function Home() {
  return (
    <div className="bg-[#F3F4F6] h-screen">
      <Navbar />
      <Principal />
      <Caracteristicas />
      <Catalogo />
      <Testimonios />
      <Contactanos  />
      <Footer />
    </div>
  );
}
