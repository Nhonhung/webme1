'use client'

import { useRef, useState, useEffect } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current

    if (audio) {
      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.log('Autoplay failed:', error)
          })
      }
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/M - web.mp3"
      autoPlay
      loop
      // muted // nếu bạn muốn đảm bảo autoplay hoạt động thì thêm muted
    />
  )
}
