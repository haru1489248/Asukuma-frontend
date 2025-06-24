'use client';

import { signIn } from 'next-auth/react';

import GoogleIcon from '../assets/GoogleIcon/GoogleIcon';

export default function GoogleLoginButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center justify-center w-full h-12 bg-white border border-gray-300 rounded-md"
    >
      <GoogleIcon />
      <span className="ml-2">Googleでログイン</span>
    </button>
  );
}
