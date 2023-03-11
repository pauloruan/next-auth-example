import { GitHubButton } from "@/components/GithubButton"
import { LinkTo } from "@/components/LinkTo"
import { useSession } from "next-auth/react"
import { Inter } from "next/font/google"

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-4xl font-sans font-bold uppercase">Home</h1>
      {
        session?.user && (
          <div className="flex flex-col justify-between items-center gap-4">
            <p className="text-white text-base font-mono font-normal">Bem vindo, {session.user.name}</p>
            <LinkTo to="/me" text="Visualize suas informações" />
          </div>
        )
      }
      {
        !session && (
          <div className="flex flex-col justify-between items-center gap-4">
            <p className="text-white text-base font-mono font-normal">Faça login para visualizar suas informações</p>
            <LinkTo to="/login" text="Login" />
          </div>
        )
      }
    </div>
  )
}
