import React from "react";

interface AskmaLogoProps {
    size?: number
    className?: string
  }
  
  export function AskmaLogo({ size = 32, className = "" }: AskmaLogoProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="bearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient id="questionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
  
        {/* 熊の顔の輪郭 */}
        <circle cx="60" cy="65" r="40" fill="url(#bearGradient)" filter="url(#glow)" />
  
        {/* 熊の耳 */}
        <circle cx="42" cy="40" r="14" fill="#7C3AED" />
        <circle cx="78" cy="40" r="14" fill="#7C3AED" />
        <circle cx="42" cy="40" r="9" fill="#F3E8FF" />
        <circle cx="78" cy="40" r="9" fill="#F3E8FF" />
  
        {/* 熊の目 */}
        <circle cx="50" cy="58" r="5" fill="#1F2937" />
        <circle cx="70" cy="58" r="5" fill="#1F2937" />
        <circle cx="51" cy="56" r="2" fill="#FFFFFF" />
        <circle cx="71" cy="56" r="2" fill="#FFFFFF" />
  
        {/* 熊の鼻 */}
        <ellipse cx="60" cy="70" rx="4" ry="3" fill="#1F2937" />
  
        {/* 熊の口 */}
        <path d="M 52 78 Q 60 85 68 78" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round" />
  
        {/* 完璧な?マーク - 熊のおでこに配置 */}
        <g transform="translate(60, 35)">
          {/* ?の上部カーブ */}
          <path
            d="M -6 -8 Q -6 -15 0 -15 Q 6 -15 6 -8 Q 6 -3 3 -1 Q 0 1 0 4"
            stroke="url(#questionGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          {/* ?の点 */}
          <circle cx="0" cy="8" r="2" fill="url(#questionGradient)" filter="url(#glow)" />
        </g>
  
        {/* 装飾的な小さな?マーク */}
        <g opacity="0.6">
          <circle cx="25" cy="25" r="1" fill="#F472B6" />
          <text x="23" y="30" fontSize="8" fill="#F472B6" fontWeight="bold">
            ?
          </text>
  
          <circle cx="95" cy="35" r="1" fill="#EC4899" />
          <text x="93" y="40" fontSize="6" fill="#EC4899" fontWeight="bold">
            ?
          </text>
  
          <circle cx="15" cy="85" r="1" fill="#F472B6" />
          <text x="13" y="90" fontSize="7" fill="#F472B6" fontWeight="bold">
            ?
          </text>
        </g>
  
        {/* 外側の装飾リング */}
        <circle
          cx="60"
          cy="65"
          r="50"
          stroke="url(#bearGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          strokeDasharray="5,5"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 60 65"
            to="360 60 65"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    )
  }
  
  export function AskmaText({ size = 24, className = "" }: AskmaLogoProps) {
    const baseSize = size * 0.8
  
    return (
      <div
        className={`relative ${className}`}
        style={{
          fontSize: `${baseSize}px`,
          fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: 800,
          letterSpacing: "-0.02em",
        }}
      >
        <div className="relative inline-block">
          {/* メインテキスト */}
          <span
            className="relative z-10"
            style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 4px rgba(139, 92, 246, 0.3))",
            }}
          >
            Askma
          </span>
  
          {/* グロー効果 */}
          <span
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "blur(8px) opacity(0.3)",
              transform: "scale(1.05)",
            }}
          >
            Askma
          </span>
  
          {/* 装飾的な要素 */}
          <div className="absolute -top-1 -right-3 flex space-x-1">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{
                backgroundColor: "#F472B6",
                animationDelay: "0s",
                animationDuration: "2s",
              }}
            />
            <div
              className="w-1 h-1 rounded-full animate-pulse"
              style={{
                backgroundColor: "#FB7185",
                animationDelay: "0.5s",
                animationDuration: "2s",
              }}
            />
          </div>
  
          {/* 下線効果 */}
          <div
            className="absolute bottom-0 left-0 h-0.5 animate-pulse"
            style={{
              width: "100%",
              background: "linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%)",
              animationDuration: "3s",
              borderRadius: "1px",
            }}
          />
        </div>
      </div>
    )
  }
  
  export function AskmaLogoText({ size = 24, className = "" }: AskmaLogoProps) {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <AskmaLogo size={size} />
        <AskmaText size={size} />
      </div>
    )
  }
  
  // 追加: より大きなヒーロー用のロゴ
  export function AskmaHeroLogo({ className = "" }: { className?: string }) {
    return (
      <div className={`flex flex-col items-center space-y-4 ${className}`}>
        <AskmaLogo size={120} />
        <div className="relative">
          <h1
            className="text-6xl font-black tracking-tight"
            style={{
              fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 30%, #6D28D9 60%, #5B21B6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))",
            }}
          >
            Askma
          </h1>
  
          {/* 動的な装飾要素 */}
          <div className="absolute -top-4 -right-8 flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full animate-bounce"
                style={{
                  backgroundColor: ["#F472B6", "#FB7185", "#F472B6"][i],
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "1.5s",
                }}
              />
            ))}
          </div>
  
          {/* グラデーション下線 */}
          <div
            className="absolute -bottom-2 left-0 h-1 rounded-full"
            style={{
              width: "100%",
              background: "linear-gradient(90deg, #8B5CF6, #7C3AED, #6D28D9)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
            }}
          />
        </div>
      </div>
    )
  }
