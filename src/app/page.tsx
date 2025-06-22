import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import AuthButtons from "./components/AuthButtons"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Next.js + NextAuth アプリ</h1>
      
      {session ? (
        <div>
          <h2>ようこそ {session.user?.name} さん！</h2>
          <p>{session.user?.email}</p>
          <p>ログイン中です</p>
        </div>
      ) : (
        <div>
          <p>ログインしてください</p>
        </div>
      )}
      
      <AuthButtons />
    </div>
  )
}
