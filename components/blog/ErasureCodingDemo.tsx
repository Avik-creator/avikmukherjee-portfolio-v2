"use client"

import { useEffect, useRef, useState } from "react"

export function ErasureCodingDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [lost, setLost] = useState(new Set<number>())
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null)
  const K = 5, N = 9
  const coeffs = [42, -15, 8, -3, 1]

  function poly(x: number) {
    return coeffs.reduce((s, c, i) => s + c * Math.pow(x, i), 0)
  }

  const xs = Array.from({ length: N }, (_, i) => i * 1.2)
  const ys = xs.map(poly)
  const minY = Math.min(...ys) - 20
  const maxY = Math.max(...ys) + 20

  function toScreen(x: number, y: number, W: number, H: number) {
    const px = 50 + (x / xs[N - 1]) * (W - 70)
    const py = H - 80 - ((y - minY) / (maxY - minY)) * (H - 100)
    return [px, py]
  }

  function lagrangeAt(pts: [number, number][], tx: number) {
    let result = 0
    for (let i = 0; i < pts.length; i++) {
      let term = pts[i][1]
      for (let j = 0; j < pts.length; j++) {
        if (i !== j) term *= (tx - pts[j][0]) / (pts[i][0] - pts[j][0])
      }
      result += term
    }
    return result
  }

  function toggleShard(i: number) {
    setLost(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const W = canvas.width, H = canvas.height
    const ctx = canvas.getContext("2d")!
    
    // Clear and draw dark background
    ctx.clearRect(0, 0, W, H)
    
    // Dark gradient background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H)
    bgGrad.addColorStop(0, "#141418")
    bgGrad.addColorStop(1, "#0f0f12")
    ctx.fillStyle = bgGrad
    ctx.fillRect(0, 0, W, H)
    
    // Grid lines
    ctx.strokeStyle = "rgba(255,255,255,0.04)"
    ctx.lineWidth = 1
    for (let g = 0; g <= 4; g++) {
      const y = 25 + g * (H - 100) / 4
      ctx.beginPath(); ctx.moveTo(40, y); ctx.lineTo(W - 15, y); ctx.stroke()
    }

    const available = xs.map((_, i) => i).filter(i => !lost.has(i))

    // Original polynomial (faint dashed)
    ctx.beginPath()
    ctx.setLineDash([6, 4])
    ctx.strokeStyle = "rgba(160,160,180,0.35)"
    ctx.lineWidth = 2
    for (let xi = 0; xi <= 200; xi++) {
      const xv = xs[0] + (xs[N - 1] - xs[0]) * xi / 200
      const [px, py] = toScreen(xv, poly(xv), W, H)
      xi === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
    }
    ctx.stroke()
    ctx.setLineDash([])

    // Reconstructed curve with glow effect
    if (available.length >= K) {
      const pts = available.slice(0, K).map(i => [xs[i], ys[i]] as [number, number])
      
      // Glow
      ctx.beginPath()
      ctx.strokeStyle = "rgba(29,158,117,0.3)"
      ctx.lineWidth = 8
      ctx.lineCap = "round"
      for (let xi = 0; xi <= 200; xi++) {
        const xv = xs[0] + (xs[N - 1] - xs[0]) * xi / 200
        const [px, py] = toScreen(xv, lagrangeAt(pts, xv), W, H)
        xi === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.stroke()
      
      // Main line
      ctx.beginPath()
      ctx.strokeStyle = "#22c55e"
      ctx.lineWidth = 3
      for (let xi = 0; xi <= 200; xi++) {
        const xv = xs[0] + (xs[N - 1] - xs[0]) * xi / 200
        const [px, py] = toScreen(xv, lagrangeAt(pts, xv), W, H)
        xi === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.stroke()
    }

    // Draw shard points with enhanced styling
    for (let i = 0; i < N; i++) {
      const [px, py] = toScreen(xs[i], ys[i], W, H)
      const isLostShard = lost.has(i)
      const isData = i < K
      
      // Shadow for depth
      ctx.shadowColor = isLostShard ? "rgba(239,68,68,0.4)" : isData ? "rgba(34,197,94,0.4)" : "rgba(139,92,246,0.4)"
      ctx.shadowBlur = 8
      ctx.shadowOffsetY = 2
      
      // Outer ring
      ctx.beginPath()
      ctx.arc(px, py, isLostShard ? 12 : 14, 0, Math.PI * 2)
      ctx.fillStyle = isLostShard ? "rgba(239,68,68,0.15)" : isData ? "rgba(34,197,94,0.15)" : "rgba(139,92,246,0.15)"
      ctx.fill()
      
      // Main dot
      ctx.beginPath()
      ctx.arc(px, py, isLostShard ? 8 : 10, 0, Math.PI * 2)
      const dotGrad = ctx.createRadialGradient(px - 2, py - 2, 0, px, py, isLostShard ? 8 : 10)
      if (isLostShard) {
        dotGrad.addColorStop(0, "#fca5a5")
        dotGrad.addColorStop(1, "#ef4444")
      } else if (isData) {
        dotGrad.addColorStop(0, "#86efac")
        dotGrad.addColorStop(1, "#22c55e")
      } else {
        dotGrad.addColorStop(0, "#c4b5fd")
        dotGrad.addColorStop(1, "#8b5cf6")
      }
      ctx.fillStyle = dotGrad
      ctx.fill()
      
      // Border
      ctx.shadowColor = "transparent"
      ctx.shadowBlur = 0
      ctx.shadowOffsetY = 0
      ctx.beginPath()
      ctx.arc(px, py, isLostShard ? 8 : 10, 0, Math.PI * 2)
      ctx.strokeStyle = isLostShard ? "#dc2626" : isData ? "#16a34a" : "#7c3aed"
      ctx.lineWidth = 2
      ctx.stroke()
      
      // X mark for lost shards
      if (isLostShard) {
        ctx.strokeStyle = "#fff"
        ctx.lineWidth = 2.5
        ctx.lineCap = "round"
        ctx.beginPath()
        ctx.moveTo(px - 4, py - 4)
        ctx.lineTo(px + 4, py + 4)
        ctx.moveTo(px + 4, py - 4)
        ctx.lineTo(px - 4, py + 4)
        ctx.stroke()
      }
      
      // Label below
      ctx.fillStyle = "#71717a"
      ctx.font = "500 11px system-ui, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText((isData ? "D" : "P") + i, px, py + 28)
    }

    // Legend
    const legendY = H - 25
    ctx.font = "500 11px system-ui, sans-serif"
    ctx.textAlign = "left"
    
    const legendItems = [
      { color: "#22c55e", bgColor: "rgba(34,197,94,0.2)", label: "Data" },
      { color: "#8b5cf6", bgColor: "rgba(139,92,246,0.2)", label: "Parity" },
      { color: "#ef4444", bgColor: "rgba(239,68,68,0.2)", label: "Lost" },
    ]
    
    let legendX = 50
    legendItems.forEach(({ color, bgColor, label }) => {
      ctx.beginPath()
      ctx.arc(legendX, legendY, 6, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
      ctx.fillStyle = "#a1a1aa"
      ctx.fillText(label, legendX + 12, legendY + 4)
      legendX += 70
    })
    
    // Curve legend
    ctx.beginPath()
    ctx.setLineDash([4, 3])
    ctx.strokeStyle = "rgba(160,160,180,0.5)"
    ctx.lineWidth = 2
    ctx.moveTo(legendX, legendY)
    ctx.lineTo(legendX + 20, legendY)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle = "#a1a1aa"
    ctx.fillText("Original", legendX + 26, legendY + 4)
    
    legendX += 90
    ctx.beginPath()
    ctx.strokeStyle = "#22c55e"
    ctx.lineWidth = 3
    ctx.moveTo(legendX, legendY)
    ctx.lineTo(legendX + 20, legendY)
    ctx.stroke()
    ctx.fillStyle = "#a1a1aa"
    ctx.fillText("Reconstructed", legendX + 26, legendY + 4)
    
  }, [lost])

  const available = N - lost.size
  const canRecover = available >= K

  return (
    <div className="not-prose" style={{
      margin: "2.5rem 0",
      borderRadius: "12px",
      background: "linear-gradient(135deg, rgba(18,18,22,0.95) 0%, rgba(24,24,28,0.98) 100%)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 4px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03) inset",
      overflow: "hidden",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        padding: "14px 20px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.02)",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}>
        <div style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: canRecover ? "#22c55e" : lost.size > 0 ? "#ef4444" : "#71717a",
          boxShadow: canRecover ? "0 0 8px rgba(34,197,94,0.5)" : lost.size > 0 ? "0 0 8px rgba(239,68,68,0.5)" : "none",
        }} />
        <span style={{ fontSize: "14px", fontWeight: 600, color: "#e4e4e7" }}>
          Reed-Solomon 5/9 Erasure Coding
        </span>
        <span style={{ 
          fontSize: "12px", 
          color: "#a1a1aa",
          marginLeft: "auto",
          background: "rgba(255,255,255,0.06)",
          padding: "4px 10px",
          borderRadius: "6px",
        }}>
          {available}/{N} shards
        </span>
      </div>
      
      {/* Canvas */}
      <div style={{ padding: "16px" }}>
        <canvas
          ref={canvasRef}
        width={680}
        height={320}
          style={{ 
            width: "100%", 
            height: "auto",
            display: "block",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        />
      </div>
      
      {/* Controls */}
      <div style={{ padding: "0 20px 18px" }}>
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap" as const, 
          gap: "8px", 
          marginBottom: "14px",
          alignItems: "center",
        }}>
          {Array.from({ length: N }, (_, i) => {
            const isLostShard = lost.has(i)
            const isData = i < K
            const isHovered = hoveredBtn === i
            
            return (
              <button
                key={i}
                onClick={() => toggleShard(i)}
                onMouseEnter={() => setHoveredBtn(i)}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  padding: "7px 13px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "1px solid",
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: isHovered 
                    ? isLostShard ? "0 6px 20px rgba(239,68,68,0.25)" 
                      : isData ? "0 6px 20px rgba(34,197,94,0.25)" 
                      : "0 6px 20px rgba(139,92,246,0.25)"
                    : "0 1px 4px rgba(0,0,0,0.3)",
                  background: isLostShard 
                    ? "rgba(239,68,68,0.15)" 
                    : isData 
                    ? "rgba(34,197,94,0.12)" 
                    : "rgba(139,92,246,0.12)",
                  borderColor: isLostShard 
                    ? "rgba(239,68,68,0.3)" 
                    : isData 
                    ? "rgba(34,197,94,0.25)" 
                    : "rgba(139,92,246,0.25)",
                  color: isLostShard ? "#f87171" : isData ? "#4ade80" : "#a78bfa",
                }}
              >
                <span style={{ opacity: 0.6 }}>{isData ? "D" : "P"}</span>{i}
                {isLostShard && <span style={{ marginLeft: "4px" }}>✕</span>}
              </button>
            )
          })}
          
          <button
            onClick={() => setLost(new Set())}
            onMouseEnter={() => setHoveredBtn(-1)}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              padding: "7px 14px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.1)",
              marginLeft: "8px",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: hoveredBtn === -1 ? "translateY(-2px)" : "translateY(0)",
              background: hoveredBtn === -1 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
              color: "#a1a1aa",
              boxShadow: hoveredBtn === -1 ? "0 4px 16px rgba(0,0,0,0.3)" : "none",
            }}
          >
            ↻ Reset
          </button>
        </div>
        
        {/* Status message */}
        <div style={{
          padding: "12px 16px",
          borderRadius: "8px",
          fontSize: "13px",
          fontWeight: 500,
          background: lost.size === 0 
            ? "rgba(113,113,122,0.1)" 
            : canRecover 
            ? "rgba(34,197,94,0.1)" 
            : "rgba(239,68,68,0.1)",
          color: lost.size === 0 
            ? "#a1a1aa" 
            : canRecover 
            ? "#4ade80" 
            : "#f87171",
          border: `1px solid ${
            lost.size === 0 
              ? "rgba(113,113,122,0.15)" 
              : canRecover 
              ? "rgba(34,197,94,0.2)" 
              : "rgba(239,68,68,0.2)"
          }`,
        }}>
          {lost.size === 0 ? (
            <span>All 9 shards present — click buttons to simulate disk failures</span>
          ) : canRecover ? (
            <span>
              <strong>{lost.size} shard{lost.size > 1 ? "s" : ""} lost</strong> — {available} remain, need ≥ 5. 
              Reconstruction <strong>succeeds</strong> ✓
            </span>
          ) : (
            <span>
              <strong>{lost.size} shard{lost.size > 1 ? "s" : ""} lost</strong> — only {available} remain, 
              need ≥ 5. Reconstruction <strong>impossible</strong> ✗
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
