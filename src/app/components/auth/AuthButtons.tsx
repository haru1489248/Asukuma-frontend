'use client';

import { useSession } from 'next-auth/react';

import LoginButton from './GoogleLoginButton';
import LogoutButton from './LogoutButton';

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>読み込み中...</div>;
  }

  if (session) {
    return <LogoutButton />;
  }

  return <LoginButton />;
}
