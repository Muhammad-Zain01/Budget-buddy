import prisma from "@/lib/db";
import { CategoryType } from "@prisma/client";
export const getAllUserCategories = async (userId) => {
    return await prisma.category.findMany({
        where: {
            OR: [{ isPrimary: true }, { userId: userId }]
        },
        select: {
            id: true,
            isPrimary: true,
            categoryName: true,
            categoryType: true,
            icon: true,
            status: true,
        },

    })
}


export type AddCategoryType = {
    icon: string;
    categoryName: string;
    categoryType: CategoryType;
    userId: number;
}
export const addCategory = async (data: AddCategoryType) => {
    return await prisma.category.create({
        data,
        select: {
            id: true,
            isPrimary: true,
            categoryName: true,
            categoryType: true,
            icon: true,
            status: true,
        },
    })
}
