import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
})