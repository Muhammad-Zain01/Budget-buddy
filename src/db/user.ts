import prisma from "@/lib/db";

export const getUser = async (username: string) => {
    return await prisma.user.findFirst({
        where: {
            OR: [{ username: username }, { email: username }]
        },
        select: { id: true, name: true, username: true, email: true, password: true }
    })
}