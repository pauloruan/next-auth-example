import { useSession } from "next-auth/react"
import Image from "next/image"

export function InfosCard() {
  const { data: session } = useSession()
  return (
    <div className="flex flex-row justify-between items-center bg-stone-300 rounded-md h-32 w-96 m-4 px-2">
      <Image
        src={session?.user?.image as string}
        alt="User Image"
        width={100}
        height={100}
        className="rounded-full mx-4"
        priority
      />
      <div className="flex flex-col justify-center items-start gap-2 w-full h-full">
        <h2 className="text-teal-800 text-2xl font-sans font-bold">{session?.user?.name}</h2>
        <p className="text-teal-800 text-base font-sans font-medium">{session?.user?.email}</p>
      </div>
    </div>
  )
}
