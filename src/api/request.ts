export const createUser = async (
    data: {
        name: string;
        username: string;
        email: string;
        password: string;
    }
) => {
    const response = await fetch("/api/auth/signup", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    return result
}