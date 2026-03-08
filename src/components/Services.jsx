import { useState } from "react";

const leftServices = [
  { emoji: "🍳", title: "Cocina",              desc: "Desengrase profundo, mesones, electrodomésticos y cada rincón olvidado.",    tag: "Más solicitado" },
  { emoji: "🚿", title: "Baño",               desc: "Sanitarios, cerámicas, ducha y espejos sin rastro de cal ni humedad.",       tag: null },
  { emoji: "🛏️", title: "Habitación & Closet", desc: "Organización, polvo acumulado y energía renovada en tu espacio íntimo.",    tag: null },
];

const rightServices = [
  { emoji: "📦", title: "Bodega",   desc: "Clasificamos, ordenamos y limpiamos ese espacio que llevas meses evitando.", tag: "Popular" },
  { emoji: "💼", title: "Oficina",  desc: "Ambiente productivo, escritorios, equipos y áreas comunes impecables.",      tag: null },
  { emoji: "🪟", title: "Ventanas", desc: "Limpieza por m², interior y exterior con brillo real sin manchas.",          tag: null },
];

const extraServices = [
  { gradient: "linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)", emoji: "👔", title: "Planchado",         desc: "Prendas de ropa y sábanas con acabado impecable." },
  { gradient: "linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%)", emoji: "🪟", title: "Ventanas",          desc: "Limpieza por m², interior y exterior con brillo real." },
  { gradient: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)", emoji: "🍽️", title: "Almuerzo",          desc: "Preparación para hasta 4 personas, nutritivo y casero." },
  { gradient: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)", emoji: "👶", title: "Cuidado de niños",  desc: "Hasta 3 niños por hora, con atención y cariño." },
  { gradient: "linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)", emoji: "🔌", title: "Electrodomésticos", desc: "Refrigerador, horno, microondas, hervidor y cafetera." },
];

const SvcItem = ({ s, active, onClick }) => (
  <div className={`svc-item ${active ? "svc-item--active" : ""}`} onClick={onClick}>
    <div className="svc-item__icon">{s.emoji}</div>
    <div className="svc-item__body">
      <div className="svc-item__top">
        <h3>{s.title}</h3>
        {s.tag && <span className="svc-item__tag">{s.tag}</span>}
      </div>
      <p>{s.desc}</p>
    </div>
  </div>
);

const Services = () => {
  const [active, setActive] = useState(null);
  const toggle = (key) => setActive(active === key ? null : key);

  return (
    <>
      {/* ── SERVICIOS PRINCIPALES ── */}
      <section id="servicios" className="services-bg">
        <div className="section-header centered">
          <span className="section-label">Lo que hacemos</span>
          <h2 className="section-title">Elige <em>tu espacio</em>,<br />nosotros hacemos el resto</h2>
          <p className="section-sub">
            No cobramos por toda la casa. Enfocamos el 100% de nuestra energía
            en el espacio que tú necesitas hoy.
          </p>
        </div>

        <div className="svc-layout">

          {/* COLUMNA IZQUIERDA */}
          <div className="svc-col">
            {leftServices.map((s) => (
              <SvcItem key={s.title} s={s} active={active === s.title} onClick={() => toggle(s.title)} />
            ))}
          </div>

          {/* IMAGEN CENTRAL */}
          <div className="svc-center">
            <div className="svc-center__visual">
              <div className="svc-center__glow" />
              <div className="svc-center__emoji-wrap">
                <span>🧹</span>
              </div>
              
            </div>
            <a href="#contacto" className="btn-primary" style={{ justifyContent: "center", marginTop: "24px" }}>
              Cotizar mi espacio →
            </a>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="svc-col">
            {rightServices.map((s) => (
              <SvcItem key={s.title} s={s} active={active === s.title} onClick={() => toggle(s.title)} />
            ))}
          </div>

        </div>
      </section>

      {/* ── SERVICIOS ADICIONALES ── */}
      <section id="adicionales">
        <div className="section-header centered">
          <span className="section-label">Servicios adicionales</span>
          <h2 className="section-title">Porque no solo limpiamos…<br />cuidamos cada detalle</h2>
          <p className="section-sub">
            Complementa tu servicio con estas opciones y deja tu hogar 100% resuelto en una sola visita.
          </p>
        </div>
        <div className="extra-grid">
          {extraServices.map((e, i) => (
            <div key={i} className="extra-card">
              <div className="extra-card-img" style={{ background: e.gradient }}>
                <span className="extra-emoji">{e.emoji}</span>
              </div>
              <div className="extra-card-body">
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section id="como-funciona" className="how-bg">
        <div className="section-header">
          <span className="section-label">El proceso</span>
          <h2 className="section-title" style={{ color: "white" }}>Simple, rápido<br />y sin sorpresas</h2>
          <p className="section-sub">
            Cuatro pasos para que tu espacio quede impecable sin que tengas que preocuparte de nada.
          </p>
        </div>
        <div className="steps-grid">
          {[
            { icon: "💬", title: "Cuéntanos qué necesitas",   desc: "Escríbenos por WhatsApp o llena el formulario. Nos dices qué espacio y cuándo." },
            { icon: "📋", title: "Cotización sin compromiso", desc: "En menos de 2 horas te enviamos precio claro, sin letra chica ni cargos ocultos." },
            { icon: "📅", title: "Agendamos la visita",       desc: "Elegimos juntos el día y hora que mejor te acomoden. Nosotros llegamos puntuales." },
            { icon: "✅", title: "Resultado garantizado",     desc: "Trabajamos con estándares profesionales. Si algo no quedó bien, lo corregimos." },
          ].map((s, i) => (
            <div key={i} className="step">
              <div className="step-num">0{i + 1}</div>
              <div className="step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;