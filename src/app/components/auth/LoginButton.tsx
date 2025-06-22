'use client'

import { signIn } from 'next-auth/react'

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("google")}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#4285F4",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "1rem",
      }}
    >
      Googleでログイン
    </button>
  )
} 
