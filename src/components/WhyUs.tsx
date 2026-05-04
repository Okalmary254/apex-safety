const reasons = [
  { num: '01', title: 'One-Stop Shop',        desc: 'Energy, PPE, and compliance training from a single accountable supplier. Simplified procurement with zero gaps in coverage.' },
  { num: '02', title: 'ISO & OSHA Certified', desc: 'Fully compliant with ISO 9001, ISO 14001, and OHSAS 18001. Every product and service meets or exceeds international standards.' },
  { num: '03', title: '24/7 Delivery',         desc: 'Domestic LPG delivered in under 30 minutes. Industrial supply backed by round-the-clock logistics and emergency response.' },
  { num: '04', title: 'Expert Team',           desc: 'Certified engineers, safety professionals, and EHS consultants with verified industry credentials and hands-on track records.' },
  { num: '05', title: 'Proven Results',        desc: '25+ corporate clients, 10,000+ safe man-hours, and zero reportable gas incidents since we began operations.' },
];

const steps = [
  { num: '01', title: 'Inquiry & Consultation',  desc: 'Contact us by phone, email, or WhatsApp. New clients receive a free initial site visit to assess your specific gas or safety needs.' },
  { num: '02', title: 'Quotation & Proposal',     desc: 'Within 24 hours we provide a detailed, transparent quote or a comprehensive EHS project proposal tailored to your operation.' },
  { num: '03', title: 'Processing & Logistics',   desc: 'Once your LPO or payment is confirmed, our logistics team schedules delivery or dispatches our technical team for on-site work.' },
  { num: '04', title: 'Delivery & After-Sales',   desc: 'Products are delivered to your site. We follow up to verify all systems are operational and your team is fully satisfied.' },
];

const testimonials = [
  { quote: 'The EHS training was transformative. Our staff is now fully confident in fire safety and emergency response procedures.', name: 'General Manager', org: 'Hospitality Sector Client' },
  { quote: 'Reliable, honest, and safe. I appreciate that they always check my gas valves on every single delivery.', name: 'Mrs. J. Kamau', org: 'Residential Client, Nairobi' },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: 'clamp(60px,10vh,120px) var(--pad)' }}>

        {/* Why Us */}
        <div style={{ marginBottom: 80 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Our Advantage</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, color: 'var(--ink)', marginBottom: 48, paddingBottom: 40, borderBottom: '1px solid var(--rule)' }}>
            Why Partner With APEX?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
            {reasons.map(r => (
              <div key={r.num} style={{ background: 'var(--white)', padding: 'clamp(20px,2.5vw,32px)', transition: 'background 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--bg-alt)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--white)')}
              >
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.16em', color: 'var(--accent)', display: 'block', marginBottom: 16 }}>{r.num}</span>
                <h3 style={{ fontFamily: 'var(--sans)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.4 }}>{r.title}</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 300, color: 'var(--ink-mid)', lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Order */}
        <div style={{ marginBottom: 80 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Simple Process</p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, color: 'var(--ink)', marginBottom: 48, paddingBottom: 40, borderBottom: '1px solid var(--rule)' }}>
            How to Get Started
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
            {steps.map(s => (
              <div key={s.num} style={{ background: 'var(--white)', padding: 'clamp(24px,3vw,40px)' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '2.8rem', color: 'var(--bg-alt)', display: 'block', marginBottom: 20, lineHeight: 1 }}>{s.num}</span>
                <h3 style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.4 }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--ink-mid)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Client Testimonials</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: 'var(--white)', padding: 'clamp(28px,4vw,48px)' }}>
                <div style={{ width: 28, height: 2, background: 'var(--accent)', marginBottom: 28 }} />
                <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1rem,1.5vw,1.2rem)', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.65, marginBottom: 32 }}>"{t.quote}"</p>
                <div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)' }}>{t.name}</div>
                  <div className="label" style={{ marginTop: 4 }}>{t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 900px) {
          #why-us > div > div:first-child > div:last-child { grid-template-columns: 1fr 1fr 1fr !important; }
          #why-us > div > div:nth-child(2) > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          #why-us > div > div:first-child > div:last-child { grid-template-columns: 1fr 1fr !important; }
          #why-us > div > div:last-child > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
