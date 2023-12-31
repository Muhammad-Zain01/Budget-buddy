import { MdWindow } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Category: React.FC<any> = props => <MdWindow style={{ fontSize: props.size }} {...props} />
export const Dashboard: React.FC<any> = props => <BiHomeAlt2 style={{ fontSize: props.size }} {...props} />
export const Transaction: React.FC<any> = props => <GrTransaction style={{ fontSize: props.size }} {...props} />
export const Account: React.FC<any> = props => <MdAccountBalanceWallet style={{ fontSize: props.size }} {...props} />
export const Github: React.FC<any> = props => <FaGithub style={{ fontSize: props.size }} {...props} />
export const LinkedIn: React.FC<any> = props => <FaLinkedin style={{ fontSize: props.size }} {...props} />