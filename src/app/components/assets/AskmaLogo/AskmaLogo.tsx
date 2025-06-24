"use client"

import Image from "next/image"

interface AskmaLogoProps {
  size?: number
  className?: string
}

export function AskmaLogo({ size = 32, className = "" }: AskmaLogoProps) {
  return (
    <Image
      src="/images/askma-logo.PNG"
      alt="Askma"
      width={size}
      height={size}
      className={`${className}`}
      style={{
        width: size,
        height: size,
      }}
      priority={size > 50}
    />
  )
}

export function AskmaText({ size = 24, className = "" }: AskmaLogoProps) {
  const fontSize = size * 0.8

  return (
    <div className={`relative ${className}`}>
      {/* メインテキスト */}
      <div
        className="relative z-10 font-black tracking-tight"
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: '"Poppins", "SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: 900,
          letterSpacing: "-0.02em",
          background: "linear-gradient(135deg, #00D4FF 0%, #0EA5E9 25%, #1E40AF 50%, #14B8A6 75%, #10B981 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 2px 4px rgba(0, 212, 255, 0.2))",
        }}
      >
        Askma
      </div>

      {/* グロー効果 */}
      <div
        className="absolute inset-0 z-0 font-black tracking-tight"
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: '"Poppins", "SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: 900,
          letterSpacing: "-0.02em",
          background: "linear-gradient(135deg, #00D4FF 0%, #0EA5E9 25%, #1E40AF 50%, #14B8A6 75%, #10B981 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "blur(8px) opacity(0.3)",
          transform: "scale(1.02)",
        }}
      >
        Askma
      </div>

      {/* 装飾的な要素 */}
      <div className="absolute -top-1 -right-4 flex space-x-1">
        <div
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{
            backgroundColor: "#00D4FF",
            animationDelay: "0s",
            animationDuration: "2s",
            boxShadow: "0 0 8px rgba(0, 212, 255, 0.6)",
          }}
        />
        <div
          className="w-1 h-1 rounded-full animate-pulse"
          style={{
            backgroundColor: "#10B981",
            animationDelay: "0.7s",
            animationDuration: "2s",
            boxShadow: "0 0 6px rgba(16, 185, 129, 0.6)",
          }}
        />
        <div
          className="w-0.5 h-0.5 rounded-full animate-pulse"
          style={{
            backgroundColor: "#14B8A6",
            animationDelay: "1.4s",
            animationDuration: "2s",
            boxShadow: "0 0 4px rgba(20, 184, 166, 0.6)",
          }}
        />
      </div>

      {/* 動的な下線効果 */}
      <div
        className="absolute bottom-0 left-0 h-0.5 animate-pulse rounded-full"
        style={{
          width: "100%",
          background: "linear-gradient(90deg, transparent 0%, #00D4FF 20%, #14B8A6 50%, #10B981 80%, transparent 100%)",
          animationDuration: "3s",
          boxShadow: "0 0 10px rgba(0, 212, 255, 0.4)",
        }}
      />
    </div>
  )
}

// プレミアムバージョン - より豪華なエフェクト
export function AskmaTextPremium({ size = 24, className = "" }: AskmaLogoProps) {
  const fontSize = size * 0.8

  return (
    <div className={`relative ${className}`}>
      {/* 背景グロー */}
      <div
        className="absolute inset-0 font-black tracking-tight"
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: '"Montserrat", "Poppins", "SF Pro Display", sans-serif',
          fontWeight: 900,
          letterSpacing: "-0.03em",
          background: "linear-gradient(135deg, #00D4FF, #14B8A6, #10B981)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "blur(12px) opacity(0.4)",
          transform: "scale(1.1)",
        }}
      >
        Askma
      </div>

      {/* メインテキスト */}
      <div
        className="relative z-10 font-black tracking-tight"
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: '"Montserrat", "Poppins", "SF Pro Display", sans-serif',
          fontWeight: 900,
          letterSpacing: "-0.03em",
          background:
            "linear-gradient(135deg, #00D4FF 0%, #0EA5E9 20%, #1E40AF 40%, #14B8A6 60%, #10B981 80%, #059669 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 4px 8px rgba(0, 212, 255, 0.3))",
        }}
      >
        Askma
      </div>

      {/* 光の粒子効果 */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-ping"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
              backgroundColor: i % 3 === 0 ? "#00D4FF" : i % 3 === 1 ? "#14B8A6" : "#10B981",
              animationDelay: `${i * 0.3}s`,
              animationDuration: "2s",
              boxShadow: `0 0 6px ${i % 3 === 0 ? "#00D4FF" : i % 3 === 1 ? "#14B8A6" : "#10B981"}`,
            }}
          />
        ))}
      </div>

      {/* 虹色の境界線 */}
      <div
        className="absolute -bottom-1 left-0 h-1 rounded-full animate-pulse"
        style={{
          width: "100%",
          background: "linear-gradient(90deg, #00D4FF, #0EA5E9, #1E40AF, #14B8A6, #10B981, #059669)",
          boxShadow: "0 0 15px rgba(0, 212, 255, 0.5)",
          animationDuration: "2s",
        }}
      />
    </div>
  )
}

