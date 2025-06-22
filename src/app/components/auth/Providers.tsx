'use client'

import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"
import { ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
  session: Session | null
}

export default function Providers({ children, session }: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
} 
