import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'The Trip',     href: '#trip' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Itinerary',   href: '#itinerary' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'FAQ',         href: '#faq' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 76
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const firstMenuItemRef = useRef<HTMLButtonElement>(null)

  /* ── scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── focus first item when menu opens ── */
  useEffect(() => {
    if (menuOpen) {
      const t = setTimeout(() => firstMenuItemRef.current?.focus(), 80)
      return () => clearTimeout(t)
    }
  }, [menuOpen])

  /* ── close on Escape ── */
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [menuOpen])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    // Small delay so mobile menu close animation doesn't fight scroll
    setTimeout(() => scrollTo(href), menuOpen ? 350 : 0)
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          inset: '0 0 auto',
          zIndex: 60, /* above mobile menu overlay */
          transition: 'background 0.4s ease, box-shadow 0.4s ease',
          background: scrolled ? 'rgba(21,50,75,0.93)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(221,243,243,0.08)' : 'none',
        }}
        role="banner"
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 clamp(1.25rem, 5vw, 2rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* Wordmark */}
          <a
            href="#"
            aria-label="TravelNice — return to top"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.375rem',
              fontWeight: 700,
              color: '#FAF7F0',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              lineHeight: 1,
              flexShrink: 0,
            }}
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            Travel<span style={{ color: '#F47F65' }}>Nice</span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation">
            <ul
              className="nav-hidden-mobile"
              style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}
            >
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(250,247,240,0.8)',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      cursor: 'pointer',
                      padding: '0.375rem 0',
                      transition: 'color 0.18s',
                      textTransform: 'uppercase',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#F47F65')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,247,240,0.8)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* CTA — desktop only */}
            <button
              id="header-cta"
              className="nav-hidden-mobile"
              onClick={() => handleNav('#package')}
              style={{
                background: '#F47F65',
                color: '#FAF7F0',
                border: 'none',
                borderRadius: '2px',
                padding: '0.6rem 1.375rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'background 0.18s, opacity 0.18s',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              aria-label="Plan Your Escape — view package details"
            >
              Plan Your Escape
            </button>

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              className="nav-show-mobile"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(v => !v)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                flexShrink: 0,
              }}
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '24px',
                    height: '1.5px',
                    background: '#FAF7F0',
                    borderRadius: '1px',
                    transition: 'transform 0.28s ease, opacity 0.2s ease',
                    transformOrigin: 'center',
                    transform: menuOpen
                      ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                      : i === 1 ? 'scaleX(0)'
                      : 'translateY(-6.5px) rotate(-45deg)'
                      : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — z-index BELOW header so header overlays it */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 55, /* above page content, below header */
              background: '#0E2236',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '6rem clamp(1.25rem, 8vw, 4rem)',
              gap: '0',
            }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(221,243,243,0.45)',
              marginBottom: '2.5rem',
            }}>
              Navigate
            </p>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                ref={i === 0 ? firstMenuItemRef : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.3 }}
                onClick={() => handleNav(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FAF7F0',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  padding: '0.375rem 0',
                  marginBottom: '0.5rem',
                  textAlign: 'left',
                  transition: 'color 0.18s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F47F65')}
                onMouseLeave={e => (e.currentTarget.style.color = '#FAF7F0')}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.36, duration: 0.3 }}
              onClick={() => handleNav('#package')}
              style={{
                marginTop: '2.5rem',
                background: '#F47F65',
                color: '#FAF7F0',
                border: 'none',
                borderRadius: '2px',
                padding: '0.875rem 2rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Plan Your Escape
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
