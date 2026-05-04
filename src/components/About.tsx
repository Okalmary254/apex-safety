const values = [
  { title: 'Safety Without Compromise', desc: 'Every accident is preventable. Human well-being comes before everything.' },
  { title: 'Reliability',               desc: '24/7 supply and support — your operations never stop on our watch.' },
  { title: 'Environmental Stewardship', desc: 'LPG as a cleaner energy source; EHS solutions that shrink your footprint.' },
  { title: 'Professional Integrity',    desc: 'ISO and OSHA standards in every engagement, every time.' },
  { title: 'Innovation',                desc: 'Latest safety technologies and distribution methods, continuously adopted.' },
  { title: 'Customer Partnership',      desc: 'Long-term relationships built on transparency and tailored outcomes.' },
];

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--white)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: 'clamp(60px,10vh,120px) var(--pad)' }}>

        {/* Header row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(32px,5vw,80px)', marginBottom: 72, alignItems: 'start' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Who We Are</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, color: 'var(--ink)' }}>
              Integrated Safety & Energy
            </h2>
          </div>
          <div style={{ paddingTop: 8 }}>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', fontWeight: 300, color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: 24 }}>
              APEX Energy & Safety Solutions is a premier, multi-sector service provider dedicated to fuelling industry and safeguarding lives. Based in Nairobi and Kisumu, we integrate reliable LPG supply with world-class PPE and comprehensive EHS solutions.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', fontWeight: 300, color: 'var(--ink-mid)', lineHeight: 1.8 }}>
              Our unique <strong style={{ fontWeight: 600, color: 'var(--ink)' }}>Integrated Safety Model</strong> ensures clients receive not just the energy they need to operate, but the gear and expert consultancy required to maintain a zero-harm environment.
            </p>
          </div>
        </div>

        {/* Mission / Vision */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', marginBottom: 72 }}>
          {[
            { label: 'Mission', body: 'To provide reliable LPG supplies, high-performance protective gear, and expert EHS consultancy that empowers businesses to operate efficiently, protect their workforce, and remain compliant with global safety and environmental regulations.' },
            { label: 'Vision',  body: 'To be the premier partner in industrial excellence by seamlessly integrating clean energy solutions with uncompromised safety standards — for a sustainable and zero-harm future.' },
          ].map(item => (
            <div key={item.label} style={{ background: 'var(--bg)', padding: 'clamp(28px,4vw,48px)' }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>{item.label}</p>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', fontWeight: 300, color: 'var(--ink-mid)', lineHeight: 1.8 }}>{item.body}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <p className="label" style={{ marginBottom: 32, borderTop: '1px solid var(--rule)', paddingTop: 32 }}>Core Values</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--rule)', border: '1px solid var(--rule)' }}>
            {values.map(v => (
              <div key={v.title} style={{ background: 'var(--bg)', padding: 'clamp(20px,3vw,36px)', transition: 'background 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--bg-alt)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--bg)')}
              >
                <div style={{ width: 20, height: 2, background: 'var(--accent)', marginBottom: 18 }} />
                <h3 style={{ fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.4 }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.84rem', fontWeight: 300, color: 'var(--ink-mid)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 700px) {
          #about > div > div:first-child,
          #about > div > div:nth-child(2),
          #about > div > div:last-child > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
