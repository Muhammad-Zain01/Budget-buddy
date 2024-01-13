import { UserAvatar } from "@/layout/dashboard.style";
import { MenuProps } from "antd";
import UI_Dropdown from "@/ui/components/ui-dropdown";


const UserDropDown: React.FC = (): JSX.Element => {
    const UserMenu: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <p>
                    asdfasdf
                </p>
            ),
        },
    ];
    return (
        <div>
            <UI_Dropdown menu={{ items: UserMenu }} trigger={['click']}>
                <UserAvatar style={{ marginLeft: 50 }} size={42} src={false && "https://api.dicebear.com/7.x/miniavs/svg?seed=30"}>
                    ZM
                </UserAvatar>
            </UI_Dropdown>
        </div>
    )
}

export default UserDropDown;