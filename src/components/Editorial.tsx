import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Editorial() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      aria-label="Editorial introduction"
      style={{ background: '#FAF7F0', padding: 'clamp(4rem,8vw,8rem) 0', overflow: 'hidden' }}
    >
      <div
        className="section-inner"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 'clamp(3rem,6vw,6rem)',
          alignItems: 'center',
        }}
      >
        {/* ── Text column ── */}
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Why Nice?
          </motion.p>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.55 }}
          >
            A city that refuses<br />
            <em className="accent-italic--aqua" style={{ color: '#168AAD' }}>to be ordinary.</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.55 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {[
              'Nice sits at the meeting point of two worlds — the raw drama of the Alpes-Maritimes and the languid shimmer of the Mediterranean. It is a city with the soul of a sun-bleached painting and the energy of a place fully in love with being alive.',
              'Three days here isn\'t a holiday — it\'s a beginning. A first taste of baroque alleyways, salt-heavy air, colours that shouldn\'t exist in real life, and a pace that makes you forget you were ever in a hurry.',
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                  color: '#15324B',
                  lineHeight: 1.85,
                  margin: 0,
                  opacity: 0.82,
                }}
              >
                {text}
              </p>
            ))}
          </motion.div>

          <motion.span
            className="coral-rule"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.32, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transformOrigin: 'left', display: 'block', width: '40px', height: '2px', background: '#F47F65', marginTop: '2rem' }}
            aria-hidden="true"
          />
        </div>

        {/* ── Pull-quote column — minimal, no bubble card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.22, duration: 0.6 }}
          style={{
            background: '#15324B',
            padding: 'clamp(2rem,5vw,3rem) clamp(2rem,5vw,3rem)',
            position: 'relative',
          }}
        >
          {/* Thin coral left border — editorial accent */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              width: '3px',
              background: '#F47F65',
            }}
          />

          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.1875rem, 2.5vw, 1.4375rem)',
            fontStyle: 'italic',
            color: '#FAF7F0',
            lineHeight: 1.65,
            margin: '0 0 1.75rem',
          }}>
            "Nice is one of those rare cities where beauty feels entirely effortless — as though the light conspired with the architecture just to make you stop."
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: 'rgba(221,243,243,0.5)',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            — Nice Escape Campaign Brief
          </p>
        </motion.div>
      </div>
    </section>
  )
}
