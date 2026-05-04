const catalogue = [
  {
    category: 'LPG Supply', items: [
      { name: '6 kg LPG Cylinder Refill',    price: 'Market Rate',   note: 'Weight-verified, branded' },
      { name: '13 kg LPG Cylinder Refill',   price: 'Market Rate',   note: 'Weight-verified, branded' },
      { name: '50 kg LPG Cylinder Refill',   price: 'Market Rate',   note: 'Commercial / Industrial' },
      { name: 'Industrial Bulk LPG',         price: 'Request Quote', note: 'Custom volumes' },
    ],
  },
  {
    category: 'Personal Protective Equipment', items: [
      { name: 'Steel-Toe Safety Boots (S3)', price: 'From KES 7,000', note: 'Per pair' },
      { name: 'High-Visibility Reflector Vest', price: 'From KES 550', note: 'Per piece' },
      { name: 'Flame-Resistant Coveralls',   price: 'Request Quote', note: 'Custom sizing' },
      { name: 'Full-Body Fall Harness',      price: 'Request Quote', note: 'CE rated' },
      { name: 'Chemical Protection Suit',    price: 'Request Quote', note: 'Hazmat grade' },
      { name: 'Gas Mask / Respirator',       price: 'Request Quote', note: 'Various grades' },
    ],
  },
  {
    category: 'EHS Consultancy & Training', items: [
      { name: 'Basic Fire Safety Training',  price: 'Per Session',   note: 'On-site delivery' },
      { name: 'General Site Safety Audit',   price: 'Per Site',      note: 'Full written report' },
      { name: 'First Aid Certification',     price: 'Per Session',   note: 'Certified trainers' },
      { name: 'Environmental Impact Assessment', price: 'Request Quote', note: 'EIA compliant' },
    ],
  },
  {
    category: 'Engineering & Systems', items: [
      { name: 'Gas Piping Installation',     price: 'Request Quote', note: 'Certified engineers' },
      { name: 'Fire Extinguisher Supply & Service', price: 'Request Quote', note: 'Annual servicing' },
      { name: 'Smoke Detector Installation', price: 'Request Quote', note: 'Smart integration' },
      { name: 'Gas Leak Detection System',   price: 'Request Quote', note: 'Automated alerts' },
    ],
  },
];

export default function Products() {
  return (
    <section id="products" style={{ background: 'var(--white)', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: 'clamp(60px,10vh,120px) var(--pad)' }}>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(32px,5vw,80px)', marginBottom: 56, paddingBottom: 40, borderBottom: '1px solid var(--rule)', alignItems: 'end' }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Products & Pricing</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, color: 'var(--ink)' }}>Our Catalogue</h2>
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--ink-mid)', lineHeight: 1.8 }}>
            All prices shown are starting rates. Contact us for custom quotes, bulk pricing, or procurement via LPO. We provide detailed, transparent proposals within 24 hours.
          </p>
        </div>

        {/* Tables */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {catalogue.map(cat => (
            <div key={cat.category}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 0 }}>
                <p className="label" style={{ paddingBottom: 12, flex: 1, borderBottom: '1px solid var(--ink)' }}>{cat.category}</p>
              </div>
              {cat.items.map((item, i) => (
                <div key={item.name} style={{
                  display: 'grid', gridTemplateColumns: '1fr auto',
                  alignItems: 'center', gap: 16,
                  padding: '16px 0',
                  borderBottom: '1px solid var(--rule)',
                  transition: 'background 0.15s',
                }}>
                  <div>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '0.92rem', color: 'var(--ink)', fontWeight: 400 }}>{item.name}</span>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'var(--ink-faint)', marginLeft: 12, fontWeight: 300 }}>{item.note}</span>
                  </div>
                  <span style={{
                    fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 600,
                    color: item.price.includes('Rate') || item.price.includes('KES') ? 'var(--ink)' : 'var(--ink-faint)',
                    whiteSpace: 'nowrap',
                  }}>{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 64, padding: 'clamp(28px,4vw,48px)', background: 'var(--bg-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: '#fff', marginBottom: 8 }}>Need a custom quote?</h3>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>We respond to all inquiries within 24 hours.</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="tel:+254742990652" style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', background: '#fff', color: 'var(--ink)', padding: '12px 24px', transition: 'background 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; }}
            >Call Now</a>
            <a href="mailto:suppliessafegas@gmail.com" style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', padding: '12px 24px', transition: 'border-color 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = '#fff')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)')}
            >Email Us</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #products > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
