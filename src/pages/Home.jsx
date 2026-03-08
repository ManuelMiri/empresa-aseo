import Navbar      from "../components/Navbar";
import Hero        from "../components/Hero";
import Services    from "../components/Services";
import Testimonials from "../components/Testimonials";
import FAQ         from "../components/FAQ";
import Contact     from "../components/Contact";
import Footer      from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/56912345678?text=Hola!%20Quiero%20cotizar"
        className="float-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </>
  );
};

export default Home;