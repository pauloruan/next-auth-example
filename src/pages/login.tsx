import { GitHubButton } from "@/components/GithubButton"
import { GoogleButton } from "@/components/GoogleButton"
import { LinkTo } from "@/components/LinkTo"
import { GetSessionParams, getSession } from "next-auth/react"

export async function getServerSideProps(context: any) {
  const session = await getSession(context as GetSessionParams)
  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}

export default function Login() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-4xl font-sans font-bold uppercase">Login</h1>
      <div className="flex flex-col justify-between items-center gap-4">
        <GitHubButton />
        <GoogleButton />
        <LinkTo to="/" text="Home" />
      </div>
    </div>
  )
}
