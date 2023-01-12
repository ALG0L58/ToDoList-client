import { FC } from "react";
import { MyInputProps } from "../../../types/components/UI/MyInput";
import '../../../styles/App/App.css';

const MyInput:FC<MyInputProps> = ({value, onChange, onBlur, placeholder, className, id}) => {
    return (
        <input 
            className={className}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            id={id}
        />
    );
};

export default MyInput;
