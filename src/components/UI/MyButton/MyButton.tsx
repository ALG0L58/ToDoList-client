import { FC } from "react";

interface MyButtonProps {
    onHandler?: (e:any) => void
    children?: React.ReactNode
}

const MyButton:FC<MyButtonProps> = ({children, onHandler}) => {
    return (
        <button onClick={onHandler}>
            {children}
        </button>
    );
};

export default MyButton;