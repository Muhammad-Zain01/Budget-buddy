import { AuthIllustration } from "@/components/auth/auth-illustration"
import { LoginForm } from "@/components/auth/login-form"
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

export default LoginPage