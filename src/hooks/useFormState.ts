import { useEffect, useState } from "react";

type HookReturn<FormState> = {
    form: FormState;
    reset: () => void;
    setValue: <FormValue>(key: string, value: FormValue) => void
}

const useFormState = <FormState extends {}>(initialState: FormState) => {
    const [form, setFormState] = useState<FormState>(initialState);
    const reset = () => { setFormState(initialState) };
    const setValue = <FormValue>(key: string, value: FormValue) => { setFormState({ ...form, [key]: value }) }
    return { form, reset, setValue } as HookReturn<FormState>;
}

export default useFormState;