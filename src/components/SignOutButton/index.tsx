import { signOut } from "next-auth/react"

export function SignOutButton() {
  return (
    <button
      className="bg-teal-900 hover:bg-teal-500 text-white text-base font-sans font-bold rounded-md px-4 py-2"
      onClick={() => signOut()}
    >
      Sair
    </button>
  )
}
