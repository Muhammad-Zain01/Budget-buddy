
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

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaWallet } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSavings } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { FaGear } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { BsFillTrash3Fill } from "react-icons/bs";

import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";

import styled from "styled-components";
import Image from "next/image";
import React from "react";

const IconImage = styled(Image)`
    ${props => props.theme.theme === 'dark' && "filter: brightness(0) invert(1);"}
`
type ComponentProps = {
    icon: string;
    size: number;
    style?: React.CSSProperties
}
export const Icon: React.FC<ComponentProps> = ({ icon, size, style }) => {
    return <IconImage src={`/assets/icons/${icon}.png`} alt={icon} style={style} width={size} height={size} />
}



export const IconComponent: React.FC<any> = ({ Component, props }) => (<Component style={{ transition: 'none', marginRight: props.right,marginLeft: props.left, color: props.color, fontSize: props.size, ...props.style }} {...props} />)


export const Email: React.FC<any> = props => <IconComponent Component={MdOutlineEmail} props={props} />
export const Password: React.FC<any> = props => <IconComponent Component={RiLockPasswordLine} props={props} />
export const UserOutlined: React.FC<any> = props => <IconComponent Component={FaRegCircleUser} props={props} />


export const LightMode: React.FC<any> = props => <IconComponent Component={MdOutlineLightMode} props={props} />
export const DarkMode: React.FC<any> = props => <IconComponent Component={MdOutlineDarkMode} props={props} />
export const Goals: React.FC<any> = props => <IconComponent Component={GoGoal} props={props} />
export const Settings: React.FC<any> = props => <IconComponent Component={FaGear} props={props} />
export const Insights: React.FC<any> = props => <IconComponent Component={FaChartSimple} props={props} />
export const Expense: React.FC<any> = props => <IconComponent Component={GiTakeMyMoney} props={props} />
export const Wallet: React.FC<any> = props => <IconComponent Component={FaWallet} props={props} />
export const Income: React.FC<any> = props => <IconComponent Component={GiReceiveMoney} props={props} />
export const Savings: React.FC<any> = props => <IconComponent Component={MdSavings} props={props} />
export const Category: React.FC<any> = props => <IconComponent Component={MdWindow} props={props} />
export const Dashboard: React.FC<any> = props => <IconComponent Component={BiHomeAlt2} props={props} />
export const Transaction: React.FC<any> = props => <IconComponent Component={GrTransaction} props={props} />
export const Account: React.FC<any> = props => <IconComponent Component={MdAccountBalanceWallet} props={props} />
export const Github: React.FC<any> = props => <IconComponent Component={FaGithub} props={props} />
export const LinkedIn: React.FC<any> = props => <IconComponent Component={FaLinkedin} props={props} />

export const ShowIcon: React.FC<any> = props => <IconComponent Component={FaEye} props={props} />
export const HiddenIcon: React.FC<any> = props => <IconComponent Component={IoMdEyeOff} props={props} />
export const Delete: React.FC<any> = props => <IconComponent Component={BsFillTrash3Fill} props={props} />

export const User: React.FC<any> = props => <IconComponent Component={FaUser} props={props} />
export const Food: React.FC<any> = props => <IconComponent Component={IoFastFood} props={props} />
export const Transport: React.FC<any> = props => <IconComponent Component={MdOutlineEmojiTransportation} props={props} />
export const Bank: React.FC<any> = props => <IconComponent Component={AiFillBank} props={props} />
export const Cash: React.FC<any> = props => <IconComponent Component={IoMdCash} props={props} />
export const Dots: React.FC<any> = props => <IconComponent Component={BsThreeDotsVertical} props={props} />


