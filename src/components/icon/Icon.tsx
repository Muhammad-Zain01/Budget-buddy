import { MdWindow } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { MdAccountBalanceWallet } from "react-icons/md";


export const Category: React.FC<any> = props => <MdWindow style={{ fontSize: props.size }} {...props} />
export const Transaction: React.FC<any> = props => <GrTransaction style={{ fontSize: props.size }} {...props} />
export const Account: React.FC<any> = props => <MdAccountBalanceWallet style={{ fontSize: props.size }} {...props} />
