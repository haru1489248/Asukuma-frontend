'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#dc2626',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '1rem',
      }}
    >
      ログアウト
    </button>
  );
}
