import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export function GitHubButton() {
  return (
    <button
      type="button"
      className="text-black bg-white outline-none font-medium font-mono rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
      onClick={() => signIn("github")}
    >
      <FaGithub className="text-[#24292F] w-5 h-5 mr-4" />
      Entrar com Github
    </button>
  )
}
