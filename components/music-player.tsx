'use client'

import { useRef, useEffect } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Bắt buộc có để autoplay hoạt động trên iOS
    audio.muted = true
    audio.play().catch((err) => {
      console.log('Muted autoplay failed:', err)
    })

    const enableSound = () => {
      if (!audio) return
      audio.muted = false
      audio.play().catch((err) => {
        console.log('Unmuted playback failed:', err)
      })

      // Xóa listener sau tương tác đầu tiên
      document.removeEventListener('click', enableSound)
      document.removeEventListener('touchstart', enableSound)
    }

    // Dùng `document` thay vì `window` cho mobile ổn định hơn
    document.addEventListener('click', enableSound, { once: true })
    document.addEventListener('touchstart', enableSound, { once: true })

    return () => {
      document.removeEventListener('click', enableSound)
      document.removeEventListener('touchstart', enableSound)
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/M - web.mp3"
      loop
      autoPlay
      muted
      playsInline // Quan trọng cho iOS Safari
    />
  )
}
