import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export function GoogleButton() {
  return (
    <button
      type="button"
      className="text-black bg-white outline-none font-medium font-mono rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
      onClick={() => signIn("google")}
    >
      <FcGoogle className="w-5 h-5 mr-4" />
      Entrar com Google
    </button>
  )
}
