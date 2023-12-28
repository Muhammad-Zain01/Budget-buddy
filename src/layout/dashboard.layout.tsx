import { useTheme } from "@/context/theme";
import UI_Button from "@/ui/button";

const DashboardLayout = () => {
    const { setTheme } = useTheme()

    return (
        <div>
            <button onClick={() => {
                setTheme('dark')
            }}>
                dfsdf
            </button>

        </div >
    )
}
export default DashboardLayout;