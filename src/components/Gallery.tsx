import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const photos = [
  { src: '/images/hero.jpg', alt: 'Aerial view of Nice and the Mediterranean coastline', colSpan: 8, rowSpan: 2 },
  { src: '/images/vieux-nice.jpg', alt: 'Cours Saleya flower market in Vieux Nice', colSpan: 4, rowSpan: 2 },
  { src: '/images/promenade.jpg', alt: 'Promenade des Anglais at golden hour', colSpan: 4, rowSpan: 2 },
  { src: '/images/castle-hill.jpg', alt: 'Panoramic view from Castle Hill over Nice bay', colSpan: 8, rowSpan: 2 },
  { src: '/images/food-market.jpg', alt: 'Authentic Niçoise food spread at Marché Saleya', colSpan: 12, rowSpan: 2 },
]

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="gallery"
      ref={ref}
      aria-label="Photo gallery of Nice"
      style={{
        background: '#FAF7F0',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '480px' }}>
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
              color: '#168AAD',
              margin: '0 0 1rem 0',
            }}
          >
            Visual Journal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#15324B',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Nice through<br />
            <em style={{ fontStyle: 'italic', color: '#F47F65' }}>the lens.</em>
          </motion.h2>
        </div>

        {/* Responsive grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1rem',
          }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                gridColumn: `span ${photo.colSpan}`,
                height: '280px',
                borderRadius: '1rem',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.55s ease',
                  display: 'block',
                }}
                onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.04)')}
                onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 55%, rgba(21,50,75,0.35) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile override */}
        <style>{`
          @media (max-width: 768px) {
            #gallery [style*="grid-column"] {
              grid-column: span 12 !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
