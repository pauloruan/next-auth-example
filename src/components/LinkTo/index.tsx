import Link from "next/link"

export type LinkToProps = {
  to: string
  text: string
}

export function LinkTo({ to, text }: LinkToProps) {
  return (
    <Link href={to} className="text-teal-300 hover:text-teal-600 underline text-base font-mono font-semibold">
      {text}
    </Link>
  )
}
