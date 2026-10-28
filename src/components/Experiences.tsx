import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    id: 'vieux-nice',
    title: 'Vieux Nice & Cours Saleya',
    category: 'Culture & Markets',
    description:
      'Lose yourself in baroque alleyways ablaze with colour. Cours Saleya hosts one of the south of France\'s finest flower and produce markets each morning — a sensory world of lavender, citrus and local charcuterie.',
    image: '/images/vieux-nice.jpg',
    tag: 'Must Do',
    tagColor: '#F47F65',
  },
  {
    id: 'promenade',
    title: 'Promenade des Anglais',
    category: 'Coast & Beach',
    description:
      'The world\'s most legendary seafront walk stretches 7km along the Baie des Anges. Hire a bike at dawn, take an aperitif at dusk on the iconic blue chairs, or simply let the rhythm of the waves slow everything down.',
    image: '/images/promenade.jpg',
    tag: 'Iconic',
    tagColor: '#168AAD',
  },
  {
    id: 'castle-hill',
    title: 'Castle Hill (Colline du Château)',
    category: 'Views & Gardens',
    description:
      'Climb or take the lift to Nice\'s ancient hilltop park for sweeping panoramas of the bay, rooftops and distant Alps. Mediterranean gardens, a cascading waterfall and the most cinematic sunset in the city await.',
    image: '/images/castle-hill.jpg',
    tag: 'Unmissable',
    tagColor: '#15324B',
  },
  {
    id: 'food',
    title: 'Local Food & Markets',
    category: 'Gastronomy',
    description:
      'Niçoise cuisine is a world unto itself. Try socca straight from the wood-fired pan, a pan bagnat on the beach, or a slow lunch of salade niçoise. The city\'s markets and wine bars are a reason to visit in themselves.',
    image: '/images/food-market.jpg',
    tag: 'Flavour',
    tagColor: '#F47F65',
  },
]

export default function Experiences() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experiences"
      ref={ref}
      aria-label="Experiences in Nice"
      style={{
        background: '#FAF7F0',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem', maxWidth: '640px' }}>
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
            What Awaits You
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
              margin: '0 0 1.25rem 0',
            }}
          >
            Four experiences that<br />
            <em style={{ fontStyle: 'italic', color: '#F47F65' }}>define Nice.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: '#15324B',
              lineHeight: 1.75,
              opacity: 0.75,
              margin: 0,
            }}
          >
            Each of these moments is a story. Together, they are the soul of your Nice escape.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              id={`experience-${exp.id}`}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.65 }}
              aria-label={exp.title}
              style={{
                background: '#fff',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                boxShadow: '0 2px 24px rgba(21,50,75,0.07)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-6px)'
                el.style.boxShadow = '0 12px 48px rgba(21,50,75,0.14)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 2px 24px rgba(21,50,75,0.07)'
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
                  onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                />
                {/* Tag */}
                <span
                  aria-label={`Category: ${exp.tag}`}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: exp.tagColor,
                    color: '#FAF7F0',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '2rem',
                  }}
                >
                  {exp.tag}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '1.75rem' }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#168AAD',
                  margin: '0 0 0.5rem 0',
                }}>
                  {exp.category}
                </p>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#15324B',
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  margin: '0 0 1rem 0',
                }}>
                  {exp.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  color: '#15324B',
                  lineHeight: 1.7,
                  opacity: 0.75,
                  margin: 0,
                }}>
                  {exp.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
