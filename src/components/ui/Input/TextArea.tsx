import { useValidate } from '@/hooks/useValidate';

export default function TextArea({ ...props }) {
    const inputValidation = useValidate("textarea", { ...props }) as () => void

    return (
        <>
            {inputValidation()}
        </>
    )
}
