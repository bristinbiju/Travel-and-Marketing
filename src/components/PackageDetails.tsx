import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const inclusions = [
  { label: '2 Nights Accommodation', note: 'Boutique hotel — TBC' },
  { label: 'Airport Transfers',       note: 'Both ways — to be confirmed' },
  { label: 'Curated City Guide',      note: 'Digital & printed — TBC' },
  { label: 'Welcome Dinner',          note: 'Restaurant & inclusions TBC' },
  { label: 'Museum Entry',            note: '1–2 venues — to be confirmed' },
  { label: 'Bike Hire Day',           note: '1 day — logistics TBC' },
]

const pricing = [
  { label: 'Solo Traveller', price: 'TBC', note: 'Per person, single occupancy' },
  { label: 'Per Couple',     price: 'TBC', note: 'Per person, double occupancy' },
  { label: 'Group (4+)',     price: 'On request', note: 'Group pricing available' },
]

export default function PackageDetails() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="package"
      ref={ref}
      aria-label="Package details"
      style={{ background: '#DDF3F3', padding: 'clamp(4rem,8vw,8rem) 0' }}
    >
      <div className="section-inner">

        {/* Header */}
        <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            The Package
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.5 }}
          >
            Everything you need,<br />
            <em className="accent-italic">nothing you don't.</em>
          </motion.h2>

          {/* Concept notice — inline text, not pill badge */}
          <motion.p
            role="note"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8125rem',
              color: 'rgba(21,50,75,0.65)',
              margin: 0,
              lineHeight: 1.6,
              borderLeft: '2px solid rgba(244,127,101,0.5)',
              paddingLeft: '0.875rem',
              maxWidth: '52ch',
            }}
          >
            <strong style={{ color: '#15324B' }}>Campaign concept:</strong> all inclusions, dates and prices listed here are indicative and subject to change. Nothing is confirmed at this stage.
          </motion.p>
        </div>

        {/* Content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 2.5rem)',
        }}>

          {/* Inclusions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{ background: '#FAF7F0', padding: 'clamp(1.75rem,4vw,2.5rem)' }}
          >
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              fontWeight: 700,
              color: '#15324B',
              margin: '0 0 1.5rem',
              letterSpacing: '-0.01em',
            }}>
              Indicative Inclusions
            </h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {inclusions.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '1rem',
                    padding: 'clamp(0.75rem,2vw,1rem) 0',
                    borderBottom: i < inclusions.length - 1 ? '1px solid rgba(21,50,75,0.07)' : 'none',
                    flexWrap: 'wrap',
                  }}
                >
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    color: '#15324B',
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8125rem',
                    color: '#168AAD',
                    fontStyle: 'italic',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.note}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pricing + booking note */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem,3vw,1.5rem)' }}
          >
            <div style={{ background: '#15324B', padding: 'clamp(1.75rem,4vw,2.5rem)' }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                fontWeight: 700,
                color: '#FAF7F0',
                margin: '0 0 1.5rem',
                letterSpacing: '-0.01em',
              }}>
                Indicative Pricing
              </h3>
              {pricing.map((tier, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '1rem',
                    padding: 'clamp(0.75rem,2vw,1rem) 0',
                    borderBottom: i < pricing.length - 1 ? '1px solid rgba(221,243,243,0.08)' : 'none',
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '0.9375rem', color: '#FAF7F0', margin: 0 }}>
                      {tier.label}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(221,243,243,0.45)', margin: '0.2rem 0 0' }}>
                      {tier.note}
                    </p>
                  </div>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: '#F47F65',
                    letterSpacing: '-0.01em',
                  }}>
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Booking note */}
            <div style={{
              background: '#FAF7F0',
              padding: 'clamp(1.25rem,3vw,1.75rem)',
              borderLeft: '2px solid #F47F65',
            }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                color: '#15324B',
                lineHeight: 1.7,
                margin: 0,
              }}>
                <strong>Booking deadline:</strong> to be confirmed. Register your interest below to be the first to know when dates and pricing are announced.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
