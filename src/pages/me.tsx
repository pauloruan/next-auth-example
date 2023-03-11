import { InfosCard } from "@/components/InfosCard"
import { LinkTo } from "@/components/LinkTo"
import { SignOutButton } from "@/components/SignOutButton"
import { GetSessionParams, getSession } from "next-auth/react"

export async function getServerSideProps(context: any) {
  const session = await getSession(context as GetSessionParams)
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}

export default function Me() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-4xl font-sans font-bold uppercase">Me :)</h1>
      <div className="flex flex-col justify-between items-center gap-4">
        <InfosCard />
        <div className="flex flex-row justify-between items-center gap-4">
          <LinkTo to="/" text="Home" />
          <SignOutButton />
        </div>
      </div>
    </div>
  )
}
