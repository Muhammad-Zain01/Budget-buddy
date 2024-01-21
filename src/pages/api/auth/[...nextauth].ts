import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { VerifyPassword } from "../../../../lib/auth"
import prisma from "../../../../lib/db"

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
                const data = await prisma.user.findFirst({
                    where: {
                        OR: [{ username: username }, { email: username }]
                    },
                    select: { id: true, username: true, email: true, password: true }
                })
                if (!data) {
                    throw new Error('NOT_FOUND');
                }
                const hashedPassword = data?.password
                const isUser = await VerifyPassword(password, hashedPassword)
                if (isUser) {
                    return { userId: data?.id, value: 'test', email: data?.email }
                }

                throw new Error('WRONG_PASSWORD');
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
}

const handler = NextAuth(authOptions);
export default handler;
