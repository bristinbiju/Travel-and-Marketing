import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/*
  Gallery layout: two rows of images.
  Row 1: wide (8-col) + narrow (4-col)
  Row 2: narrow (4-col) + wide (8-col)
  Row 3: full-width (12-col) — food spread
  All heights are aspect-ratio driven (not fixed px) to prevent distortion.
*/
const photos = [
  {
    src: '/images/hero.jpg',
    alt: 'Aerial view of Nice and the Mediterranean coastline',
    col: 8,
    aspectRatio: '16/9',
  },
  {
    src: '/images/vieux-nice.jpg',
    alt: 'Cours Saleya flower market in Vieux Nice',
    col: 4,
    aspectRatio: '4/5',
  },
  {
    src: '/images/promenade.jpg',
    alt: 'Promenade des Anglais at golden hour',
    col: 4,
    aspectRatio: '4/5',
  },
  {
    src: '/images/castle-hill.jpg',
    alt: 'Panoramic view from Castle Hill over Nice bay',
    col: 8,
    aspectRatio: '16/9',
  },
  {
    src: '/images/food-market.jpg',
    alt: 'Authentic Niçoise food spread at local market',
    col: 12,
    aspectRatio: '21/9',
  },
]

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="gallery"
      ref={ref}
      aria-label="Photo gallery of Nice"
      style={{ background: '#FAF7F0', padding: 'clamp(4rem,8vw,8rem) 0' }}
    >
      <div className="section-inner">

        {/* Header */}
        <div style={{ marginBottom: 'clamp(2rem,4vw,3rem)', maxWidth: '480px' }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            Visual Journal
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.5 }}
          >
            Nice through<br />
            <em className="accent-italic">the lens.</em>
          </motion.h2>
        </div>

        {/* Grid — CSS grid with aspect-ratio-driven rows, no fixed height */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '0.75rem',
          }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.09, duration: 0.55 }}
              style={{
                gridColumn: `span ${photo.col}`,
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: photo.aspectRatio,
                /* On mobile, collapse all to full width */
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.65s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.035)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              {/* Subtle vignette */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(21,50,75,0.28) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: all cells go full width */}
        <style>{`
          @media (max-width: 720px) {
            #gallery [style*="grid-column"] { grid-column: 1 / -1 !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
