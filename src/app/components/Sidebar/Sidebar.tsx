'use client';

import clsx from 'clsx';

import { AskmaLogoText } from '../assets/AskmaLogo/AskmaLogo';
import LoginButton from '../auth/GoogleLoginButton';
import * as styles from './Sidebar.css';
import { useSidebar } from './SidebarContext';

export default function Sidebar() {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <>
      {/* オーバーレイ */}
      <button
        className={clsx(styles.overlay, isOpen && styles.overlayVisible)}
        onClick={() => setIsOpen(false)}
        aria-label="サイドバーを閉じる"
      />
      
      {/* サイドバー */}
      <div className={clsx(
        styles.sidebar,
        isOpen && styles.sidebarOpen,
      )}>
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
          <h3 className="mb-2 text-lg font-bold">Askmaへようこそ</h3>
          <p className="text-sm text-gray-500">匿名で質問を投稿し、みんなで答え合うプラットフォーム</p>
          </div>
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
      </div>
    </>
  );
}
