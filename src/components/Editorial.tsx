import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Editorial() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      aria-label="Editorial introduction"
      style={{
        background: '#FAF7F0',
        padding: '7rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Text column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#168AAD',
              marginBottom: '1.25rem',
              margin: '0 0 1.25rem 0',
            }}
          >
            Why Nice?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#15324B',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 1.75rem 0',
            }}
          >
            A city that refuses<br />
            <em style={{ fontStyle: 'italic', color: '#168AAD' }}>to be ordinary.</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 400,
              color: '#15324B',
              lineHeight: 1.8,
              margin: 0,
              opacity: 0.85,
            }}>
              Nice sits at the meeting point of two worlds — the raw drama of the 
              Alpes-Maritimes and the languid shimmer of the Mediterranean. It is a city 
              with the soul of a sun-bleached painting and the energy of a place fully 
              in love with being alive.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 400,
              color: '#15324B',
              lineHeight: 1.8,
              margin: 0,
              opacity: 0.85,
            }}>
              Three days here isn't a holiday — it's a beginning. A first taste 
              of baroque alleyways, salt-heavy air, colours that shouldn't exist in 
              real life, and a pace that makes you forget you were ever in a hurry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              width: '60px',
              height: '3px',
              background: '#F47F65',
              borderRadius: '2px',
              marginTop: '2rem',
              transformOrigin: 'left',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Decorative quote column */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            background: '#15324B',
            borderRadius: '1.5rem',
            padding: '3rem 2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-2rem',
              right: '-2rem',
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              background: 'rgba(22,138,173,0.15)',
            }}
          />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '6rem',
              color: '#F47F65',
              lineHeight: 0.8,
              display: 'block',
              marginBottom: '1.5rem',
              opacity: 0.6,
            }}
            aria-hidden="true"
          >"</span>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.375rem',
            fontStyle: 'italic',
            color: '#FAF7F0',
            lineHeight: 1.6,
            margin: '0 0 2rem 0',
          }}>
            Nice is one of those rare cities where beauty feels entirely effortless — 
            as though the light conspired with the architecture just to make you stop.
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8125rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: '#DDF3F3',
            textTransform: 'uppercase',
            margin: 0,
            opacity: 0.7,
          }}>
            — Nice Escape Campaign Brief
          </p>
        </motion.div>
      </div>
    </section>
  )
}
