import { FC } from "react";
import { MyInputProps } from "../../../types/components/UI/MyInput";

const MyInput:FC<MyInputProps> = ({value, onChange, onBlur, placeholder}) => {
    return (
        <input 
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
        />
    );
};

export default MyInput;
