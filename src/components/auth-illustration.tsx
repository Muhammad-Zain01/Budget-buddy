import { AuthBox } from "@/styles/auth"
import Image from "next/image"

type ComponentProps = {
    type: string
}
export const AuthIllustration: React.FC<ComponentProps> = ({ type }) => {
    return (
        <AuthBox>
            {type === 'register' && <Image src={'/assets/illustrations/register.svg'} alt="sign_up" width={600} height={600} />}
            {type === 'login' && <Image src={'/assets/illustrations/register.svg'} alt="sign_up" width={600} height={600} />}
        </AuthBox>
    )
}