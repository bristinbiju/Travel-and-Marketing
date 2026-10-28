import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      aria-label="Final call to action – register interest"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#15324B',
        padding: '8rem 2rem',
        textAlign: 'center',
      }}
    >
      {/* Background decoration */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '-6rem',
        left: '-6rem',
        width: '28rem',
        height: '28rem',
        borderRadius: '50%',
        background: 'rgba(22,138,173,0.08)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute',
        bottom: '-8rem',
        right: '-6rem',
        width: '32rem',
        height: '32rem',
        borderRadius: '50%',
        background: 'rgba(244,127,101,0.06)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
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
            color: '#DDF3F3',
            opacity: 0.65,
            margin: '0 0 1.25rem 0',
          }}
        >
          Nice Escape · Campaign Concept
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            fontWeight: 700,
            color: '#FAF7F0',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            margin: '0 0 1.5rem 0',
          }}
        >
          Your Riviera moment<br />
          <em style={{ fontStyle: 'italic', color: '#F47F65' }}>is waiting.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: 'rgba(250,247,240,0.72)',
            lineHeight: 1.8,
            maxWidth: '480px',
            margin: '0 auto 1rem auto',
          }}
        >
          Nice Escape is a proposed campaign. Dates, pricing and availability are not yet confirmed. 
          Register your interest to be the first to know when this trip launches.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8125rem',
            color: 'rgba(221,243,243,0.55)',
            marginBottom: '2.5rem',
          }}
        >
          No booking will be confirmed. No payment will be taken at this stage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.65 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <button
            id="final-cta-btn"
            style={{
              background: '#F47F65',
              color: '#FAF7F0',
              border: 'none',
              borderRadius: '2rem',
              padding: '1.125rem 2.75rem',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
              boxShadow: '0 6px 32px rgba(244,127,101,0.45)',
            }}
            onMouseEnter={e => {
              const btn = e.currentTarget
              btn.style.background = '#e06650'
              btn.style.transform = 'scale(1.05)'
              btn.style.boxShadow = '0 8px 40px rgba(244,127,101,0.6)'
            }}
            onMouseLeave={e => {
              const btn = e.currentTarget
              btn.style.background = '#F47F65'
              btn.style.transform = 'scale(1)'
              btn.style.boxShadow = '0 6px 32px rgba(244,127,101,0.45)'
            }}
            aria-label="Register your interest in Nice Escape"
          >
            Register My Interest
          </button>

          <button
            style={{
              background: 'transparent',
              color: 'rgba(250,247,240,0.7)',
              border: '1.5px solid rgba(250,247,240,0.25)',
              borderRadius: '2rem',
              padding: '1.125rem 2.75rem',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              const btn = e.currentTarget
              btn.style.borderColor = '#DDF3F3'
              btn.style.color = '#DDF3F3'
            }}
            onMouseLeave={e => {
              const btn = e.currentTarget
              btn.style.borderColor = 'rgba(250,247,240,0.25)'
              btn.style.color = 'rgba(250,247,240,0.7)'
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            Back to Top
          </button>
        </motion.div>
      </div>
    </section>
  )
}
