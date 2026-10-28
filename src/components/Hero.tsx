import { useState } from 'react'
import { motion } from 'framer-motion'
import VideoModal from './VideoModal'

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  const handleExplore = () => {
    const target = document.querySelector('#trip')
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    const target = document.querySelector('#trip')
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <section
        id="hero"
        aria-label="Hero – Nice, Your Way"
        style={{
          position: 'relative',
          height: '100svh',
          minHeight: '600px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '6rem',
        }}
      >
        {/* Background image with parallax-like scale */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'absolute',
            inset: '-5%',
            backgroundImage: 'url(/images/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            willChange: 'transform',
          }}
          aria-hidden="true"
        />

        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(21,50,75,0.28) 0%, rgba(21,50,75,0.12) 40%, rgba(21,50,75,0.72) 80%, rgba(21,50,75,0.92) 100%)',
          }}
        />

        {/* Campaign label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{
            position: 'absolute',
            top: '6.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(244,127,101,0.15)',
            border: '1px solid rgba(244,127,101,0.5)',
            borderRadius: '2rem',
            padding: '0.375rem 1.25rem',
            color: '#F47F65',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
          role="note"
          aria-label="This is a campaign concept"
        >
          ✦ Campaign Concept — Dates & Pricing TBC ✦
        </motion.div>

        {/* Cinematic play button — top-right of hero */}
        <motion.button
          id="hero-play-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={() => setVideoOpen(true)}
          aria-label="Watch the Nice Escape cinematic video"
          style={{
            position: 'absolute',
            top: '50%',
            right: '5%',
            transform: 'translateY(-50%)',
            background: 'rgba(250,247,240,0.1)',
            border: '1.5px solid rgba(250,247,240,0.35)',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(12px)',
            transition: 'background 0.25s, border-color 0.25s, transform 0.25s',
            gap: '0.4rem',
            zIndex: 2,
          }}
          onMouseEnter={e => {
            const btn = e.currentTarget
            btn.style.background = 'rgba(244,127,101,0.25)'
            btn.style.borderColor = '#F47F65'
            btn.style.transform = 'translateY(-50%) scale(1.1)'
          }}
          onMouseLeave={e => {
            const btn = e.currentTarget
            btn.style.background = 'rgba(250,247,240,0.1)'
            btn.style.borderColor = 'rgba(250,247,240,0.35)'
            btn.style.transform = 'translateY(-50%) scale(1)'
          }}
        >
          {/* Play triangle */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="#FAF7F0"
            aria-hidden="true"
            style={{ marginLeft: '3px' }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.5625rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(250,247,240,0.8)',
            lineHeight: 1,
          }}>
            Watch
          </span>
        </motion.button>

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#DDF3F3',
              marginBottom: '1rem',
              margin: '0 0 1rem 0',
            }}
          >
            Nice Escape · French Riviera
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              fontWeight: 700,
              color: '#FAF7F0',
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              margin: '0 0 1.5rem 0',
            }}
          >
            NICE,<br />
            <em style={{ fontStyle: 'italic', color: '#DDF3F3' }}>YOUR WAY.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#DDF3F3',
              margin: '0 0 1rem 0',
            }}
          >
            Sun, culture & French Riviera vibes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.7 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 400,
              color: 'rgba(250,247,240,0.8)',
              maxWidth: '480px',
              lineHeight: 1.7,
              margin: '0 0 2.5rem 0',
            }}
          >
            Three days. Endless light. A city that lives between the mountains 
            and the sea — bold, beautiful, entirely yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <button
              id="hero-cta"
              onClick={handleExplore}
              style={{
                background: '#F47F65',
                color: '#FAF7F0',
                border: 'none',
                borderRadius: '2rem',
                padding: '1rem 2.25rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
                boxShadow: '0 4px 24px rgba(244,127,101,0.4)',
              }}
              onMouseEnter={e => {
                const btn = e.currentTarget
                btn.style.background = '#e06650'
                btn.style.transform = 'scale(1.04)'
                btn.style.boxShadow = '0 6px 32px rgba(244,127,101,0.55)'
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget
                btn.style.background = '#F47F65'
                btn.style.transform = 'scale(1)'
                btn.style.boxShadow = '0 4px 24px rgba(244,127,101,0.4)'
              }}
              aria-label="Explore the Trip – jump to trip details"
            >
              Explore the Trip
            </button>

            {/* Watch Video inline text button */}
            <button
              onClick={() => setVideoOpen(true)}
              style={{
                background: 'transparent',
                color: '#FAF7F0',
                border: '1.5px solid rgba(250,247,240,0.5)',
                borderRadius: '2rem',
                padding: '1rem 2.25rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseEnter={e => {
                const btn = e.currentTarget
                btn.style.borderColor = '#F47F65'
                btn.style.color = '#F47F65'
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget
                btn.style.borderColor = 'rgba(250,247,240,0.5)'
                btn.style.color = '#FAF7F0'
              }}
              aria-label="Watch the Nice Escape video"
              id="hero-watch-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch the Story
            </button>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          onClick={handleScroll}
          aria-label="Scroll down"
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'rgba(250,247,240,0.6)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(250,247,240,0.6), transparent)',
            }}
          />
        </motion.button>
      </section>

      {/* Cinematic video modal */}
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  )
}
