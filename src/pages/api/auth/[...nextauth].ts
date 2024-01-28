import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { VerifyPassword } from "@/lib/auth"
import prisma from "@/lib/db"
import { getUser } from "@/db/user"

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            name: 'cred',
            credentials: {},
            async authorize(credentials) {
                const { username, password } = credentials as { username: string, password: string }
                const data = await getUser(username);
                if (!data) {
                    throw new Error('NOT_FOUND');
                }
                const hashedPassword = data?.password
                const isUser = await VerifyPassword(password, hashedPassword)
                if (isUser) {
                    return { userId: data?.id, value: 'test', email: data?.email }
                }
                throw new Error('WRONG_PASSWORD');
            },


        })
    ],
    callbacks: {
        async session({ session, user, token }) {
            let return_data = { userId: 0, name: "", email: '' };
            const email = token?.email;
            if (email) {
                const data = await getUser(email);
                if (data) {
                    return_data.userId = data?.id;
                    return_data.name = data?.name;
                    return_data.email = email;
                }
            }
            return return_data
        },
    },
    pages: {
        signIn: '/login'
    }
}

const handler = NextAuth(authOptions);
export default handler;
