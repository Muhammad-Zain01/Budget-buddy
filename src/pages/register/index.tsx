import { AuthIllustration } from "@/components/auth-illustration";
import { RegisterForm } from "@/components/register-form";
import { AuthContainer, AuthWrapper } from "@/styles/auth";
import { NextPage } from "next";

const RegisterPage: NextPage = () => {
    return (
        <AuthWrapper>
            <AuthContainer>
                <AuthIllustration type='register' />
                <RegisterForm />
            </AuthContainer>
        </AuthWrapper>
    )
}

export default RegisterPage