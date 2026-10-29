import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const days = [
  {
    id: 'day-1',
    label: 'Day 1',
    title: 'Arrive & Discover Vieux Nice',
    subtitle: 'Afternoon arrival · Old Town immersion · Evening on the waterfront',
    items: [
      { time: 'Afternoon',      icon: '✈', heading: 'Arrival & Check-in',         body: 'Arrive at Nice Côte d\'Azur Airport (NCE) and make your way to your hotel in or near the Old Town. Freshen up and let the pace of the city wash over you.' },
      { time: 'Late Afternoon', icon: '⬡', heading: 'Explore Vieux Nice',          body: 'Wander the baroque alleyways of Vieux Nice — past Palais Lascaris, ornate chapels and sun-bleached façades in every shade of amber and terracotta. No map required.' },
      { time: 'Evening',        icon: '◇', heading: 'Aperitivo on Cours Saleya',   body: 'As the day cools, settle into a café or wine bar on Cours Saleya for a glass of Côtes de Provence rosé. Watch the square transform as evening light turns the buildings gold.' },
      { time: 'Night',          icon: '▷', heading: 'Dinner in the Old Town',      body: 'Try a traditional niçoise restaurant for socca, pissaladière and fresh pasta with local olive oil. The neighbourhood has no shortage of excellent small plates.' },
    ],
  },
  {
    id: 'day-2',
    label: 'Day 2',
    title: 'The Promenade & Castle Hill',
    subtitle: 'Morning walk · Market breakfast · Hilltop panorama · Baie des Anges sunset',
    items: [
      { time: 'Early Morning',  icon: '◎', heading: 'Dawn Walk on the Promenade',    body: 'Set an alarm worth keeping. The Promenade des Anglais at sunrise — empty, golden and softly lit — is a genuinely remarkable way to begin a day.' },
      { time: 'Morning',        icon: '⬡', heading: 'Cours Saleya Flower Market',    body: 'The morning market in Cours Saleya bursts into colour by 7am. Pick up fresh socca, pick flowers, taste olive oil. This is Nice at its most alive.' },
      { time: 'Afternoon',      icon: '△', heading: 'Castle Hill (Colline du Château)', body: 'Take the lift or the 213 steps for panoramic views of the bay, the port and the rooftops of Vieux Nice. The gardens are beautifully kept and the waterfall is a wonderful surprise.' },
      { time: 'Sunset',         icon: '◇', heading: 'Sunset on the Promenade',       body: 'Return to the seafront for the golden hour. Find a blue chair, watch the sun fall behind the Esterel mountains and remind yourself this is real.' },
    ],
  },
  {
    id: 'day-3',
    label: 'Day 3',
    title: 'Art, Markets & Departure',
    subtitle: 'Museum morning · Cimiez neighbourhood · Final Riviera lunch · Departure',
    items: [
      { time: 'Morning',        icon: '◎', heading: 'Matisse Museum or MAMAC',       body: 'Nice has a quietly excellent museum scene. The Matisse Museum in the Cimiez neighbourhood is surrounded by ancient Roman ruins. MAMAC covers modern and contemporary French art.' },
      { time: 'Mid-Morning',    icon: '⬡', heading: 'Cimiez & Olive Gardens',        body: 'Cimiez is Nice\'s quiet hilltop neighbourhood — a world away from the seafront bustle. Walk through the gardens, visit the Franciscan monastery and take in the city from a different angle.' },
      { time: 'Lunch',          icon: '▷', heading: 'A Proper Niçoise Lunch',        body: 'Your last meal in Nice deserves care. Seek out a salade niçoise made with real tuna, barely cooked eggs and proper anchovies — not the tourist version. A final carafe of local wine.' },
      { time: 'Departure',      icon: '✈', heading: 'Au Revoir, Nice',               body: 'Transfer to Nice Côte d\'Azur Airport. Departure flights available throughout the afternoon and evening. Three days will feel like not enough — that\'s by design.' },
    ],
  },
]

