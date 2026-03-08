import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 20px 40px;
          display: flex; align-items: center; justify-content: space-between;
          transition: all 0.4s ease;
        }
        .nav.scrolled {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(16px);
          padding: 14px 40px;
          box-shadow: 0 2px 24px rgba(33,150,201,0.08);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.7rem; font-weight: 800;
          color: var(--dark); letter-spacing: -1px;
          text-decoration: none;
        }
        .nav-logo span {
          display: inline-block;
          background: var(--yellow); color: var(--dark);
          padding: 0 5px; border-radius: 4px; line-height: 1.1;
        }
        .nav-links { display: flex; gap: 32px; list-style: none; }
        .nav-links a {
          text-decoration: none; color: var(--text);
          font-size: 0.88rem; font-weight: 600; transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--blue); }
        .nav-cta {
          background: var(--yellow); color: var(--dark);
          padding: 10px 22px; border-radius: 100px;
          text-decoration: none; font-size: 0.88rem; font-weight: 700;
          transition: all 0.25s; white-space: nowrap;
          border: 2px solid var(--yellow);
        }
        .nav-cta:hover {
          background: var(--yellow-hover); transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(255,214,0,0.4);
        }
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .hamburger span {
          display: block; width: 24px; height: 2px;
          background: var(--dark); transition: all 0.3s;
        }
        @media (max-width: 768px) {
          .nav { padding: 16px 20px; }
          .nav.scrolled { padding: 12px 20px; }
          .nav-links, .nav-cta { display: none; }
          .hamburger { display: flex; }
          .mobile-menu {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: var(--white); z-index: 200;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center; gap: 32px;
          }
          .mobile-menu a {
            font-family: 'Syne', sans-serif;
            font-size: 2rem; color: var(--dark); text-decoration: none;
          }
          .mobile-close {
            position: absolute; top: 20px; right: 24px;
            font-size: 2rem; background: none; border: none;
            cursor: pointer; color: var(--dark);
          }
        }
      `}</style>

      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#inicio" className="nav-logo">S<span>A</span>O</a>
        <ul className="nav-links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#adicionales">Adicionales</a></li>
          <li><a href="#como-funciona">¿Cómo funciona?</a></li>
          <li><a href="#testimonios">Opiniones</a></li>
        </ul>
        <a href="#contacto" className="nav-cta">Cotizar ahora</a>
        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Abrir menú">
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
          <a href="#servicios"   onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#adicionales" onClick={() => setMenuOpen(false)}>Adicionales</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>¿Cómo funciona?</a>
          <a href="#testimonios" onClick={() => setMenuOpen(false)}>Opiniones</a>
          <a href="#contacto"    onClick={() => setMenuOpen(false)}>Cotizar</a>
        </div>
      )}
    </>
  );
};

export default Navbar;