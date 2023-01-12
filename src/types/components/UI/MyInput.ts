export interface MyInputProps {
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    placeholder?: string 
    className?: string
    id?: string
}