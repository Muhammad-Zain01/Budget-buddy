import { Dispatch, SetStateAction, useState } from "react";


type HookReturn = {
    type: string;
    setType: Dispatch<SetStateAction<string>>
    label: string[];

}
const useGridSelection = (items: string[][]) => {
    const [type, setType] = useState<string>('');
    const label = items.find((item) => item[0] == type);
    return { label, type, setType } as HookReturn;
}

export default useGridSelection;