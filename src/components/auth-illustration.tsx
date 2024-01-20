import { AuthBox, AuthIllustrationImage } from "@/styles/auth"
import Image from "next/image"

type ComponentProps = {
    type: string
}
export const AuthIllustration: React.FC<ComponentProps> = ({ type }) => {
    return (
        <AuthBox type="illustration">
            {
                type === 'register' &&
                <AuthIllustrationImage
                    src={'/assets/illustrations/two.svg'}
                    alt="sign_up"
                    fill={true}
                />
            }
            {
                type === 'login' &&
                <AuthIllustrationImage
                    src={'/assets/illustrations/two.svg'}
                    alt="sign_in"
                    fill={true}
                />
            }
        </AuthBox>
    )
}