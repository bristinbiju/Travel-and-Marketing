export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' })
  }

  const navItems = [
    { label: 'The Trip',     href: '#trip' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Itinerary',   href: '#itinerary' },
    { label: 'Gallery',     href: '#gallery' },
    { label: 'FAQ',         href: '#faq' },
  ]

  return (
    <footer
      style={{ background: '#0A1C2B', padding: 'clamp(3.5rem,7vw,5rem) 0 clamp(1.5rem,3vw,2.5rem)' }}
      role="contentinfo"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem,5vw,2rem)',
        }}
      >
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,200px), 1fr))',
          gap: 'clamp(2rem,5vw,3.5rem)',
          marginBottom: 'clamp(2.5rem,5vw,3.5rem)',
        }}>

          {/* Brand */}
          <div>
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
                display: 'block',
                marginBottom: '1rem',
              }}
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            >
              Travel<span style={{ color: '#F47F65' }}>Nice</span>
            </a>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: 'rgba(250,247,240,0.45)',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: '26ch',
            }}>
              Crafting thoughtful Mediterranean travel experiences for curious, culture-hungry travellers.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(221,243,243,0.35)',
              margin: '0 0 1rem',
            }}>
              Navigate
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {navItems.map(item => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(250,247,240,0.55)',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9375rem',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.18s',
                      textAlign: 'left',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#DDF3F3')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,247,240,0.55)')}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Destination */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(221,243,243,0.35)',
              margin: '0 0 1rem',
            }}>
              The Destination
            </p>
            <address style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              color: 'rgba(250,247,240,0.55)',
              lineHeight: 1.8,
              fontStyle: 'normal',
            }}>
              Nice, Côte d'Azur<br />
              Alpes-Maritimes, France<br />
              Mediterranean Coast
            </address>
          </div>

          {/* Legal */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(221,243,243,0.35)',
              margin: '0 0 1rem',
            }}>
              Important Notice
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8125rem',
              color: 'rgba(250,247,240,0.38)',
              lineHeight: 1.7,
              margin: 0,
            }}>
              Nice Escape is a campaign concept. No reservations are confirmed. All prices, dates, inclusions and availability are indicative and to be confirmed. No payment will be taken at this stage.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(221,243,243,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(250,247,240,0.28)',
            margin: 0,
          }}>
            © {year} TravelNice. Campaign Concept. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(250,247,240,0.28)',
            margin: 0,
          }}>
            Nice Escape — Sun, Culture & Mediterranean Vibes
          </p>
        </div>
      </div>
    </footer>
  )
}
