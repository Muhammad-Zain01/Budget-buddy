import { UserAvatar, UserDropdownList } from "@/styles/dashboard";
import { UI_Text } from "../ui/ui-text";
import { Logout } from "../icon";
import { signOut } from "next-auth/react";

type ComponentProps = {
    data: {
        userId: number;
        name: string;
        email: string;
    } | null;
}
const UserDropDownMenu: React.FC<ComponentProps> = ({ data }): JSX.Element => {
    const name = data?.name;
    const email = data?.email;
    const letter = data?.name.split(' ').map(item => item[0].toUpperCase()).join("");
    return (
        <div style={{ width: 200, paddingTop: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', padding: 8 }}>
                <div>
                    <UserAvatar size={42} src={false && "https://api.dicebear.com/7.x/miniavs/svg?seed=30"}>
                        {letter}
                    </UserAvatar>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
                    <UI_Text style={{ fontSize: 14, fontWeight: 'bold' }}>{name}</UI_Text>
                    <UI_Text style={{ fontSize: 10 }}>{email}</UI_Text>
                </div>
            </div>
            <div style={{ padding: 8 }}>
                <UserDropdownList onClick={signOut}>
                    <Logout right={10} />
                    <UI_Text style={{ fontSize: 14 }}>Logout</UI_Text>
                </UserDropdownList>
            </div>
        </div>
    )
}
export default UserDropDownMenu;