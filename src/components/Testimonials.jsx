const testimonials = [
  { name: "Valentina M.", city: "Santiago",    text: "Limpié solo el baño y la cocina. No tuve que pagar por toda la casa. Resultado increíble y el precio justo.", stars: 5 },
  { name: "Rodrigo P.",   city: "Providencia", text: "Tenía la bodega abandonada hace 2 años. En 3 horas la transformaron completamente. Recomiendo al 100%.", stars: 5 },
  { name: "Camila S.",    city: "Las Condes",  text: "Pedí planchado + limpieza de cocina. Llegaron puntuales, trabajaron sin interrupciones y el resultado fue perfecto.", stars: 5 },
];

const Testimonials = () => {
  return (
    <>
      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .testimonial {
          background: white; border-radius: 20px; padding: 32px 28px;
          border: 1px solid var(--border);
          box-shadow: 0 4px 16px rgba(33,150,201,0.05);
        }
        .stars { color: #FFB800; font-size: 1rem; margin-bottom: 16px; letter-spacing: 2px; }
        .testimonial p {
          font-size: 0.91rem; color: var(--muted); line-height: 1.75;
          margin-bottom: 20px; font-style: italic;
        }
        .testimonial-author { display: flex; align-items: center; gap: 12px; }
        .avatar {
          width: 40px; height: 40px;
          background: linear-gradient(135deg, var(--sky-mid), var(--blue));
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; font-size: 0.9rem; color: white; font-weight: 700;
          flex-shrink: 0;
        }
        .testimonial-author strong { display: block; font-size: 0.88rem; font-weight: 700; color: var(--dark); }
        .testimonial-author span  { font-size: 0.78rem; color: var(--muted); }
      `}</style>

      <section id="testimonios">
        <div className="section-header centered">
          <span className="section-label">Testimonios</span>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-sub">Resultados reales de personas que eligieron limpiar estratégicamente.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="stars">{"★".repeat(t.stars)}</div>
              <p>"{t.text}"</p>
              <div className="testimonial-author">
                <div className="avatar">{t.name[0]}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;