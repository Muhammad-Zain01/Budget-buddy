import { AuthBox, AuthButton, AuthChanger, AuthFormWrapper, AuthHeadingWrapper, AuthLabel, AuthTagline, AuthTitle, FieldsWrapper } from "@/styles/auth"
import UI_Input from "@/components/ui/ui-input"
import Link from "next/link"
import { useState } from "react";
import { Email, Password, UserOutlined } from "../icon";
import { createUser } from "@/api/request";
import useMessage from "@/hooks/useMessage";
import { useRouter } from "next/router";
import useFormState from "@/hooks/useFormState";

type FormState = {
    name: string;
    username: string;
    email: string;
    password: string;
}

export const RegisterForm: React.FC = (): JSX.Element => {
    const message = useMessage();
    const router = useRouter();
    const initialState = { name: "", email: "", username: "", password: "" };
    const rules = {
        required: ['name', 'email', 'username', 'password'],
    };
    const { form, check, setValue, formRules } = useFormState<FormState>(initialState, rules);
    const { name, username, email, password } = form;

    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async () => {
        if(!check()) return;

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
        if (response?.status) {
            message.success('Account Created Successfully')
            router.push('/login')
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
                    <UI_Input  {...formRules?.name} prefix={<UserOutlined color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Full Name" onChange={(e) => { setValue('name', e.target.value) }} />
                </FieldsWrapper>
                <FieldsWrapper>
                    <AuthLabel>Username</AuthLabel>
                    <UI_Input {...formRules?.username} prefix={<UserOutlined color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Username" onChange={(e) => setValue('username', e.target.value)} />
                </FieldsWrapper>
                <FieldsWrapper>
                    <AuthLabel>Email</AuthLabel>
                    <UI_Input {...formRules?.email} prefix={<Email color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Email" onChange={(e) => setValue('email', e.target.value)} />
                </FieldsWrapper>
                <FieldsWrapper>
                    <AuthLabel>Password</AuthLabel>
                    <UI_Input  {...formRules?.password} prefix={<Password color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Password" type="password" onChange={(e) => setValue('password', e.target.value)} />
                </FieldsWrapper>
                <AuthButton loading={loading} onClick={onSubmit}>
                    Register
                </AuthButton>
                <AuthChanger>
                    Already have an account? <Link href="/login">Login</Link>
                </AuthChanger>
            </AuthFormWrapper>
        </AuthBox >
    )
}