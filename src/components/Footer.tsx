export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#0F2335',
        padding: '4rem 2rem 2.5rem',
      }}
      role="contentinfo"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
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
                display: 'block',
                marginBottom: '1rem',
              }}
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            >
              Travel<span style={{ color: '#F47F65' }}>Nice</span>
            </a>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: 'rgba(250,247,240,0.55)',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: '260px',
            }}>
              Crafting thoughtful Mediterranean travel experiences for curious, culture-hungry travellers.
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer navigation">
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(221,243,243,0.5)',
              margin: '0 0 1rem 0',
            }}>
              Navigate
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {['#trip', '#experiences', '#itinerary', '#gallery', '#faq'].map((href, i) => {
                const labels = ['The Trip', 'Experiences', 'Itinerary', 'Gallery', 'FAQ']
                return (
                  <li key={href}>
                    <button
                      onClick={() => {
                        const target = document.querySelector(href)
                        if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'rgba(250,247,240,0.65)',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.9375rem',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => ((e.target as HTMLElement).style.color = '#DDF3F3')}
                      onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(250,247,240,0.65)')}
                    >
                      {labels[i]}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Destination */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(221,243,243,0.5)',
              margin: '0 0 1rem 0',
            }}>
              The Destination
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              color: 'rgba(250,247,240,0.65)',
              lineHeight: 1.7,
              margin: 0,
            }}>
              Nice, Côte d'Azur<br />
              Alpes-Maritimes, France<br />
              Mediterranean Coast
            </p>
          </div>

          {/* Legal */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(221,243,243,0.5)',
              margin: '0 0 1rem 0',
            }}>
              Important Notice
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8125rem',
              color: 'rgba(250,247,240,0.45)',
              lineHeight: 1.7,
              margin: 0,
            }}>
              Nice Escape is a campaign concept. No reservations are confirmed. 
              All prices, dates, inclusions and availability are indicative and to be confirmed. 
              No payment will be taken at this stage.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '1.75rem',
          borderTop: '1px solid rgba(221,243,243,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8125rem',
            color: 'rgba(250,247,240,0.35)',
            margin: 0,
          }}>
            © {year} TravelNice. Campaign Concept. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8125rem',
            color: 'rgba(250,247,240,0.35)',
            margin: 0,
          }}>
            ✦ Nice Escape — Sun, Culture &amp; Mediterranean Vibes
          </p>
        </div>
      </div>
    </footer>
  )
}
