import './globals.css';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';

import { authOptions } from './api/auth/[...nextauth]/route';
import Providers from './components/auth/Providers';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { SidebarProvider } from './components/Sidebar/SidebarContext';

export const metadata: Metadata = {
  title: 'Askma',
  description: 'Askma',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/askma-logo.PNG" />
      </head>
      <body>
        <Providers session={session}>
          <SidebarProvider>
            <Header />
            <Sidebar />
          </SidebarProvider>
          {children}
        </Providers>
      </body>
    </html>
  );
}
