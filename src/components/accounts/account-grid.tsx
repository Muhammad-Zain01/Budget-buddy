import { AccountGridLabel, AccountIconDiv } from "@/styles/account"
import { Icon } from "../icon"

type ComponentProps = {
    item: string[];
    selected: string;
    onClick: (value: string[]) => void;
}
const AccountGrid: React.FC<ComponentProps> = ({ item, selected, onClick }): JSX.Element => {
    return (
        <AccountIconDiv key={item[0]} $isSelected={selected == item[0] ? true : false} onClick={() => onClick(item)}>
            <Icon icon={item[0]} size={40} />
            <AccountGridLabel>{item[1]}</AccountGridLabel>
        </AccountIconDiv>
    )
}

export default AccountGrid;