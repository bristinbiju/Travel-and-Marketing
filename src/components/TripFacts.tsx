import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const facts = [
  { label: 'Duration',    value: '3 Days / 2 Nights' },
  { label: 'Destination', value: 'Nice, France' },
  { label: 'Season',      value: 'April – October' },
  { label: 'Great For',   value: 'Couples, Friends, Solo' },
  { label: 'Price',       value: 'TBC — Concept' },
  { label: 'Dates',       value: 'TBC — to confirm' },
]

export default function TripFacts() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="trip"
      ref={ref}
      aria-label="Trip overview facts"
      style={{ background: '#0E2236' }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem,5vw,2rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        }}
      >
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.07, duration: 0.45 }}
            style={{
              padding: 'clamp(1.5rem,4vw,2.25rem) clamp(1rem,3vw,1.5rem)',
              borderRight: i < facts.length - 1 ? '1px solid rgba(221,243,243,0.07)' : 'none',
              textAlign: 'center',
            }}
          >
            <dt style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#168AAD',
              marginBottom: '0.5rem',
            }}>
              {fact.label}
            </dt>
            <dd style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(0.875rem, 1.5vw, 1.0625rem)',
              fontWeight: 500,
              color: '#FAF7F0',
              lineHeight: 1.3,
              margin: 0,
            }}>
              {fact.value}
            </dd>
          </motion.div>
        ))}
      </div>

      {/* Mobile: stack vertically and remove border-right */}
      <style>{`
        @media (max-width: 600px) {
          #trip dl > div { border-right: none !important; border-bottom: 1px solid rgba(221,243,243,0.07); }
          #trip dl > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}
