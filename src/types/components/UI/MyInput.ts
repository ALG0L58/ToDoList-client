import { MutableRefObject } from "react"

export interface MyInputProps {
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    placeholder?: string 
    className?: string
    id?: string
    autofocus?: boolean
    type?: string
}