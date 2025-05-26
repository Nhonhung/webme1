'use client'
import { useEffect } from 'react'

interface FaviconChangerProps {
  href: string
}

export default function FaviconChanger({ href }: FaviconChangerProps) {
  useEffect(() => {
    const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']")
    if (link) {
      link.href = href
    } else {
      const newLink = document.createElement('link')
      newLink.rel = 'icon'
      newLink.href = href
      document.head.appendChild(newLink)
    }
  }, [href])

  return null
}
