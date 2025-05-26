'use client'

import { useRef, useEffect } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Tự động phát nhạc tắt tiếng
    audio.muted = true
    audio.play().catch((err) => {
      console.log('Muted autoplay failed:', err)
    })

    // Khi người dùng tương tác, bật âm thanh lại
    const enableSound = () => {
      audio.muted = false
      audio.play().catch((err) => {
        console.log('Unmuted playback failed:', err)
      })
      window.removeEventListener('click', enableSound)
      window.removeEventListener('touchstart', enableSound)
    }

    window.addEventListener('click', enableSound)
    window.addEventListener('touchstart', enableSound)

    return () => {
      window.removeEventListener('click', enableSound)
      window.removeEventListener('touchstart', enableSound)
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/M - web.mp3"
      loop
      autoPlay
      muted // Tắt tiếng ban đầu để trình duyệt cho phép autoplay
    />
  )
}
