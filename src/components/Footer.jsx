const Footer = () => {
  return (
    <>
      <style>{`
        footer {
          background: var(--dark); color: rgba(255,255,255,0.55);
          padding: 60px 80px 32px;
        }
        .footer-grid {
          display: grid; grid-template-columns: 2fr 1fr 1fr;
          gap: 60px; margin-bottom: 48px;
        }
        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.8rem; font-weight: 800; color: white; margin-bottom: 16px;
          display: block;
        }
        .footer-logo span {
          background: var(--yellow); color: var(--dark);
          padding: 0 6px; border-radius: 4px;
        }
        .footer-desc { font-size: 0.85rem; line-height: 1.8; max-width: 300px; }
        .footer-col h4 {
          color: white; font-size: 0.82rem; font-weight: 800;
          margin-bottom: 20px; letter-spacing: 1.5px; text-transform: uppercase;
        }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 10px; }
        .footer-col ul li a {
          color: rgba(255,255,255,0.5); text-decoration: none;
          font-size: 0.85rem; transition: color 0.2s;
        }
        .footer-col ul li a:hover { color: var(--yellow); }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 24px;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.78rem; flex-wrap: wrap; gap: 8px;
        }
        @media (max-width: 768px) {
          footer { padding: 48px 24px 24px; }
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>

      <footer>
        <div className="footer-grid">
          <div>
            <span className="footer-logo">S<span>A</span>O</span>
            <p className="footer-desc">
              Servicio de Aseo y Orden. Limpieza estratégica por espacio específico.
              Profesional, eficiente y enfocado en resultados reales.
            </p>
          </div>
          <div className="footer-col">
            <h4>Servicios</h4>
            <ul>
              {["Cocina", "Baño", "Habitación", "Bodega", "Oficina", "Servicios adicionales"].map(s => (
                <li key={s}><a href="#servicios">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              {[
                { label: "¿Cómo funciona?",       href: "#como-funciona" },
                { label: "Testimonios",           href: "#testimonios" },
                { label: "Preguntas frecuentes",  href: "#faq" },
                { label: "Contacto",              href: "#contacto" },
              ].map(({ label, href }) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SAO – Servicio de Aseo y Orden. Todos los derechos reservados.</span>
          <span>Hecho con ♥ en Chile</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;