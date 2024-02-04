import { useState } from "react";


export type FormRules = {
    [key: string]: {
        validateStatus?: 'error' | 'success' | 'warning' | 'validating',
        help?: string;
    }
}
type HookReturn<FormState> = {
    form: FormState;
    reset: () => void;
    setValue: <FormValue>(key: string, value: FormValue) => void
    check: () => boolean;
    formRules?: FormRules | {}
}

type Rules = {
    required: string[]
}

const useFormState = <FormState extends {}>(initialState: FormState, rules: Rules) => {
    const [form, setFormState] = useState<FormState>(initialState);
    const [formRules, setRules] = useState<FormRules>({})
    const reset = () => { setFormState(initialState) };
    const setValue = <FormValue>(key: string, value: FormValue) => { setFormState({ ...form, [key]: value }) }
    const check = () => {
        let isPassed: boolean = true;
        rules.required.map((item) => {
            if (form && form[item].trim() == '') {
                setRules(prevRules => ({ ...prevRules, [item]: { validateStatus: 'error', help: `This field is mandantory` } }))
                isPassed = false;
            } else {
                setRules(prevRules => ({ ...prevRules, [item]: { validateStatus: 'success' } }))
            }
        })
        return isPassed
    }
    return { form, reset, setValue, check, formRules } as HookReturn<FormState>;
}

export default useFormState;