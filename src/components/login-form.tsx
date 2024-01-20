import { AuthBox, AuthFormWrapper } from "@/styles/auth"
import UI_Button from "@/ui/components/ui-button"
import UI_Input from "@/ui/components/ui-input"
import { UI_Text } from "@/ui/components/ui-text"
import UI_Title from "@/ui/components/ui-title"
import Link from "next/link"

export const LoginForm: React.FC = () => {
    return (
        <AuthBox>
            <AuthFormWrapper>
                <UI_Title>Log in to your Account</UI_Title>
                <UI_Text>Welcome back! Select method to log in:</UI_Text>
                <UI_Button type="primary" style={{ width: "100%" }}>
                    Login In With google
                </UI_Button>
                <div>
                    <UI_Text>Email</UI_Text>
                    <UI_Input placeholder="Enter Your Email" />
                </div>
                <div>
                    <UI_Text>Password</UI_Text>
                    <UI_Input placeholder="Enter Your Password" type="password" />
                </div>
                <UI_Button type="primary" style={{ width: "100%" }}>
                    Login
                </UI_Button>

                <UI_Text>
                    Don&apos;t have an account? <Link href="/register">Create an account</Link>
                </UI_Text>
            </AuthFormWrapper>
        </AuthBox>
    )
}