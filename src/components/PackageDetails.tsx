import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const inclusions = [
  { icon: '🛏', label: '2 Nights Accommodation', note: 'Boutique hotel — TBC' },
  { icon: '🚕', label: 'Airport Transfers', note: 'Both ways — to be confirmed' },
  { icon: '🗺', label: 'Curated City Guide', note: 'Digital & printed — TBC' },
  { icon: '🍽', label: 'Welcome Dinner', note: 'Restaurant & inclusions TBC' },
  { icon: '🎟', label: 'Museum Entry', note: '1–2 venues — to be confirmed' },
  { icon: '🚲', label: 'Bike Hire Day', note: '1 day — logistics TBC' },
]

const pricing = [
  { label: 'Solo Traveller', price: 'From TBC', note: 'Per person, single occupancy' },
  { label: 'Per Couple', price: 'From TBC', note: 'Per person, double occupancy' },
  { label: 'Group (4+)', price: 'Contact us', note: 'Group pricing on request' },
]

export default function PackageDetails() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="package"
      ref={ref}
      aria-label="Package details"
      style={{
        background: '#DDF3F3',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#168AAD',
              margin: '0 0 1rem 0',
            }}
          >
            The Package
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#15324B',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 1rem 0',
            }}
          >
            Everything you need,<br />
            <em style={{ fontStyle: 'italic', color: '#F47F65' }}>nothing you don't.</em>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <span
              role="note"
              style={{
                display: 'inline-block',
                background: 'rgba(244,127,101,0.15)',
                border: '1px solid rgba(244,127,101,0.4)',
                borderRadius: '2rem',
                padding: '0.5rem 1.25rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#F47F65',
                textTransform: 'uppercase',
                marginTop: '0.5rem',
              }}
            >
              ⚠️ Campaign Concept — All Inclusions, Dates & Prices Are Indicative &amp; TBC
            </span>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {/* Inclusions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.65 }}
            style={{
              background: '#FAF7F0',
              borderRadius: '1.25rem',
              padding: '2.5rem',
              boxShadow: '0 2px 24px rgba(21,50,75,0.07)',
            }}
          >
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.375rem',
              fontWeight: 700,
              color: '#15324B',
              margin: '0 0 1.75rem 0',
            }}>
              What's Included
            </h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {inclusions.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    paddingBottom: i < inclusions.length - 1 ? '1rem' : 0,
                    borderBottom: i < inclusions.length - 1 ? '1px solid rgba(21,50,75,0.07)' : 'none',
                  }}
                >
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }} aria-hidden="true">{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.9375rem', color: '#15324B', margin: '0 0 0.2rem 0' }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', color: '#168AAD', margin: 0, fontStyle: 'italic' }}>
                      {item.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.32, duration: 0.65 }}
          >
            <div style={{
              background: '#15324B',
              borderRadius: '1.25rem',
              padding: '2.5rem',
              marginBottom: '1.5rem',
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.375rem',
                fontWeight: 700,
                color: '#FAF7F0',
                margin: '0 0 1.75rem 0',
              }}>
                Indicative Pricing
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {pricing.map((tier, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: i < pricing.length - 1 ? '1.25rem' : 0,
                      borderBottom: i < pricing.length - 1 ? '1px solid rgba(221,243,243,0.1)' : 'none',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.9375rem', color: '#FAF7F0', margin: 0 }}>
                        {tier.label}
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(221,243,243,0.55)', margin: 0, marginTop: '0.2rem' }}>
                        {tier.note}
                      </p>
                    </div>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: '#F47F65',
                    }}>
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deadline note */}
            <div style={{
              background: '#FAF7F0',
              borderRadius: '1.25rem',
              padding: '1.75rem',
              boxShadow: '0 2px 24px rgba(21,50,75,0.07)',
            }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                color: '#15324B',
                lineHeight: 1.7,
                margin: 0,
              }}>
                <strong>⚡ Booking Deadline:</strong> To be confirmed. Register your interest below and be the first to know when dates and pricing are announced.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
