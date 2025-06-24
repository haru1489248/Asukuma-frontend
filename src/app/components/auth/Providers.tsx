'use client';

import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode
  session: Session | null
}

export default function Providers({ children, session }: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
