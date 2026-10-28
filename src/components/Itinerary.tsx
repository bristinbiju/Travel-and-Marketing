import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const days = [
  {
    id: 'day-1',
    label: 'Day 1',
    title: 'Arrive & Discover Vieux Nice',
    subtitle: 'Afternoon arrival · Old Town immersion · Evening on the waterfront',
    items: [
      {
        time: 'Afternoon',
        icon: '✈️',
        heading: 'Arrival & Check-in',
        body: 'Arrive at Nice Côte d\'Azur Airport (NCE) and make your way to your hotel in or near the Old Town. Freshen up and let the pace of the city wash over you.',
      },
      {
        time: 'Late Afternoon',
        icon: '🏛',
        heading: 'Explore Vieux Nice',
        body: 'Wander the baroque alleyways of Vieux Nice — past Palais Lascaris, ornate chapels and sun-bleached façades in every shade of amber and terracotta. No map required.',
      },
      {
        time: 'Evening',
        icon: '🍷',
        heading: 'Aperitivo on Cours Saleya',
        body: 'As the day cools, settle into a café or wine bar on Cours Saleya for a glass of Côtes de Provence rosé. Watch the square transform as evening light turns the buildings gold.',
      },
      {
        time: 'Night',
        icon: '🍽',
        heading: 'Dinner in the Old Town',
        body: 'Try a traditional niçoise restaurant for socca, pissaladière and fresh pasta with local olive oil. The neighbourhood has no shortage of excellent small plates.',
      },
    ],
  },
  {
    id: 'day-2',
    label: 'Day 2',
    title: 'The Promenade & Castle Hill',
    subtitle: 'Morning walk · Market breakfast · Hilltop panorama · Baie des Anges sunset',
    items: [
      {
        time: 'Early Morning',
        icon: '🌅',
        heading: 'Dawn Walk on the Promenade',
        body: 'Set an alarm worth keeping. The Promenade des Anglais at sunrise — empty, golden and softly lit — is a genuinely remarkable way to begin a day.',
      },
      {
        time: 'Morning',
        icon: '🌸',
        heading: 'Cours Saleya Flower Market',
        body: 'The morning market in Cours Saleya bursts into colour by 7am. Pick up fresh socca, pick flowers, taste olive oil. This is Nice at its most alive.',
      },
      {
        time: 'Afternoon',
        icon: '🏔',
        heading: 'Castle Hill (Colline du Château)',
        body: 'Take the lift or the 213 steps for panoramic views of the bay, the port and the rooftops of Vieux Nice. The gardens are beautifully kept and the waterfall is a wonderful surprise.',
      },
      {
        time: 'Sunset',
        icon: '🌇',
        heading: 'Sunset on the Promenade',
        body: 'Return to the seafront for the golden hour. Find a blue chair, watch the sun fall behind the Esterel mountains and remind yourself this is real.',
      },
    ],
  },
  {
    id: 'day-3',
    label: 'Day 3',
    title: 'Art, Markets & Departure',
    subtitle: 'Museum morning · Cimiez neighbourhood · Final Riviera lunch · Departure',
    items: [
      {
        time: 'Morning',
        icon: '🎨',
        heading: 'Matisse Museum or MAMAC',
        body: 'Nice has a quietly excellent museum scene. The Matisse Museum in the Cimiez neighbourhood is surrounded by ancient Roman ruins. MAMAC covers modern and contemporary French art with an impressive permanent collection.',
      },
      {
        time: 'Mid-Morning',
        icon: '🌿',
        heading: 'Cimiez & Olive Gardens',
        body: 'Cimiez is Nice\'s quiet hilltop neighbourhood — a world away from the seafront bustle. Walk through the gardens, visit the Franciscan monastery and take in the city from a different angle.',
      },
      {
        time: 'Lunch',
        icon: '🥗',
        heading: 'A Proper Niçoise Lunch',
        body: 'Your last meal in Nice deserves care. Seek out a salade niçoise made with real tuna, barely cooked eggs and proper anchovies — not the tourist version. A final carafe of local wine. Merci, Nice.',
      },
      {
        time: 'Departure',
        icon: '👋',
        heading: 'Au Revoir, Nice',
        body: 'Transfer to Nice Côte d\'Azur Airport. Departure flights available throughout the afternoon and evening. Three days will feel like not enough — that\'s by design.',
      },
    ],
  },
]

