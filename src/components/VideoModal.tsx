import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoModalProps {
  open: boolean
  onClose: () => void
}

export default function VideoModal({ open, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  // Play / pause with modal state
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (open) {
      video.currentTime = 0
      video.play().catch(() => {/* autoplay blocked — user can press play manually */})
      // Focus the close button for keyboard accessibility
      setTimeout(() => closeBtnRef.current?.focus(), 100)
    } else {
      video.pause()
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Nice Escape – cinematic video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(10, 20, 32, 0.94)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* Video container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '960px',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              boxShadow: '0 32px 96px rgba(0,0,0,0.7)',
              background: '#000',
              aspectRatio: '16/9',
            }}
          >
            <video
              ref={videoRef}
              src="/images/nice-escape.mp4"
              controls
              playsInline
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
              }}
              aria-label="Nice Escape cinematic campaign video"
            />

            {/* Coral accent top bar */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(to right, #F47F65, #168AAD)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>

          {/* Close button */}
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close video"
            style={{
              position: 'fixed',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(250,247,240,0.1)',
              border: '1.5px solid rgba(250,247,240,0.25)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#FAF7F0',
              fontSize: '1.25rem',
              lineHeight: 1,
              transition: 'background 0.2s, border-color 0.2s',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => {
              const btn = e.currentTarget
              btn.style.background = 'rgba(244,127,101,0.25)'
              btn.style.borderColor = '#F47F65'
            }}
            onMouseLeave={e => {
              const btn = e.currentTarget
              btn.style.background = 'rgba(250,247,240,0.1)'
              btn.style.borderColor = 'rgba(250,247,240,0.25)'
            }}
          >
            ✕
          </button>

          {/* Keyboard hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'fixed',
              bottom: '1.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              color: 'rgba(250,247,240,0.4)',
              letterSpacing: '0.08em',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}
            aria-hidden="true"
          >
            Press <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>ESC</kbd> or click outside to close
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
