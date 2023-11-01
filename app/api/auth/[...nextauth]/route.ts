import NextAuth, { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import GoogleProvider from "next-auth/providers/google"
//@ts-ignore
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Email"

                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password"

                }
            },
            async authorize(credentials){
                const user = await prismadb.user.findUnique({
                    //@ts-ignore
                    where: { 
                        email: credentials?.email
                    }
                })
                if (!user) throw new Error("User not found")
                if (!user.hashed_password) throw new Error("User has no password")
                if (!credentials?.password) throw new Error("No password provided")
                if (!credentials?.email) throw new Error("No email provided")
                if (credentials?.email !== user.email) throw new Error("Email does not match")
                if (!user.hashed_password) throw new Error("User has no password")

                const isMatch = await bcrypt.compare(credentials?.password, user.hashed_password)
                if (!isMatch) throw new Error("Password is incorrect")
                return user;
            }
        })
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
    pages: {
        newUser: "/sigin-up",
        signIn: "/sigin-in",
        error: "/error",
        signOut: "/",
        verifyRequest: "/",
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}
