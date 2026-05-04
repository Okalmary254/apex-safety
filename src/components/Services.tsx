import { useState } from 'react';

const services = [
  {
    id: 'lpg', num: '01',
    title: 'LPG Gas Solutions',
    sub: 'Bulk & Cylinder Distribution',
    desc: 'Clean, efficient energy for domestic, commercial, and industrial use. Backed by certified installation and round-the-clock logistics.',
    items: [
      'Retail cylinder refills: 6 kg, 13 kg, 50 kg',
      'Industrial bulk LPG delivery',
      'Central gas system design & installation',
      'Certified gas piping and commissioning',
      '24/7 emergency delivery & technical support',
    ],
  },
  {
    id: 'ppe', num: '02',
    title: 'Personal Protective Equipment',
    sub: 'Head-to-Toe Protection',
    desc: 'CE, ANSI, and ISO-certified gear sourced for the most demanding environments — every item tested for durability and compliance.',
    items: [
      'Hard hats, safety goggles, earplugs',
      'Flame-resistant (FR) coveralls & chemical suits',
      'High-visibility vests',
      'Steel-toe boots (S3 rated) & task-specific gloves',
      'Full-body harnesses & fall-arrest systems',
      'Gas masks & respiratory protection',
    ],
  },
  {
    id: 'ehs', num: '03',
    title: 'EHS Consultancy',
    sub: 'Compliance & Safety Management',
    desc: 'Expert-led auditing, training, and compliance services that protect your workforce and satisfy all regulatory requirements.',
    items: [
      'Comprehensive site risk assessments',
      'Fire safety audits (OSHA-compliant)',
      'Basic Firefighting & First Aid training',
      'Safe LPG Handling workshops',
      'Environmental Impact Assessment (EIA)',
      'Hazardous waste disposal protocols',
    ],
  },
  {
    id: 'eng', num: '04',
    title: 'Safety Engineering',
    sub: 'Installation & Digital Systems',
    desc: 'From fire suppression hardware to real-time digital incident management — safety infrastructure built and maintained by certified engineers.',
    items: [
      'Fire extinguisher supply & annual servicing',
      'Smoke detector installation',
      'Automated gas leak detection systems',
      'Real-time PPE tracking software',
      'Incident management digital platform',
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState('lpg');
  const cur = services.find(s => s.id === active)!;

  return (
    <section id="services" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: 'clamp(60px,10vh,120px) var(--pad)' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24, borderBottom: '1px solid var(--rule)', paddingBottom: 40 }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Our Solutions</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, color: 'var(--ink)' }}>What We Deliver</h2>
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--ink-mid)', maxWidth: 360, lineHeight: 1.75 }}>
            A complete portfolio of integrated energy and safety services — everything your business needs, one supplier.
          </p>
        </div>

        {/* Tab row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: '1px solid var(--rule)', marginBottom: 0 }}>
          {services.map(s => (
            <button key={s.id} onClick={() => setActive(s.id)} style={{
              background: 'none', border: 'none', borderBottom: active === s.id ? '2px solid var(--ink)' : '2px solid transparent',
              padding: '18px 0 16px',
              cursor: 'pointer', textAlign: 'left',
              transition: 'border-color 0.2s',
              marginBottom: -1,
            }}>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: active === s.id ? 'var(--accent)' : 'var(--ink-faint)', display: 'block', marginBottom: 6 }}>{s.num}</span>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: active === s.id ? 600 : 400, color: active === s.id ? 'var(--ink)' : 'var(--ink-mid)', display: 'block' }}>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderLeft: '1px solid var(--rule)', borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
          <div style={{ padding: 'clamp(28px,4vw,56px)', borderRight: '1px solid var(--rule)' }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>{cur.sub}</p>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem,2.5vw,2.4rem)', lineHeight: 1.1, color: 'var(--ink)', marginBottom: 20 }}>{cur.title}</h3>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', fontWeight: 300, color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: 36 }}>{cur.desc}</p>
            <a href="#contact" style={{
              display: 'inline-block', fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 600,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              background: 'var(--ink)', color: '#fff', padding: '12px 24px', transition: 'background 0.2s',
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--accent)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--ink)')}
            >Request a Quote →</a>
          </div>
          <div style={{ padding: 'clamp(28px,4vw,56px)' }}>
            <p className="label" style={{ marginBottom: 24 }}>Included</p>
            <ul style={{ listStyle: 'none' }}>
              {cur.items.map((item, i) => (
                <li key={item} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', paddingBottom: 16, marginBottom: 16, borderBottom: i < cur.items.length - 1 ? '1px solid var(--rule)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', fontWeight: 600, color: 'var(--accent)', marginTop: 3, flexShrink: 0, letterSpacing: '0.1em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #services > div > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
          #services > div > div:last-child { grid-template-columns: 1fr !important; }
          #services > div > div:last-child > div:first-child { border-right: none !important; border-bottom: 1px solid var(--rule) !important; }
        }
      `}</style>
    </section>
  );
}
