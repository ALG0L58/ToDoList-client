import { FC } from "react";
import { MyButtonProps } from "../../../types/components/UI/MyButton";

const MyButton:FC<MyButtonProps> = ({children, onHandler}) => {
    return (
        <button onClick={onHandler}>
            {children}
        </button>
    );
};

export default MyButton;