export default function Itinerary() {
  const [activeDay, setActiveDay] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="itinerary"
      ref={ref}
      aria-label="3-day itinerary"
      style={{
        background: '#15324B',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>
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
              color: '#DDF3F3',
              margin: '0 0 1rem 0',
              opacity: 0.7,
            }}
          >
            Your Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#FAF7F0',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 1rem 0',
            }}
          >
            Three days in<br />
            <em style={{ fontStyle: 'italic', color: '#F47F65' }}>the light of Nice.</em>
          </motion.h2>
        </div>

        {/* Day tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          role="tablist"
          aria-label="Itinerary days"
          style={{
            display: 'flex',
            gap: '0.75rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
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
                background: activeDay === i ? '#F47F65' : 'transparent',
                color: activeDay === i ? '#FAF7F0' : 'rgba(250,247,240,0.6)',
                border: activeDay === i ? '1.5px solid #F47F65' : '1.5px solid rgba(250,247,240,0.2)',
                borderRadius: '2rem',
                padding: '0.625rem 1.5rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                if (activeDay !== i) {
                  (e.currentTarget).style.color = '#FAF7F0'
                  ;(e.currentTarget).style.borderColor = 'rgba(250,247,240,0.5)'
                }
              }}
              onMouseLeave={e => {
                if (activeDay !== i) {
                  (e.currentTarget).style.color = 'rgba(250,247,240,0.6)'
                  ;(e.currentTarget).style.borderColor = 'rgba(250,247,240,0.2)'
                }
              }}
            >
              {day.label}
            </button>
          ))}
        </motion.div>

        {/* Day panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            id={`panel-${days[activeDay].id}`}
            role="tabpanel"
            aria-labelledby={`tab-${days[activeDay].id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{
              marginBottom: '2rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(221,243,243,0.12)',
            }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.375rem, 3vw, 2rem)',
                fontWeight: 600,
                color: '#FAF7F0',
                margin: '0 0 0.5rem 0',
              }}>
                {days[activeDay].title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                color: 'rgba(221,243,243,0.7)',
                margin: 0,
              }}>
                {days[activeDay].subtitle}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {days[activeDay].items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    gap: '2rem',
                    padding: '1.75rem 0',
                    borderBottom: idx < days[activeDay].items.length - 1 ? '1px solid rgba(221,243,243,0.08)' : 'none',
                    alignItems: 'start',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.375rem', paddingTop: '0.125rem' }}>
                    <span style={{ fontSize: '1.25rem' }} aria-hidden="true">{item.icon}</span>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#168AAD',
                    }}>
                      {item.time}
                    </span>
                  </div>
                  <div>
                    <h4 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: '#FAF7F0',
                      margin: '0 0 0.5rem 0',
                    }}>
                      {item.heading}
                    </h4>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9375rem',
                      color: 'rgba(250,247,240,0.72)',
                      lineHeight: 1.75,
                      margin: 0,
                    }}>
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Concept disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          role="note"
          style={{
            marginTop: '3rem',
            padding: '1rem 1.5rem',
            background: 'rgba(221,243,243,0.06)',
            border: '1px solid rgba(221,243,243,0.12)',
            borderRadius: '0.75rem',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8125rem',
            color: 'rgba(221,243,243,0.55)',
            lineHeight: 1.6,
            textAlign: 'center',
          }}
        >
          ℹ️ This itinerary is part of a <strong style={{ color: 'rgba(221,243,243,0.75)' }}>campaign concept</strong>. 
          Specific timings, included activities and accommodation are illustrative only. 
          All details — including dates, pricing and availability — are to be confirmed.
        </motion.p>
      </div>
    </section>
  )
}
