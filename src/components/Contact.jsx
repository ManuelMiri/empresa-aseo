import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "", telefono: "", servicio: "", mensaje: "",
  });

  const handleSubmit = () => {
    alert("¡Gracias! Te contactaremos pronto.");
  };

  return (
    <>
       <section id="contacto">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">Contacto</span>
            <h2>Solicita tu cotización gratuita</h2>
            <p>Cuéntanos qué espacio necesitas resolver y te respondemos en menos de 2 horas. Sin compromiso, sin letra chica.</p>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div><strong>Cobertura</strong><span>Santiago y comunas cercanas</span></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div><strong>Horario de atención</strong><span>Lunes a Sábado, 8:00 – 20:00 hrs</span></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <div><strong>Respuesta rápida</strong><span>En menos de 2 horas en horario hábil</span></div>
            </div>

            <a
              href="https://wa.me/56912345678?text=Hola!%20Quiero%20cotizar%20un%20servicio%20de%20aseo"
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Escribir por WhatsApp
            </a>
          </div>

          <div>
            <div className="form-group">
              <label>Nombre completo</label>
              <input
                type="text" placeholder="Tu nombre"
                value={formData.nombre}
                onChange={e => setFormData({ ...formData, nombre: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Teléfono / WhatsApp</label>
              <input
                type="tel" placeholder="+56 9 XXXX XXXX"
                value={formData.telefono}
                onChange={e => setFormData({ ...formData, telefono: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Servicio de interés</label>
              <select
                value={formData.servicio}
                onChange={e => setFormData({ ...formData, servicio: e.target.value })}
              >
                <option value="">Selecciona un espacio</option>
                <option>Cocina</option>
                <option>Baño</option>
                <option>Habitación / Closet</option>
                <option>Bodega</option>
                <option>Oficina</option>
                <option>Servicio adicional</option>
                <option>Varios espacios</option>
              </select>
            </div>
            <div className="form-group">
              <label>Cuéntanos más (opcional)</label>
              <textarea
                placeholder="¿Cuándo necesitas el servicio? ¿Algún detalle importante?"
                value={formData.mensaje}
                onChange={e => setFormData({ ...formData, mensaje: e.target.value })}
              />
            </div>
            <button className="btn-form" onClick={handleSubmit}>
              Enviar solicitud →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;