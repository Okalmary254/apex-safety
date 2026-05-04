import logo from '../assets/logo.png';

const cols = [
  { heading: 'Services',  links: ['LPG Solutions', 'PPE Supply', 'EHS Consultancy', 'Safety Engineering'] },
  { heading: 'Company',   links: ['About Us', 'Why Choose Us', 'Testimonials', 'Certifications'] },
  { heading: 'Legal',     links: ['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'OSHA Compliant'] },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', color: '#fff' }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: 'clamp(48px,8vh,80px) var(--pad) 32px' }}>

        {/* Top */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: 'clamp(32px,4vw,60px)', paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 32 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <img src={logo} alt="APEX" style={{ height: 36, filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: '#fff', letterSpacing: '0.04em' }}>APEX</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Safety Solutions</div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 260 }}>
              Powering Industry, Protecting People, Preserving the Environment. Nairobi & Kisumu, Kenya.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="tel:+254742990652" style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '9px 16px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = '#fff')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)')}
              >Call Us</a>
              <a href="mailto:suppliessafegas@gmail.com" style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', background: 'var(--accent)', padding: '9px 16px', transition: 'opacity 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >Email Us</a>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.heading}>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>{col.heading}</p>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map(l => (
                  <li key={l} style={{ marginBottom: 12 }}>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>© 2026 APEX Energy & Safety Solutions. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>suppliessafegas@gmail.com · +254 742 990 652</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
          footer > div > div:first-child > div:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  );
}
