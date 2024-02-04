
const message = import("antd").then(mod => mod.message)

const useMessage = () => {
    const success = async (value: string) => {
        const msg = await message;
        msg.success(value)
    }
    const warning = async (value: string) => {
        const msg = await message;
        msg.warning(value)
    }
    const error = async (value: string) => {
        const msg = await message;
        msg.error(value)
    }
    return { success, warning, error }
}

export default useMessage;