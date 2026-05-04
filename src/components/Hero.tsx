import logo from '../assets/logo.png';

const stats = [
  { value: '10,000+', label: 'Safe man-hours delivered' },
  { value: '0',       label: 'Reportable gas incidents' },
  { value: '25+',     label: 'Active corporate clients' },
  { value: '2026',    label: 'Established in Nairobi' },
];

export default function Hero() {
  return (
    <section id="home" style={{ background: 'var(--bg)', paddingTop: 68, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Top band */}
      <div style={{ borderBottom: '1px solid var(--rule)', padding: '10px var(--pad)' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <span className="label">Nairobi & Kisumu, Kenya</span>
          <span className="label">LPG · PPE · Environmental Health & Safety</span>
        </div>
      </div>

      {/* Main hero */}
      <div style={{ flex: 1, maxWidth: 'var(--max)', margin: '0 auto', padding: 'clamp(48px,8vh,100px) var(--pad)', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'center' }}>

        {/* Left */}
        <div>
          <p className="eyebrow" style={{ marginBottom: 28 }}>Integrated Safety & Energy</p>

          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            color: 'var(--ink)',
            marginBottom: 32,
          }}>
            Powering Industry.<br />
            <span style={{ fontStyle: 'italic', color: 'var(--ink-mid)' }}>Protecting People.</span>
          </h1>

          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', fontWeight: 300, color: 'var(--ink-mid)', lineHeight: 1.75, maxWidth: 440, marginBottom: 44 }}>
            Kenya's premier provider of LPG gas solutions, certified personal protective equipment, and Environmental Health & Safety consultancy — all under one roof.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#services" style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', background: 'var(--ink)', color: '#fff', padding: '14px 28px', transition: 'background 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--accent)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--ink)')}
            >Our Services</a>
            <a href="#contact" style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid var(--ink)', color: 'var(--ink)', padding: '14px 28px', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ink)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; }}
            >Get a Free Quote</a>
          </div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
          <img src={logo} alt="APEX Safety Solutions" style={{ width: '72%', maxWidth: 300 }} />
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ borderTop: '1px solid var(--rule)', background: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 var(--pad)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: '28px 0', borderRight: i < 3 ? '1px solid var(--rule)' : 'none', paddingLeft: i > 0 ? 32 : 0, paddingRight: 32 }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: 4 }}>{s.value}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #home > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #home > div:nth-child(2) > div:last-child { display: none !important; }
          #home > div:last-child > div { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
