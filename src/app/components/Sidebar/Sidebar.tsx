'use client';

import { clsx } from 'clsx';
import { useSession } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { AskmaLogoText } from '../assets/AskmaLogo/AskmaLogo';
import LoginButton from '../auth/GoogleLoginButton';
import * as styles from './Sidebar.css';
import { useSidebar } from './SidebarContext';

export default function Sidebar() {
  const { isOpen, setIsOpen } = useSidebar();
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      {/* オーバーレイ */}
      <button
        className={clsx(styles.overlay, isOpen && styles.overlayVisible)}
        onClick={() => setIsOpen(false)}
        aria-label="サイドバーを閉じる"
      />

      {/* サイドバー */}
      <div className={clsx(styles.sidebar, isOpen && styles.sidebarOpen)}>
        <div className="relative p-4">
          <button
            className={clsx(styles.closeButton, 'absolute', 'top-4', 'right-4')}
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <div className="mt-6 flex justify-center">
            <AskmaLogoText size={40} />
          </div>
          <div className="mt-6">
            {session ? (
              <div className="flex items-center gap-2">
                <Avatar className="h-16 w-16 ring-2 ring-purple-200">
                  <AvatarImage
                    src={session.user?.image ?? '/placeholder.svg'}
                    alt="User"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-gray-300 to-gray-400 text-white text-lg font-semibold">
                    {session.user?.name?.charAt(0) ?? '?'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {session.user?.name || 'ユーザー'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {session.user?.email || 'email'}
                  </p>
                  <div className="flex items-center mt-1">
                    {/* <Badge variant="secondary" className="text-xs">
                  <Award className="w-3 h-3 mr-1" />
                  アクティブユーザー
                </Badge> */}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="mb-2 text-lg font-bold">Askmaへようこそ</h3>
                <p className="text-sm text-gray-500">
                  匿名で質問を投稿し、みんなで答え合うプラットフォーム
                </p>
                {/* <p className="mt-4">メールアドレス</p>
          <input className="w-full mt-2 p-2 border border-gray-300 rounded-md" type="text" placeholder="your@email.com"/>
          <p className="mt-4">パスワード</p>
          <input className="w-full mt-2 p-2 border border-gray-300 rounded-md" type="text" />
          <button className="w-full mt-4 p-2 bg-black text-white rounded-md">ログイン</button>
          <div className="mt-6">
          <a className="text-sm underline flex justify-center">パスワードを忘れた方はこちら</a>
          </div> */}
                {/* <div className="border-t border-gray-300 mt-6"/> */}
                <div className="mt-6">
                  {/* <p className="text-center">または</p> */}
                  <div className="mt-4">
                    <LoginButton />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
