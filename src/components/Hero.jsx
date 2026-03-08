const Hero = () => {
  return (
    <>
     
      <section className="hero" id="inicio">
        <div>
          <div className="hero-badge fade-up">Servicio profesional de aseo</div>
          <h1 className="fade-up-2">
            Limpiamos el espacio que hoy te <em>quita energía</em>
          </h1>
          <p className="hero-desc fade-up-3">
            En SAO trabajamos con <strong>Limpieza Estratégica por Espacio Específico</strong>.
            No necesitas limpiar toda tu casa. Solo el lugar que hoy necesita atención.
          </p>
          <div className="hero-actions fade-up-3">
            <a href="#contacto" className="btn-primary">Cotizar gratis →</a>
            <a href="#servicios" className="btn-secondary">Ver servicios</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-main">
            <div className="hero-card-img">✨</div>
            <div className="hero-card-body">
              <h3>Limpieza enfocada en resultados reales</h3>
              <p>Un espacio transformado. Sin excusas, sin demoras.</p>
            </div>
          </div>
          <div className="hero-floating">
            <div className="hero-floating-icon">⭐</div>
            <div className="hero-floating-text">
              <strong>+200 clientes felices</strong>
              <span>en Santiago y alrededores</span>
            </div>
          </div>
          <div className="hero-stats">
            <strong>100%</strong>
            <span>satisfacción garantizada</span>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        {[
          "✦ Puntualidad garantizada",
          "✦ Productos profesionales incluidos",
          "✦ Personal verificado",
          "✦ Sin contrato ni permanencia",
        ].map((t, i) => (
          <div key={i} className="trust-item">
            <span>{t.split(" ")[0]}</span>
            <span>{t.slice(2)}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;