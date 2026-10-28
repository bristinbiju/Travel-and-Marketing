import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const facts = [
  { icon: '🗓', label: 'Duration', value: '3 Days / 2 Nights' },
  { icon: '✈️', label: 'Destination', value: 'Nice, France' },
  { icon: '🌡', label: 'Best Season', value: 'April – October' },
  { icon: '👥', label: 'Great For', value: 'Couples, Friends, Solo' },
  { icon: '💶', label: 'Price from', value: 'TBC — Campaign Concept' },
  { icon: '📅', label: 'Dates', value: 'TBC — to be confirmed' },
]

export default function TripFacts() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="trip"
      ref={ref}
      aria-label="Trip overview facts"
      style={{
        background: '#15324B',
        padding: '3.5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0',
        }}
      >
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.55 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '1.5rem 1rem',
              borderRight: i < facts.length - 1 ? '1px solid rgba(221,243,243,0.12)' : 'none',
            }}
          >
            <span style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }} aria-hidden="true">{fact.icon}</span>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#168AAD',
              marginBottom: '0.375rem',
            }}>
              {fact.label}
            </span>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem',
              fontWeight: 500,
              color: '#FAF7F0',
              lineHeight: 1.3,
            }}>
              {fact.value}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Responsive border on mobile */}
      <style>{`
        @media (max-width: 640px) {
          #trip > div > div { border-right: none !important; border-bottom: 1px solid rgba(221,243,243,0.12); }
          #trip > div > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}
