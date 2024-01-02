
// type ComponentProps = {
//     key: string;
//     size: number;
// }
// const Icon: React.FC<ComponentProps> = ({ key, size }) => {
//     return <Image src="" />
// }



import { MdWindow } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { IoMdCash } from "react-icons/io";

export const IconComponent: React.FC<any> = ({ Component, props }) => (<Component style={{ marginRight: props.right, fontSize: props.size }} {...props} />)

export const Category: React.FC<any> = props => <IconComponent Component={MdWindow} props={props} />
export const Dashboard: React.FC<any> = props => <IconComponent Component={BiHomeAlt2} props={props} />
export const Transaction: React.FC<any> = props => <IconComponent Component={GrTransaction} props={props} />
export const Account: React.FC<any> = props => <IconComponent Component={MdAccountBalanceWallet} props={props} />
export const Github: React.FC<any> = props => <IconComponent Component={FaGithub} props={props} />
export const LinkedIn: React.FC<any> = props => <IconComponent Component={FaLinkedin} props={props} />

export const ShowIcon: React.FC<any> = props => <IconComponent Component={FaEye} props={props} />
export const HiddenIcon: React.FC<any> = props => <IconComponent Component={IoMdEyeOff} props={props} />

export const User: React.FC<any> = props => <IconComponent Component={FaUser} props={props} />
export const Food: React.FC<any> = props => <IconComponent Component={IoFastFood} props={props} />
export const Transport: React.FC<any> = props => <IconComponent Component={MdOutlineEmojiTransportation} props={props} />
export const Bank: React.FC<any> = props => <IconComponent Component={AiFillBank} props={props} />
export const Cash: React.FC<any> = props => <IconComponent Component={IoMdCash} props={props} />


export const Icons: React.FC<{ icon: string }> = ({ icon }) => {
    const IconKeys: any = {
        'user': <User size={25} />,
        'food': <Food size={25} />,
        'transport': <Transport size={25} />,
        'bank': <Bank size={35} />,
        'cash': <Cash size={35} />,
    }
    return IconKeys[icon]
}