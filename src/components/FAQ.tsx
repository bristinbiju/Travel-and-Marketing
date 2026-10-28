import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Is this a confirmed trip I can book right now?',
    a: 'No — Nice Escape is currently a campaign concept. This page is an editorial preview of a proposed 3-day getaway to Nice. Specific dates, pricing, availability, and inclusions are all to be confirmed. Register your interest to be notified when the trip goes live.',
  },
  {
    q: 'Who is this trip designed for?',
    a: 'Nice Escape is crafted for curious, culture-hungry travellers aged 20–35 — couples, small groups of friends, and confident solo explorers. If you\'re after a city break that combines real culture, beautiful scenery and good food without the resort-package feeling, Nice is your city.',
  },
  {
    q: 'What\'s the best time of year to visit Nice?',
    a: 'Nice is genuinely enjoyable almost year-round, but the sweet spots are late spring (May–June) and early autumn (September–October) — warm sun, fewer crowds, and the city at its most relaxed. July and August are peak season and get busy along the seafront.',
  },
  {
    q: 'Do I need to speak French?',
    a: 'Not at all. Nice is a major international tourism city and English is widely spoken in restaurants, hotels and tourist sites. That said, a few words of French always go down well — locals appreciate the effort.',
  },
  {
    q: 'How do I get to Nice?',
    a: 'Nice Côte d\'Azur Airport (NCE) is one of France\'s busiest airports, with direct flights from most major European cities and many international hubs. It\'s also reachable by high-speed TGV train from Paris in around 5.5 hours.',
  },
  {
    q: 'What is and isn\'t included in the package?',
    a: 'Indicative inclusions for this concept are: 2 nights boutique accommodation, return airport transfers, a curated city guide, a welcome dinner, one or two museum entries, and a day\'s bike hire. All of these are provisional and subject to change. International flights are not included. Final inclusions will be confirmed when the trip launches.',
  },
  {
    q: 'Are there options for solo travellers?',
    a: 'Yes — this trip is designed to work beautifully for solo travellers. Nice is an exceptionally safe and walkable city with a lively café and bar culture that makes solo exploring genuinely enjoyable. Pricing for single occupancy will be listed separately when confirmed.',
  },
]

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const id = `faq-item-${index}`

  return (
    <div
      style={{
        borderBottom: '1px solid rgba(21,50,75,0.1)',
      }}
    >
      <button
        id={`${id}-btn`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          padding: '1.5rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.0625rem',
          fontWeight: 600,
          color: '#15324B',
          lineHeight: 1.4,
        }}>
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            flexShrink: 0,
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: open ? '#F47F65' : '#DDF3F3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: open ? '#FAF7F0' : '#15324B',
            fontSize: '1.125rem',
            fontWeight: 300,
            lineHeight: 1,
            transition: 'background 0.2s',
          }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              color: '#15324B',
              lineHeight: 1.8,
              opacity: 0.8,
              margin: '0 0 1.5rem 0',
              paddingRight: '2.5rem',
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="faq"
      ref={ref}
      aria-label="Frequently asked questions"
      style={{
        background: '#FAF7F0',
        padding: '7rem 2rem',
      }}
    >
      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
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
            Questions
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
            Everything you<br />
            <em style={{ fontStyle: 'italic', color: '#F47F65' }}>want to know.</em>
          </motion.h2>
        </div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.65 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
