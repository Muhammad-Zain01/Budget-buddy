import { UserAvatar } from "@/styles/dashboard";
import { MenuProps } from "antd";
import UI_Dropdown from "@/components/ui/ui-dropdown";
import UserDropDownMenu from "./user-dropdown-menu";


const UserDropDown: React.FC = (): JSX.Element => {
    const UserMenu: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <UserDropDownMenu />
            ),
        },
    ];
    return (
        <div>
            <UI_Dropdown menu={{ items: UserMenu }} trigger={['click']}>
                <UserAvatar size={42} src={false && "https://api.dicebear.com/7.x/miniavs/svg?seed=30"}>
                    ZM
                </UserAvatar>
            </UI_Dropdown>
        </div>
    )
}

export default UserDropDown;