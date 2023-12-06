import { useValidate } from '@/hooks/useValidate';

export default function Input({ ...props }) {
    const inputValidation = useValidate("input", { ...props }) as () => void

    return (
        <>
            {inputValidation()}
        </>
    )
}