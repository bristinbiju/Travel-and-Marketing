import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      aria-label="Register your interest in Nice Escape"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#15324B',
        padding: 'clamp(5rem,10vw,9rem) 0',
        textAlign: 'center',
      }}
    >
      {/* Decorative background circles — restrained, performance-safe */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-8rem', left: '-6rem',
        width: '28rem', height: '28rem', borderRadius: '50%',
        background: 'rgba(22,138,173,0.07)', pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-9rem', right: '-5rem',
        width: '32rem', height: '32rem', borderRadius: '50%',
        background: 'rgba(244,127,101,0.05)', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto', padding: '0 clamp(1.25rem,5vw,2rem)' }}>

        <motion.p
          className="eyebrow eyebrow--light"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >
          Nice Escape · Campaign Concept
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.55 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
            fontWeight: 700,
            color: '#FAF7F0',
            lineHeight: 1.0,
            letterSpacing: '-0.025em',
            margin: '0 0 clamp(1rem,3vw,1.5rem)',
          }}
        >
          Your Riviera moment<br />
          <em className="accent-italic">is waiting.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.5 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
            color: 'rgba(250,247,240,0.65)',
            lineHeight: 1.8,
            margin: '0 auto clamp(0.75rem,2vw,1rem)',
            maxWidth: '46ch',
          }}
        >
          Nice Escape is a proposed campaign. Dates, pricing and availability are not yet confirmed.
          Register your interest to be the first to know when this trip launches.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.26, duration: 0.45 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(221,243,243,0.4)',
            margin: '0 0 clamp(2rem,4vw,2.75rem)',
            letterSpacing: '0.02em',
          }}
        >
          No booking will be confirmed. No payment will be taken at this stage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            id="final-cta-btn"
            style={{
              background: '#F47F65',
              color: '#FAF7F0',
              border: 'none',
              borderRadius: '2px',
              padding: 'clamp(0.875rem,2vw,1.125rem) clamp(2rem,4vw,2.75rem)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'opacity 0.18s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.84')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            aria-label="Register your interest in Nice Escape"
          >
            Register My Interest
          </button>

          <button
            style={{
              background: 'transparent',
              color: 'rgba(250,247,240,0.65)',
              border: '1px solid rgba(250,247,240,0.2)',
              borderRadius: '2px',
              padding: 'clamp(0.875rem,2vw,1.125rem) clamp(2rem,4vw,2.75rem)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'border-color 0.18s, color 0.18s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(221,243,243,0.4)'
              e.currentTarget.style.color = '#DDF3F3'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(250,247,240,0.2)'
              e.currentTarget.style.color = 'rgba(250,247,240,0.65)'
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top of page"
          >
            Back to Top
          </button>
        </motion.div>
      </div>
    </section>
  )
}
