import { useState } from 'react'
import { motion } from 'framer-motion'
import VideoModal from './VideoModal'

function scrollTo(href: string, offset = 76) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section
        id="hero"
        aria-label="Hero — Nice, Your Way"
        style={{
          position: 'relative',
          height: '100svh',
          minHeight: '580px',
          maxHeight: '1080px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        {/* ── Background image: Ken Burns scale-in ── */}
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: '-4%',
            backgroundImage: 'url(/images/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 38%',
            willChange: 'transform',
          }}
          aria-hidden="true"
        />

        {/* ── Gradient overlay: lighter top, heavier bottom for legibility ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(21,50,75,0.15) 0%, rgba(21,50,75,0.05) 35%, rgba(21,50,75,0.55) 72%, rgba(21,50,75,0.88) 100%)',
          }}
        />

        {/* ── Campaign notice (top-centre) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          role="note"
          aria-label="Campaign concept notice"
          style={{
            position: 'absolute',
            top: '5.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.625rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(221,243,243,0.7)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          Campaign Concept · Dates & Pricing TBC
        </motion.div>

        {/* ── Floating play button (right side, vertically centred) ── */}
        <motion.button
          id="hero-play-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
          onClick={() => setVideoOpen(true)}
          aria-label="Watch the Nice Escape cinematic video"
          style={{
            position: 'absolute',
            /* anchor to right, vertically centred in lower 2/3 of hero */
            bottom: 'clamp(5rem, 18vh, 12rem)',
            right: 'clamp(1.5rem, 5vw, 4rem)',
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'rgba(250,247,240,0.08)',
            border: '1px solid rgba(250,247,240,0.3)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            gap: '0.3rem',
            transition: 'background 0.22s, border-color 0.22s',
            zIndex: 2,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(244,127,101,0.2)'
            e.currentTarget.style.borderColor = 'rgba(244,127,101,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(250,247,240,0.08)'
            e.currentTarget.style.borderColor = 'rgba(250,247,240,0.3)'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FAF7F0" aria-hidden="true" style={{ marginLeft: '2px' }}>
            <path d="M8 5v14l11-7z" />
          </svg>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.5rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(250,247,240,0.75)',
          }}>
            Watch
          </span>
        </motion.button>

        {/* ── Main hero content ── */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: 'clamp(1.25rem,5vw,2rem)',
            paddingBottom: 'clamp(3rem,7vw,6rem)',
          }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(221,243,243,0.8)',
              margin: '0 0 1.25rem',
            }}
          >
            Nice Escape · French Riviera
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3.25rem, 9vw, 8rem)',
              fontWeight: 700,
              color: '#FAF7F0',
              lineHeight: 0.9,
              letterSpacing: '-0.025em',
              margin: '0 0 clamp(1rem,3vw,1.75rem)',
            }}
          >
            NICE,
            <br />
            <em style={{ fontStyle: 'italic', color: '#DDF3F3' }}>YOUR WAY.</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.18, duration: 0.55 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1rem, 2.2vw, 1.375rem)',
              fontStyle: 'italic',
              color: 'rgba(221,243,243,0.9)',
              margin: '0 0 0.75rem',
            }}
          >
            Sun, culture & French Riviera vibes.
          </motion.p>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)',
              color: 'rgba(250,247,240,0.72)',
              maxWidth: '42ch',
              lineHeight: 1.75,
              margin: '0 0 clamp(1.75rem,4vw,2.75rem)',
            }}
          >
            Three days. Endless light. A city that lives between the mountains
            and the sea — bold, beautiful, entirely yours.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.5 }}
            style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            {/* Primary */}
            <button
              id="hero-cta"
              onClick={() => scrollTo('#trip')}
              style={{
                background: '#F47F65',
                color: '#FAF7F0',
                border: 'none',
                borderRadius: '2px',
                padding: 'clamp(0.75rem,2vw,1rem) clamp(1.5rem,3vw,2.25rem)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'opacity 0.18s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              aria-label="Explore the Trip"
            >
              Explore the Trip
            </button>

            {/* Watch the story */}
            <button
              id="hero-watch-btn"
              onClick={() => setVideoOpen(true)}
              style={{
                background: 'transparent',
                color: 'rgba(250,247,240,0.82)',
                border: '1px solid rgba(250,247,240,0.3)',
                borderRadius: '2px',
                padding: 'clamp(0.75rem,2vw,1rem) clamp(1.5rem,3vw,2.25rem)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'border-color 0.18s, color 0.18s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(244,127,101,0.6)'
                e.currentTarget.style.color = '#FAF7F0'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(250,247,240,0.3)'
                e.currentTarget.style.color = 'rgba(250,247,240,0.82)'
              }}
              aria-label="Watch the Nice Escape video"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch the Story
            </button>
          </motion.div>
        </div>

        {/* ── Scroll cue ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.7 }}
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.375rem',
            pointerEvents: 'none',
          }}
        >
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.5625rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(250,247,240,0.45)',
          }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '36px',
              background: 'linear-gradient(to bottom, rgba(250,247,240,0.5), transparent)',
            }}
          />
        </motion.div>
      </section>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  )
}
