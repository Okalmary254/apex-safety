import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { EMAILJS_CONFIG } from '../emailjs.config';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name:'', company:'', phone:'', email:'', service:'', message:'' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  // const submit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStatus('sending');
  //   try {
  //     // await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
  //     //   from_name: form.name,
  //     //   company:   form.company || 'N/A',
  //     //   phone:     form.phone,
  //     //   reply_to:  form.email || 'Not provided',
  //     //   service:   form.service || 'Not specified',
  //       message:   form.message || 'No additional message.',
  //       to_email:  EMAILJS_CONFIG.RECIPIENT_EMAIL,
  //     }, { publicKey: EMAILJS_CONFIG.PUBLIC_KEY });
  //     setStatus('success');
  //     setForm({ name:'', company:'', phone:'', email:'', service:'', message:'' });
  //     setTimeout(() => setStatus('idle'), 7000);
  //   } catch (err: unknown) {
  //     setErrorMsg(err instanceof Error ? err.message : 'Please try again or call us directly.');
  //     setStatus('error');
  //     setTimeout(() => setStatus('idle'), 8000);
  //   }
  // };

  const isBusy = status === 'sending';

  const field: React.CSSProperties = {
    width: '100%', background: 'var(--bg)', border: '1px solid var(--rule)',
    padding: '12px 14px', fontFamily: 'var(--sans)', fontSize: '0.9rem',
    color: 'var(--ink)', outline: 'none', transition: 'border-color 0.2s',
    appearance: 'none',
  };
  const lbl: React.CSSProperties = {
    fontFamily: 'var(--sans)', fontSize: '0.68rem', fontWeight: 600,
    letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-faint)',
    display: 'block', marginBottom: 8,
  };

  return (
    <section id="contact" style={{ background: 'var(--white)', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: 'clamp(60px,10vh,120px) var(--pad)' }}>

        {/* Header */}
        <div style={{ paddingBottom: 40, marginBottom: 56, borderBottom: '1px solid var(--rule)' }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Let's Work Together</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, color: 'var(--ink)' }}>Get in Touch</h2>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--ink-mid)', maxWidth: 360, lineHeight: 1.75 }}>
              Request a quote, schedule a free site audit, or simply reach out — we respond within 24 hours.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 'clamp(32px,5vw,72px)' }}>

          {/* Contact details */}
          <div>
            <div style={{ marginBottom: 48 }}>
              {[
                { label: 'Phone & WhatsApp', value: '+254 742 990 652', href: 'tel:+254742990652' },
                { label: 'Email',            value: 'suppliessafegas@gmail.com', href: 'mailto:suppliessafegas@gmail.com' },
                { label: 'Nairobi Office',   value: '123 Industrial Way, Suite 10, Nairobi', href: '#' },
                { label: 'Also Serving',     value: 'Kisumu & East Africa Region', href: '#' },
                { label: 'Availability',     value: '24/7 Emergency & Delivery', href: '#' },
              ].map((c, i, arr) => (
                <a key={c.label} href={c.href} style={{ display: 'block', padding: '18px 0', borderBottom: '1px solid var(--rule)', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
                >
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-faint)', display: 'block', marginBottom: 6 }}>{c.label}</span>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--ink)', fontWeight: 400 }}>{c.value}</span>
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <p className="label" style={{ marginBottom: 16 }}>Certifications</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'OSHA'].map(c => (
                  <span key={c} style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid var(--rule)', color: 'var(--ink-mid)', padding: '7px 12px' }}>{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {status === 'success' && (
              <div style={{ padding: '16px 20px', marginBottom: 24, background: 'var(--bg-alt)', borderLeft: '3px solid var(--ink)', fontFamily: 'var(--sans)', fontSize: '0.875rem', color: 'var(--ink)' }}>
                ✓ Message sent. We'll be in touch within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div style={{ padding: '16px 20px', marginBottom: 24, background: '#fff5f5', borderLeft: '3px solid var(--accent)', fontFamily: 'var(--sans)', fontSize: '0.875rem', color: 'var(--accent)' }}>
                ✗ {errorMsg || 'Something went wrong. Please call us directly.'}
              </div>
            )}

            {/* <form ref={formRef} onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={lbl}>Full Name *</label>
                  <input required name="name" value={form.name} onChange={handle} disabled={isBusy} placeholder="John Doe" style={field}
                    onFocus={e => (e.target.style.borderColor = 'var(--ink)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--rule)')} />
                </div>
                <div>
                  <label style={lbl}>Company</label>
                  <input name="company" value={form.company} onChange={handle} disabled={isBusy} placeholder="ACME Ltd." style={field}
                    onFocus={e => (e.target.style.borderColor = 'var(--ink)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--rule)')} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={lbl}>Phone *</label>
                  <input required name="phone" value={form.phone} onChange={handle} disabled={isBusy} placeholder="+254 700 000 000" style={field}
                    onFocus={e => (e.target.style.borderColor = 'var(--ink)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--rule)')} />
                </div>
                <div>
                  <label style={lbl}>Email</label>
                  <input name="email" value={form.email} onChange={handle} disabled={isBusy} placeholder="you@example.com" style={field}
                    onFocus={e => (e.target.style.borderColor = 'var(--ink)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--rule)')} />
                </div>
              </div>

              <div>
                <label style={lbl}>Service Needed</label>
                <select name="service" value={form.service} onChange={handle} disabled={isBusy} style={{ ...field, cursor: 'pointer', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23111' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}>
                  <option value="">Select a service...</option>
                  <option>LPG Cylinder Refill</option>
                  <option>Industrial Bulk LPG</option>
                  <option>PPE Supply</option>
                  <option>EHS Consultancy</option>
                  <option>Fire Safety Training</option>
                  <option>Site Safety Audit</option>
                  <option>Gas Piping Installation</option>
                  <option>Multiple Services</option>
                </select>
              </div>

              <div>
                <label style={lbl}>Message</label>
                <textarea name="message" value={form.message} onChange={handle} disabled={isBusy} rows={5}
                  placeholder="Describe your needs, site size, or any specific requirements..."
                  style={{ ...field, resize: 'vertical' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--ink)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--rule)')} />
              </div>

              <button type="submit" disabled={isBusy} style={{
                fontFamily: 'var(--sans)', fontSize: '0.78rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: isBusy ? 'var(--ink-faint)' : 'var(--ink)',
                color: '#fff', border: 'none', padding: '16px 32px',
                cursor: isBusy ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s', alignSelf: 'flex-start',
              }}
                onMouseEnter={e => { if (!isBusy) (e.currentTarget as HTMLElement).style.background = 'var(--accent)'; }}
                onMouseLeave={e => { if (!isBusy) (e.currentTarget as HTMLElement).style.background = 'var(--ink)'; }}
              >
                {isBusy ? 'Sending…' : 'Send Message →'}
              </button>
            </form> */}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
          #contact > div > div:last-child > div:last-child > form > div:first-child,
          #contact > div > div:last-child > div:last-child > form > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