export default function Itinerary() {
  const [activeDay, setActiveDay] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="itinerary"
      ref={ref}
      aria-label="3-day itinerary"
      style={{ background: '#15324B', padding: 'clamp(4rem,8vw,8rem) 0' }}
    >
      <div className="section-inner">

        {/* ── Header ── */}
        <div style={{ marginBottom: 'clamp(2rem,5vw,3.5rem)' }}>
          <motion.p
            className="eyebrow eyebrow--light"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Your Journey
          </motion.p>
          <motion.h2
            className="section-title section-title--light"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.55 }}
          >
            Three days in<br />
            <em className="accent-italic">the light of Nice.</em>
          </motion.h2>
        </div>

        {/* ── Day selector ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.18, duration: 0.5 }}
          role="tablist"
          aria-label="Itinerary days"
          style={{ display: 'flex', gap: '0', marginBottom: '0', borderBottom: '1px solid rgba(221,243,243,0.1)' }}
        >
          {days.map((day, i) => (
            <button
              key={day.id}
              id={`tab-${day.id}`}
              role="tab"
              aria-selected={activeDay === i}
              aria-controls={`panel-${day.id}`}
              onClick={() => setActiveDay(i)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeDay === i ? '2px solid #F47F65' : '2px solid transparent',
                marginBottom: '-1px',
                color: activeDay === i ? '#FAF7F0' : 'rgba(250,247,240,0.45)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                padding: '1rem 1.5rem 1rem 0',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { if (activeDay !== i) e.currentTarget.style.color = 'rgba(250,247,240,0.75)' }}
              onMouseLeave={e => { if (activeDay !== i) e.currentTarget.style.color = 'rgba(250,247,240,0.45)' }}
            >
              {day.label}
            </button>
          ))}
        </motion.div>

        {/* ── Day panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            id={`panel-${days[activeDay].id}`}
            role="tabpanel"
            aria-labelledby={`tab-${days[activeDay].id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            {/* Day title row */}
            <div style={{
              padding: 'clamp(1.5rem,3vw,2.5rem) 0',
              borderBottom: '1px solid rgba(221,243,243,0.08)',
              marginBottom: '0',
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.25rem,2.5vw,1.75rem)',
                fontWeight: 600,
                color: '#FAF7F0',
                margin: '0 0 0.375rem',
                letterSpacing: '-0.01em',
              }}>
                {days[activeDay].title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                color: 'rgba(221,243,243,0.5)',
                margin: 0,
                letterSpacing: '0.02em',
              }}>
                {days[activeDay].subtitle}
              </p>
            </div>

            {/* Items — clean timeline */}
            {days[activeDay].items.map((item, idx) => (
              <motion.div
                key={`${activeDay}-${idx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.06, duration: 0.35 }}
                style={{
                  display: 'grid',
                  /* Time col fixed, content col fills rest — works to 320px */
                  gridTemplateColumns: 'minmax(90px, 110px) 1fr',
                  gap: 'clamp(1rem, 3vw, 2rem)',
                  padding: 'clamp(1.25rem, 3vw, 1.75rem) 0',
                  borderBottom: idx < days[activeDay].items.length - 1
                    ? '1px solid rgba(221,243,243,0.06)'
                    : 'none',
                  alignItems: 'baseline',
                }}
              >
                {/* Time column */}
                <div>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#168AAD',
                    display: 'block',
                    paddingTop: '3px',
                  }}>
                    {item.time}
                  </span>
                </div>

                {/* Content column */}
                <div>
                  <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                    fontWeight: 600,
                    color: '#FAF7F0',
                    margin: '0 0 0.4rem',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                  }}>
                    {item.heading}
                  </h4>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    color: 'rgba(250,247,240,0.65)',
                    lineHeight: 1.75,
                    margin: 0,
                  }}>
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Campaign disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          role="note"
          style={{
            marginTop: 'clamp(2rem,5vw,3rem)',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(221,243,243,0.08)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8125rem',
            color: 'rgba(221,243,243,0.4)',
            lineHeight: 1.65,
          }}
        >
          This itinerary is part of a{' '}
          <strong style={{ color: 'rgba(221,243,243,0.65)', fontWeight: 600 }}>campaign concept</strong>.
          {' '}Timings, activities and accommodation are illustrative. All details including dates, pricing and availability are to be confirmed.
        </motion.div>

      </div>
    </section>
  )
}
