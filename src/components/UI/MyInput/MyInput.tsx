import { FC } from "react";

interface MyInputProps {
        value: string
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
        placeholder?: string 
}

const MyInput:FC<MyInputProps> = ({value, onChange, placeholder}) => {
    return (
        <input 
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default MyInput;

// (e: React.ChangeEvent<HTMLInputElement>) => string