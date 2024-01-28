import { UserAvatar, UserDropdownList } from "@/styles/dashboard";
import { UI_Text } from "../ui/ui-text";
import { Logout } from "../icon";
import { signOut } from "next-auth/react";

const UserDropDownMenu = () => {
    const LogoutUser = () => {
        signOut();
        window.location.reload();
    }
    return (
        <div style={{ width: 200, paddingTop: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', padding: 8 }}>
                <div>
                    <UserAvatar size={42} src={false && "https://api.dicebear.com/7.x/miniavs/svg?seed=30"}>
                        ZM
                    </UserAvatar>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
                    <UI_Text style={{ fontSize: 14, fontWeight: 'bold' }}>Zain Memon</UI_Text>
                    <UI_Text style={{ fontSize: 10 }}>zain.verge@gmail.com</UI_Text>
                </div>
            </div>
            <div style={{ padding: 8 }}>
                <UserDropdownList onClick={() => signOut()}>
                    <Logout right={10} />
                    <UI_Text style={{ fontSize: 14 }}>Logout</UI_Text>
                </UserDropdownList>
            </div>
        </div>
    )
}
export default UserDropDownMenu;