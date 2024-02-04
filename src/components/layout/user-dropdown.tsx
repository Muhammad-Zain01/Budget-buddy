import { UserAvatar } from "@/styles/dashboard";
import { MenuProps } from "antd";
import UI_Dropdown from "@/components/ui/ui-dropdown";
import UserDropDownMenu from "./user-dropdown-menu";
import { useSession } from "next-auth/react";


const UserDropDown: React.FC = (): JSX.Element => {
    const session = useSession();
    const data = session?.data?.user;
    const letter = data?.name.split(' ').map(item => item[0].toUpperCase()).join("");
    
    const UserMenu: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <UserDropDownMenu data={data} />
            ),
        },
    ];
    return (
        <div>
            <UI_Dropdown menu={{ items: UserMenu }} trigger={['click']}>
                <UserAvatar size={42} src={false && "https://api.dicebear.com/7.x/miniavs/svg?seed=30"}>
                    {letter}
                </UserAvatar>
            </UI_Dropdown>
        </div>
    )
}

export default UserDropDown;