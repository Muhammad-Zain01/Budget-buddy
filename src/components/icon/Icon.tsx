import { MdWindow } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Category: React.FC<any> = props => <MdWindow style={{ marginRight: props.right, fontSize: props.size }} {...props} />
export const Dashboard: React.FC<any> = props => <BiHomeAlt2 style={{ marginRight: props.right, fontSize: props.size }} {...props} />
export const Transaction: React.FC<any> = props => <GrTransaction style={{ marginRight: props.right, fontSize: props.size }} {...props} />
export const Account: React.FC<any> = props => <MdAccountBalanceWallet style={{ marginRight: props.right, fontSize: props.size }} {...props} />
export const Github: React.FC<any> = props => <FaGithub style={{ marginRight: props.right, fontSize: props.size }} {...props} />
export const LinkedIn: React.FC<any> = props => <FaLinkedin style={{ marginRight: props.right, fontSize: props.size }} {...props} />