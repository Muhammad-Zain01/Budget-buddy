import { AuthIllustration } from "@/components/auth/auth-illustration"
import { LoginForm } from "@/components/auth/login-form"
import { RedirectToDashboard, getUserSession } from "@/lib/auth"
import { AuthContainer, AuthWrapper } from "@/styles/auth"
import { NextPage } from "next"

const LoginPage: NextPage = (): JSX.Element => {
    return (
        <AuthWrapper>
            <AuthContainer>
                <AuthIllustration type='register' />
                <LoginForm />
            </AuthContainer>
        </AuthWrapper>
    )
}

export async function getServerSideProps(context) {
    const session = await getUserSession(context);
    if (session) return RedirectToDashboard;
    return { props: {} }
}

export default LoginPage