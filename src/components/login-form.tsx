import { AuthBox, AuthButton, AuthChanger, AuthFormWrapper, AuthHeadingWrapper, AuthLabel, AuthTagline, AuthTitle, FieldsWrapper } from "@/styles/auth"
import UI_Input from "@/ui/components/ui-input"
import { UI_Text } from "@/ui/components/ui-text"
import Link from "next/link"
import { Email, Password } from "./icon"
import { useState } from "react"

export const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const resetValues = () => {
        setUsername('');
        setPassword('');
    }
    
    const onSubmit = () => {
        console.log("username", username)
        console.log("password", password)
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