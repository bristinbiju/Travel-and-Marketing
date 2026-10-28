import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'The Trip', href: '#trip' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Itinerary', href: '#itinerary' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
          background: scrolled ? 'rgba(21,50,75,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? '0 1px 24px rgba(21,50,75,0.18)' : 'none',
          padding: '0 2rem',
        }}
        role="banner"
      >
        <nav
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <a
            href="#"
            aria-label="TravelNice – go to top"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#FAF7F0',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              lineHeight: 1,
            }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            Travel<span style={{ color: '#F47F65' }}>Nice</span>
          </a>

          {/* Desktop nav */}
          <ul
            style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="hidden-mobile"
          >
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(250,247,240,0.85)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    cursor: 'pointer',
                    padding: '0.25rem 0',
                    transition: 'color 0.2s',
                    textTransform: 'uppercase',
                    position: 'relative',
                  }}
                  onMouseEnter={e => ((e.target as HTMLButtonElement).style.color = '#F47F65')}
                  onMouseLeave={e => ((e.target as HTMLButtonElement).style.color = 'rgba(250,247,240,0.85)')}
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              id="header-cta"
              onClick={() => handleNavClick('#package')}
              style={{
                background: '#F47F65',
                color: '#FAF7F0',
                border: 'none',
                borderRadius: '2rem',
                padding: '0.625rem 1.5rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.15s',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.target as HTMLButtonElement).style.background = '#e06650'
                ;(e.target as HTMLButtonElement).style.transform = 'scale(1.04)'
              }}
              onMouseLeave={e => {
                (e.target as HTMLButtonElement).style.background = '#F47F65'
                ;(e.target as HTMLButtonElement).style.transform = 'scale(1)'
              }}
              aria-label="Plan Your Escape – view package details"
              className="hidden-mobile"
            >
              Plan Your Escape
            </button>

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(v => !v)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
              }}
              className="show-mobile"
            >
              {[0,1,2].map(i => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '22px',
                    height: '2px',
                    background: '#FAF7F0',
                    borderRadius: '2px',
                    transition: 'transform 0.3s, opacity 0.3s',
                    transformOrigin: 'center',
                    transform: menuOpen
                      ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 1 ? 'scaleX(0)' : 'translateY(-7px) rotate(-45deg)'
                      : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>

        {/* Hidden on desktop styles via inline style block */}
        <style>{`
          @media (min-width: 768px) {
            .hidden-mobile { display: flex !important; }
            .show-mobile { display: none !important; }
          }
          @media (max-width: 767px) {
            .hidden-mobile { display: none !important; }
            .show-mobile { display: flex !important; }
          }
        `}</style>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 49,
              background: '#15324B',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FAF7F0',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '-0.01em',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleNavClick('#package')}
              style={{
                marginTop: '1rem',
                background: '#F47F65',
                color: '#FAF7F0',
                border: 'none',
                borderRadius: '2rem',
                padding: '0.875rem 2.5rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
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
