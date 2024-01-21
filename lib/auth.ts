import { hash, compare } from 'bcryptjs'

export async function HashPassword(password: string) {
    try {
        return await hash(password, 12)
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

export async function VerifyPassword(password: string, hashedPassword: string) {
    try {
        return await compare(password, hashedPassword);
    } catch (error) {
        throw new Error('Error Comparies Passwords');
    }
}