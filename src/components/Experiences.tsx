import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { delay, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
})

const experiences = [
  {
    id: 'vieux-nice',
    title: 'Vieux Nice & Cours Saleya',
    category: 'Culture & Markets',
    num: '01',
    description:
      'Lose yourself in baroque alleyways ablaze with colour. Cours Saleya hosts one of the south of France\'s finest flower and produce markets each morning — a sensory world of lavender, citrus and local charcuterie.',
    image: '/images/vieux-nice.jpg',
    objectPosition: 'center 60%',
  },
  {
    id: 'promenade',
    title: 'Promenade des Anglais',
    category: 'Coast & Beach',
    num: '02',
    description:
      'The world\'s most legendary seafront walk stretches 7 km along the Baie des Anges. Hire a bike at dawn, take an aperitif at dusk on the iconic blue chairs, or simply let the rhythm of the waves slow everything down.',
    image: '/images/promenade.jpg',
    objectPosition: 'center 55%',
  },
  {
    id: 'castle-hill',
    title: 'Colline du Château',
    category: 'Views & Gardens',
    num: '03',
    description:
      'Climb or take the lift to Nice\'s ancient hilltop park for sweeping panoramas of the bay, rooftops and distant Alps. Mediterranean gardens, a cascading waterfall and the most cinematic sunset in the city await.',
    image: '/images/castle-hill.jpg',
    objectPosition: 'center 40%',
  },
  {
    id: 'food',
    title: 'Local Food & Markets',
    category: 'Gastronomy',
    num: '04',
    description:
      'Niçoise cuisine is a world unto itself. Try socca straight from the wood-fired pan, a pan bagnat on the beach, or a slow lunch of salade niçoise. The city\'s markets and wine bars are a reason to visit in themselves.',
    image: '/images/food-market.jpg',
    objectPosition: 'center 50%',
  },
]

export default function Experiences() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="experiences"
      ref={ref}
      aria-label="Experiences in Nice"
      style={{ background: '#FAF7F0', padding: 'clamp(4rem,8vw,8rem) 0' }}
    >
      <div className="section-inner">

        {/* ── Section header ── */}
        <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)', maxWidth: '600px' }}>
          <motion.p className="eyebrow" {...fadeUp(0)}>What Awaits You</motion.p>
          <motion.h2
            className="section-title"
            {...fadeUp(0.08)}
          >
            Four experiences that<br />
            <em className="accent-italic">define Nice.</em>
          </motion.h2>
          <motion.p
            {...fadeUp(0.16)}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: '#15324B',
              lineHeight: 1.8,
              opacity: 0.7,
              margin: 0,
            }}
          >
            Each of these moments is a story. Together, they are the soul of your Nice escape.
          </motion.p>
        </div>

        {/* ── Editorial grid — alternating layout ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0
            return (
              <motion.article
                key={exp.id}
                id={`experience-${exp.id}`}
                aria-label={exp.title}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.08 + i * 0.1, duration: 0.6 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  minHeight: 'clamp(320px, 40vw, 460px)',
                  borderTop: '1px solid rgba(21,50,75,0.08)',
                }}
              >
                {/* Image — flips side on even rows */}
                <div
                  style={{
                    order: isEven ? 0 : 1,
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '280px',
                  }}
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: exp.objectPosition,
                      transition: 'transform 0.7s ease',
                    }}
                    onMouseEnter={e => ((e.currentTarget).style.transform = 'scale(1.03)')}
                    onMouseLeave={e => ((e.currentTarget).style.transform = 'scale(1)')}
                  />
                  {/* Number overlay */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      left: isEven ? '1.25rem' : 'auto',
                      right: isEven ? 'auto' : '1.25rem',
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '4rem',
                      fontWeight: 700,
                      color: 'rgba(250,247,240,0.12)',
                      lineHeight: 1,
                      userSelect: 'none',
                    }}
                  >
                    {exp.num}
                  </span>
                </div>

                {/* Text */}
                <div
                  style={{
                    order: isEven ? 1 : 0,
                    padding: 'clamp(2rem, 5vw, 3.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: i % 4 === 2 ? '#15324B' : '#FAF7F0',
                  }}
                >
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: i % 4 === 2 ? 'rgba(221,243,243,0.6)' : '#168AAD',
                    margin: '0 0 0.75rem',
                  }}>
                    {exp.num} — {exp.category}
                  </p>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                    fontWeight: 700,
                    color: i % 4 === 2 ? '#FAF7F0' : '#15324B',
                    lineHeight: 1.15,
                    letterSpacing: '-0.015em',
                    margin: '0 0 1.25rem',
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    color: i % 4 === 2 ? 'rgba(250,247,240,0.7)' : 'rgba(21,50,75,0.72)',
                    lineHeight: 1.8,
                    margin: 0,
                    maxWidth: '44ch',
                  }}>
                    {exp.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
