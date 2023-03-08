import { Inter, Roboto_Mono } from "next/font/google"

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"]
})

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  display: "swap",
  subsets: ["latin"]
})

export type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return <main className={`${inter.variable} ${roboto_mono.variable} min-h-screen w-screen bg-zinc-900`}>{children}</main>
}
