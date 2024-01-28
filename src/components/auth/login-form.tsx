import { AuthBox, AuthButton, AuthChanger, AuthFormWrapper, AuthHeadingWrapper, AuthLabel, AuthTagline, AuthTitle, FieldsWrapper } from "@/styles/auth"
import UI_Input from "@/components/ui/ui-input"
import Link from "next/link"
import { Email, Password } from "../icon"
import { useState } from "react"
import { signIn } from "next-auth/react"

export const LoginForm: React.FC = (): JSX.Element => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const resetValues = () => {
        setUsername('');
        setPassword('');
    }


    const onSubmit = async () => {
        // VALIDATIONS
        const response = await signIn(
            'credentials',
            {
                username: username,
                password: password,
                redirect: false
            } as { username: string, password: string, redirect: boolean })

        console.log("response", response)
        // console.log("username", username)
        // console.log("password", password)
    }
    return (
        <AuthBox>
            <AuthFormWrapper>
                <AuthHeadingWrapper>
                    <AuthTitle level={2}>Log in to your Account</AuthTitle>
                    <AuthTagline>Welcome back! Select method to log in:</AuthTagline>
                </AuthHeadingWrapper>
                <FieldsWrapper>
                    <AuthLabel>Email or Username</AuthLabel>
                    <UI_Input prefix={<Email color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Email or Username" onChange={(e) => setUsername(e?.target?.value)} />
                </FieldsWrapper>
                <FieldsWrapper >
                    <AuthLabel>Password</AuthLabel>
                    <UI_Input prefix={<Password color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Password" type="password" onChange={(e) => setPassword(e?.target?.value)} />
                </FieldsWrapper>
                <AuthButton onClick={onSubmit}>
                    Login
                </AuthButton>
                <AuthChanger>
                    Don&apos;t have an account? <Link href="/register">Create an account</Link>
                </AuthChanger>
            </AuthFormWrapper>
        </AuthBox>
    )
}