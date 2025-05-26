"use client"

import { useEffect, useRef } from "react"
import { Facebook, Github, Instagram } from "lucide-react"

export default function ZLS() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const petals: Array<{
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      rotation: number
      rotationSpeed: number
      color: string
      drift: number
    }> = []

    const colors = ["#ffeef7", "#ffcad4", "#ffb3c1", "#ffffff"]

    // Create more cherry blossom petals for richer effect
    for (let i = 0; i < 80; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 12 + 6,
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 3 - 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        drift: Math.random() * 2 - 1,
      })
    }

    function drawPetal(x: number, y: number, size: number, rotation: number, opacity: number, color: string) {
      if (!ctx) return

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.globalAlpha = opacity

      // Draw more realistic cherry blossom petal
      ctx.beginPath()
      ctx.fillStyle = color

      // Create petal shape with curves
      ctx.moveTo(0, -size)
      ctx.quadraticCurveTo(size * 0.8, -size * 0.5, size * 0.6, 0)
      ctx.quadraticCurveTo(size * 0.3, size * 0.8, 0, size * 0.4)
      ctx.quadraticCurveTo(-size * 0.3, size * 0.8, -size * 0.6, 0)
      ctx.quadraticCurveTo(-size * 0.8, -size * 0.5, 0, -size)
      ctx.fill()

      // Add inner highlight
      ctx.beginPath()
      ctx.fillStyle = "#ffffff"
      ctx.globalAlpha = opacity * 0.6
      ctx.ellipse(0, -size * 0.2, size * 0.3, size * 0.2, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      petals.forEach((petal) => {
        drawPetal(petal.x, petal.y, petal.size, petal.rotation, petal.opacity, petal.color)

        petal.y += petal.speed
        petal.x += Math.sin(petal.y * 0.008) * petal.drift
        petal.rotation += petal.rotationSpeed

        if (petal.y > canvas.height + 50) {
          petal.y = -50
          petal.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-pink-300 relative overflow-hidden">
      {/* Cherry Blossom Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />

      {/* Main Content - Compact Layout */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Compact Logo with Cherry Blossoms */}
        <div className="mb-4 relative group">
          <div className="logo-container w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-xl transition-all duration-500 group-hover:shadow-pink-500/60 group-hover:shadow-xl comfortaa-font relative overflow-hidden">
            {/* Cherry blossom petals inside logo */}
            <div className="absolute inset-0 opacity-20">
              <div className="sakura-petal absolute top-1 right-2 w-2 h-2 bg-pink-200 rounded-full animate-float-1"></div>
              <div className="sakura-petal absolute bottom-2 left-1 w-1.5 h-1.5 bg-white rounded-full animate-float-2"></div>
              <div className="sakura-petal absolute top-1/2 left-0.5 w-2 h-2 bg-pink-100 rounded-full animate-float-3"></div>
            </div>

            {/* Z Letter with enhanced styling */}
            <span className="relative z-10 text-shadow-glow">Z</span>

            {/* Floating cherry blossoms around logo */}
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-200 rounded-full opacity-60 animate-orbit-1"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-50 animate-orbit-2"></div>
          </div>

          {/* Enhanced glow effects */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
        </div>

        {/* Compact ZLS Text */}
        <div className="mb-3 relative">
          <h1
            className="glitch-compact text-3xl md:text-4xl font-bold text-white select-none orbitron-font tracking-wider"
            data-text="ZLS"
          >
            ZLS
          </h1>
        </div>

        {/* Compact Fire Badge */}
        <div className="mb-4 flex items-center justify-center">
          <div className="purple-badge bg-purple-500/20 border border-purple-500/40 rounded-full px-3 py-1 flex items-center gap-2">
            <div className="purple-icon w-4 h-4 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-purple-300 rounded-full animate-purple-pulse"></div>
            </div>
            <span className="text-purple-300 text-sm font-bold vie-sparkle relative">
              VIE
              {/* Sparkle effects */}
              <div className="absolute -top-1 -right-1 w-1 h-1 bg-white rounded-full animate-sparkle-vie-1"></div>
              <div className="absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-purple-200 rounded-full animate-sparkle-vie-2"></div>
              <div className="absolute top-0 -left-2 w-0.5 h-0.5 bg-white rounded-full animate-sparkle-vie-3"></div>
              <div className="absolute bottom-0 -right-2 w-1 h-1 bg-purple-100 rounded-full animate-sparkle-vie-4"></div>
            </span>
          </div>
        </div>

        {/* Ultra Compact Social Media Icons */}
        <div className="flex items-center justify-center gap-3">
          {[
            {
              icon: <Instagram className="w-5 h-5" />,
              label: "Instagram",
              href: "https://www.instagram.com/ducthinh2076",
              color: "#E4405F",
              tooltip: "Instagram",
            },
            {
              icon: <Github className="w-5 h-5" />,
              label: "GitHub",
              href: "https://github.com/Nhonhung",
              color: "#333333",
              tooltip: "GitHub",
            },
            {
              icon: <Facebook className="w-5 h-5" />,
              label: "Facebook",
              href: "https://www.facebook.com/ownzls",
              color: "#1877F2",
              tooltip: "Facebook",
            },
          ].map((social, index) => (
            <div key={index} className="relative group">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-mini w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 animate-icon-entrance"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  backgroundColor: social.color + "15",
                  color: social.color,
                }}
                aria-label={social.label}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.color + "25"
                  e.currentTarget.style.transform = "scale(1.1)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = social.color + "15"
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                {social.icon}
              </a>

              {/* Mini Tooltip */}
              <div className="tooltip absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                {social.tooltip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compact Footer */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <span
            className="text-white/80 font-black tracking-wide"
            style={{ fontSize: "18px", fontFamily: "Playfair Display, serif" }}
          >
            Made with ZLS
          </span>
              </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Comfortaa:wght@300;400;700&display=swap');

        .orbitron-font {
          font-family: 'Orbitron', monospace;
        }

        .comfortaa-font {
          font-family: 'Comfortaa', cursive;
        }

        .text-shadow-glow {
          text-shadow: 
            0 0 8px rgba(255, 255, 255, 0.6),
            0 0 16px rgba(255, 182, 193, 0.4);
        }

        .logo-container:hover {
          animation: bounce-gentle 0.5s ease-in-out;
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        /* Compact cherry blossom animations */
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-4px) rotate(180deg); opacity: 0.8; }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-3px) rotate(-180deg); opacity: 0.3; }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-5px) rotate(90deg); opacity: 0.9; }
        }

        /* Compact orbiting animations */
        @keyframes orbit-1 {
          0% { transform: rotate(0deg) translateX(35px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(35px) rotate(-360deg); }
        }

        @keyframes orbit-2 {
          0% { transform: rotate(180deg) translateX(30px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(30px) rotate(-540deg); }
        }

        .animate-float-1 {
          animation: float-1 2.5s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 2s ease-in-out infinite 0.3s;
        }

        .animate-float-3 {
          animation: float-3 3s ease-in-out infinite 0.8s;
        }

        .animate-orbit-1 {
          animation: orbit-1 6s linear infinite;
        }

        .animate-orbit-2 {
          animation: orbit-2 8s linear infinite;
        }

        /* Compact glitch effect */
        .glitch-compact {
          position: relative;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .glitch-compact:hover {
          animation: glitch-mini 0.3s ease-in-out;
        }

        @keyframes glitch-mini {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
        }

        /* Mini purple circle animation */
        @keyframes purple-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .animate-purple-pulse {
          animation: purple-pulse 1s ease-in-out infinite;
        }

        /* Mini social icons */
        .social-icon-mini {
          backdrop-filter: blur(3px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .social-icon-mini:hover {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .animate-icon-entrance {
          opacity: 0;
          animation: icon-entrance 0.3s ease-out forwards;
        }

        @keyframes icon-entrance {
          0% {
            opacity: 0;
            transform: translateY(8px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .tooltip {
          font-size: 10px;
          z-index: 1000;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 640px) {
          .social-icon-mini {
            width: 36px;
            height: 36px;
          }
          
          .social-icon-mini svg {
            width: 18px;
            height: 18px;
          }
        }

        /* VIE sparkle effects */
        .vie-sparkle {
          text-shadow: 
            0 0 5px rgba(255, 255, 255, 0.6),
            0 0 10px rgba(196, 181, 253, 0.4),
            0 0 15px rgba(196, 181, 253, 0.2);
          animation: vie-glow 2s ease-in-out infinite alternate;
        }

        @keyframes vie-glow {
          0% {
            text-shadow: 
              0 0 5px rgba(255, 255, 255, 0.6),
              0 0 10px rgba(196, 181, 253, 0.4),
              0 0 15px rgba(196, 181, 253, 0.2);
          }
          100% {
            text-shadow: 
              0 0 8px rgba(255, 255, 255, 0.8),
              0 0 16px rgba(196, 181, 253, 0.6),
              0 0 24px rgba(196, 181, 253, 0.4);
          }
        }

        @keyframes sparkle-vie-1 {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }

        @keyframes sparkle-vie-2 {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          33% { opacity: 1; transform: scale(1) rotate(120deg); }
          66% { opacity: 0; transform: scale(0) rotate(240deg); }
        }

        @keyframes sparkle-vie-3 {
          0%, 100% { opacity: 0; transform: scale(0); }
          25% { opacity: 1; transform: scale(1); }
          75% { opacity: 0; transform: scale(0); }
        }

        @keyframes sparkle-vie-4 {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          40% { opacity: 1; transform: scale(1) rotate(90deg); }
          80% { opacity: 0; transform: scale(0) rotate(180deg); }
        }

        .animate-sparkle-vie-1 {
          animation: sparkle-vie-1 1.5s ease-in-out infinite;
        }

        .animate-sparkle-vie-2 {
          animation: sparkle-vie-2 2s ease-in-out infinite 0.3s;
        }

        .animate-sparkle-vie-3 {
          animation: sparkle-vie-3 1.8s ease-in-out infinite 0.6s;
        }

        .animate-sparkle-vie-4 {
          animation: sparkle-vie-4 2.2s ease-in-out infinite 0.9s;
        }
      `}</style>
    </div>
  )
}
