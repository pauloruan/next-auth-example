import prisma from "@/db/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    })
  ],
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id.toString()
        }
      }
    }
  }
}

export default NextAuth(authOptions)
