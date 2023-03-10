import prisma from "@/db/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    async session({ session, user }) {
      console.log("session", session)
      console.log("user", user)
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id.toString()
        }
      }
    },
    async signIn({ account, profile }: any) {
      console.log("account", account)
      console.log("profile", profile)
      if (account?.provider === "google") {
        return profile?.email_verified && profile?.email.endsWith("@gmail.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    }
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: process.env.JWT_SECRET as string,
  },
}

export default NextAuth(authOptions)
