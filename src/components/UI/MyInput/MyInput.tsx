import { FC } from "react";
import { MyInputProps } from "../../../types/components/UI/MyInput";
import '../../../styles/App/App.css';

const MyInput:FC<MyInputProps> = ({value, onChange, onKeyUp, placeholder, className, id, autofocus, type}) => {
    return (
        <input 
            className={className}
            value={value}
            onChange={onChange}
            onKeyUp={onKeyUp}
            placeholder={placeholder}
            id={id}
            autoFocus={autofocus}
            type={type}
        />
    );
};

export default MyInput;
