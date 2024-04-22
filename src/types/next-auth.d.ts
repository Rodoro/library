import NextAuth, { DefaultSession } from "next-auth"
 
declare module "next-auth" {
  interface Session {
    user: {
      role: string | undefined | null
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      role: string | undefined | null
    } & DefaultSession["user"]
  }
}