// 3Dエフェクト版
export function AskmaText3D({ size = 24, className = "" }: AskmaLogoProps) {
  const fontSize = size * 0.8

  return (
    <div className={`relative ${className}`} style={{ perspective: "1000px" }}>
      {/* 3D影 */}
      <div
        className="absolute font-black tracking-tight"
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: '"Orbitron", "Exo 2", "Montserrat", sans-serif',
          fontWeight: 900,
          letterSpacing: "-0.02em",
          color: "rgba(0, 212, 255, 0.2)",
          transform: "translateZ(-10px) translateY(2px) translateX(2px)",
          filter: "blur(1px)",
        }}
      >
        Askma
      </div>

      {/* メイン3Dテキスト */}
      <div
        className="relative z-10 font-black tracking-tight"
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: '"Orbitron", "Exo 2", "Montserrat", sans-serif',
          fontWeight: 900,
          letterSpacing: "-0.02em",
          background: "linear-gradient(135deg, #00D4FF 0%, #0EA5E9 25%, #1E40AF 50%, #14B8A6 75%, #10B981 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          transform: "translateZ(0px)",
          filter: "drop-shadow(0 4px 8px rgba(0, 212, 255, 0.4))",
        }}
      >
        Askma
      </div>
    </div>
  )
}

export function AskmaLogoText({
  size = 24,
  className = "",
  variant = "default",
}: AskmaLogoProps & { variant?: "default" | "premium" | "3d" }) {
  const TextComponent = variant === "premium" ? AskmaTextPremium : variant === "3d" ? AskmaText3D : AskmaText

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <AskmaLogo size={size + 20} />
      <TextComponent size={size} />
    </div>
  )
}

// ヒーロー用の超豪華版
export function AskmaHeroLogo({
  className = "",
  variant = "premium",
}: { className?: string; variant?: "default" | "premium" | "3d" }) {
  const TextComponent = variant === "premium" ? AskmaTextPremium : variant === "3d" ? AskmaText3D : AskmaText

  return (
    <div className={`flex flex-col items-center space-y-8 ${className}`}>
      <div className="relative">
        <AskmaLogo size={120} />
        {/* 背景に虹色のオーラ */}
        <div className="absolute inset-0 -z-10 blur-2xl opacity-30">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: "radial-gradient(circle, #00D4FF 0%, #14B8A6 50%, #10B981 100%)",
              transform: "scale(1.5)",
            }}
          />
        </div>
      </div>

      <div className="relative">
        <TextComponent size={72} />

        {/* 魔法的な背景効果 */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 rounded-lg opacity-20"
            style={{
              background: "linear-gradient(45deg, #00D4FF, transparent, #14B8A6, transparent, #10B981)",
              filter: "blur(20px)",
              transform: "scale(1.2)",
            }}
          />
        </div>
      </div>
    </div>
  )
}

// アイコンのみのバリエーション
export function AskmaIcon({ size = 32, className = "" }: AskmaLogoProps) {
  return <AskmaLogo size={size} className={className} />
}

// 小さいサイズ用
export function AskmaLogoCompact({ size = 20, className = "" }: AskmaLogoProps) {
  return <AskmaLogo size={size} className={className} />
}

// アニメーション付きロゴ
export function AskmaLogoAnimated({ size = 32, className = "" }: AskmaLogoProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      <AskmaLogo size={size} />
    </div>
  )
}

// 回転アニメーション
export function AskmaLogoSpinning({ size = 32, className = "" }: AskmaLogoProps) {
  return (
    <div className={`animate-spin ${className}`} style={{ animationDuration: "3s" }}>
      <AskmaLogo size={size} />
    </div>
  )
}

// ホバー効果付き
export function AskmaLogoHover({ size = 32, className = "" }: AskmaLogoProps) {
  return (
    <div className={`transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl ${className}`}>
      <AskmaLogo size={size} />
    </div>
  )
}

// クリック可能版
export function AskmaLogoClickable({ size = 32, className = "", onClick }: AskmaLogoProps & { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1 ${className}`}
      aria-label="Askma ホーム"
    >
      <AskmaLogo size={size} />
    </button>
  )
}

// バッジ付きロゴ
export function AskmaLogoWithBadge({
  size = 32,
  className = "",
  badgeCount,
}: AskmaLogoProps & { badgeCount?: number }) {
  return (
    <div className={`relative ${className}`}>
      <AskmaLogo size={size} />
      {badgeCount && badgeCount > 0 && (
        <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
          {badgeCount > 99 ? "99+" : badgeCount}
        </div>
      )}
    </div>
  )
}
