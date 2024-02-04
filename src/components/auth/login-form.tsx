import { AuthBox, AuthButton, AuthChanger, AuthFormWrapper, AuthHeadingWrapper, AuthLabel, AuthTagline, AuthTitle, FieldsWrapper } from "@/styles/auth"
import UI_Input from "@/components/ui/ui-input"
import Link from "next/link"
import { Email, Password } from "../icon"
import { useState } from "react"
import { signIn } from "next-auth/react"
import useFormState from "@/hooks/useFormState"
import useMessage from "@/hooks/useMessage"
import { ResponseErrors } from "@/common/errors"
import { useRouter } from "next/router"
import { GiConsoleController } from "react-icons/gi"

type FormState = {
    username: string;
    password: string;
}
export const LoginForm: React.FC = (): JSX.Element => {
    const initialState = { username: '', password: '' }
    const rules = { required: ['username', 'password'] };
    const { form, setValue, check, formRules } = useFormState<FormState>(initialState, rules)
    const { username, password } = form;
    const [loading, setLoading] = useState(false);
    const message = useMessage()
    const router = useRouter();

    const onEnterClick = (e) => e.keyCode == 13 && onSubmit();
    const onSubmit = async () => {
        if (!check()) return;
        setLoading(true);
        const response = await signIn(
            'credentials',
            {
                username: username,
                password: password,
                redirect: false
            } as { username: string, password: string, redirect: boolean })

        if (response?.ok) {
            message.success("you have been signed in successfully")
            router.push('/dashboard');
        } else {
            if (response?.error) {
                message.error(ResponseErrors[response?.error])
            }
        }
        setLoading(false);
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
                    <UI_Input {...formRules.username} prefix={<Email color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Email or Username" onChange={(e) => setValue('username', e?.target?.value)} />
                </FieldsWrapper>
                <FieldsWrapper >
                    <AuthLabel>Password</AuthLabel>
                    <UI_Input {...formRules.password} prefix={<Password color="#bcbcbc" size={18} right={5} />} placeholder="Enter Your Password" type="password" onChange={(e) => setValue('password', e?.target?.value)} onKeyDown={onEnterClick} />
                </FieldsWrapper>
                <AuthButton loading={loading} onClick={onSubmit}>
                    Login
                </AuthButton>
                <AuthChanger>
                    Don&apos;t have an account? <Link href="/register">Create an account</Link>
                </AuthChanger>
            </AuthFormWrapper>
        </AuthBox>
    )
}