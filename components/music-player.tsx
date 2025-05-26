'use client'

import { useRef, useState, useEffect } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.log('Auto play failed:', error)
        })
    }
  }, [])

  return (
    <audio ref={audioRef} src="/M - web.mp3" loop />
  )
}
