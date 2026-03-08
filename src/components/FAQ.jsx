import { useState } from "react";

const faqs = [
  { q: "¿Necesito contratar toda la casa?",       a: "No. Nuestro modelo es exactamente al revés: trabajamos por espacio específico. Tú eliges qué área necesita atención y nosotros nos enfocamos solo ahí." },
  { q: "¿Cuánto tiempo demora cada servicio?",    a: "Depende del estado del espacio. Un baño toma entre 1-2 hrs, una cocina 2-3 hrs, una bodega puede ser medio día. Siempre te damos un estimado antes de empezar." },
  { q: "¿Traen sus propios materiales y productos?", a: "Sí. Llegamos equipados con todo lo necesario: productos de calidad profesional, maquinaria y herramientas. Tú no tienes que preparar nada." },
  { q: "¿Cómo cotizo o agendo?",                 a: "Escríbenos por WhatsApp o completa el formulario. Respondemos en menos de 2 horas en horario hábil." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <style>{`
        .faq-bg { background: var(--ice); }
        .faq-list { max-width: 720px; margin: 0 auto; }
        .faq-item {
          border-bottom: 1px solid var(--sky);
          padding: 24px 0; cursor: pointer;
        }
        .faq-q {
          display: flex; justify-content: space-between; align-items: center;
          font-weight: 700; font-size: 0.96rem; gap: 16px; color: var(--dark);
        }
        .faq-q::after {
          content: '+'; font-size: 1.5rem; color: var(--blue);
          transition: transform 0.3s; flex-shrink: 0; font-weight: 300;
        }
        .faq-item.open .faq-q::after { transform: rotate(45deg); }
        .faq-a {
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s ease, padding 0.3s;
          font-size: 0.88rem; color: var(--muted); line-height: 1.75;
        }
        .faq-item.open .faq-a { max-height: 200px; padding-top: 14px; }
      `}</style>

      <section className="faq-bg">
        <div className="section-header centered">
          <span className="section-label">Preguntas frecuentes</span>
          <h2 className="section-title">Todo lo que necesitas saber</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;