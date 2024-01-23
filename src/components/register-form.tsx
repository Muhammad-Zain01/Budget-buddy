import { AuthBox, AuthButton, AuthChanger, AuthFormWrapper, AuthHeadingWrapper, AuthLabel, AuthTagline, AuthTitle, FieldsWrapper } from "@/styles/auth"
import UI_Input from "@/ui/components/ui-input"
import Link from "next/link"
import { useState } from "react";
import { Email, Password, UserOutlined } from "./icon";
import { createUser } from "@/api/request";

export const RegisterForm: React.FC = (): JSX.Element => {
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const resetValues = () => {
        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
    }

    const onSubmit = async () => {
        const data = {
            name,
            username,
            email,
            password,
        } as {
            name: string;
            username: string;
            email: string;
            password: string;
        };

        setLoading(true);
        const response = await createUser(data)
        console.log(response)
        if (response?.status) {

        }
        setLoading(false);
    }
    return (
        <AuthBox>
            <AuthFormWrapper>
                <AuthHeadingWrapper>
                    <AuthTitle level={2}>Sign up for an account</AuthTitle>
                    <AuthTagline>Welcome back! Select method to log in:</AuthTagline>
                </AuthHeadingWrapper>
                <FieldsWrapper>
                    <AuthLabel>Name</AuthLabel>
                    <UI_Input prefix={<UserOutlined color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Full Name" onChange={(e) => { setName(e.target.value) }} />
                </FieldsWrapper>
                <FieldsWrapper>
                    <AuthLabel>Username</AuthLabel>
                    <UI_Input prefix={<UserOutlined color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Username" onChange={(e) => setUsername(e.target.value)} />
                </FieldsWrapper>
                <FieldsWrapper>
                    <AuthLabel>Email</AuthLabel>
                    <UI_Input prefix={<Email color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                </FieldsWrapper>
                <FieldsWrapper>
                    <AuthLabel>Password</AuthLabel>
                    <UI_Input prefix={<Password color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                </FieldsWrapper>
                <AuthButton loading={loading} onClick={onSubmit}>
                    Register
                </AuthButton>
                <AuthChanger>
                    Already have an account? <Link href="/login">Login</Link>
                </AuthChanger>
            </AuthFormWrapper>
        </AuthBox>
    )
}