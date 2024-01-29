import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [Credentials({
    async authorize(credential, req): Promise<any> {
      // const res = await fetch("http://localhost:3000/api/auth/login", {
      //   method: "POST",
      //   body: JSON.stringify(credentials),
      //   headers: { "Content-Type": "application/json" },
      // })
      // const user = await res.json()
      const user = { id: 1, name: "Hamad Ali", email: "captain@gmail.com" }
      if (user) {
        return user
      }
      return null
    }

  })],
  session: {
    maxAge: 365 * 24 * 60 * 60, // 365 days
  }
}) 