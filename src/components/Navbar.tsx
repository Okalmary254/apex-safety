import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us',   href: '#why-us' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const nav: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: scrolled ? 'rgba(245,244,240,0.97)' : 'var(--bg)',
    borderBottom: `1px solid ${scrolled ? 'var(--rule)' : 'transparent'}`,
    backdropFilter: scrolled ? 'blur(8px)' : 'none',
    transition: 'border-color 0.3s, background 0.3s',
  };

  return (
    <nav style={nav}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 var(--pad)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logo} alt="APEX" style={{ height: 40, width: 'auto' }} />
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', letterSpacing: '0.04em', color: 'var(--ink)' }}>APEX</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>Safety Solutions</div>
          </div>
        </a>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: 36, listStyle: 'none', alignItems: 'center' }} className="desk-links">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.04em', color: 'var(--ink-mid)', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-mid)')}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="tel:+254742990652" className="desk-links" style={{
          fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 600,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          background: 'var(--ink)', color: '#fff',
          padding: '10px 22px', transition: 'background 0.2s',
        }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--accent)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--ink)')}
        >+254 742 990 652</a>

        {/* Burger */}
        <button className="burger" onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 4 }}>
          {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 22, height: 1.5, background: 'var(--ink)', transition: 'all 0.2s',
            transform: open ? (i===0 ? 'translateY(6.5px) rotate(45deg)' : i===2 ? 'translateY(-6.5px) rotate(-45deg)' : 'scaleX(0)') : 'none',
            opacity: open && i===1 ? 0 : 1 }} />)}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)', padding: '24px var(--pad) 32px' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--ink)', padding: '12px 0', borderBottom: '1px solid var(--rule)' }}
            >{l.label}</a>
          ))}
          <a href="tel:+254742990652" style={{ display: 'block', marginTop: 20, background: 'var(--ink)', color: '#fff', textAlign: 'center', padding: '14px', fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
            Call +254 742 990 652
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 740px) {
          .desk-links { display: none !important; }
          .burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
