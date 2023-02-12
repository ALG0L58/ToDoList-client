import {FC, useState} from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { login } from "../store/reducers/ActionCreators";
import '../styles/App/components/Registration/Registration.css'
import { IUser } from "../types/IUser";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const Login:FC = () => {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authorization = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()

        const user: IUser = {
            email,
            password
        }

        dispatch(login(user))
    }

    return (
        <form className="registration-or-login-form">
            <div className="registration-or-login-form__avatar">
                <img src="avatar20.jpg" alt="stalker" />
            </div>
            <div className="registration-or-login-form__content">
                <MyInput 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='example@gmail.com'
                    className="registration-or-login-form__input"
                    autofocus={true}
                />
                <MyInput 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password'
                    type='password'
                    className="registration-or-login-form__input"
                />
                <MyButton
                    className="registration-or-login-form__button"
                    onHandler={(e) => authorization(e)}
                >
                    Sign in
                </MyButton>
                <Link to="/registration" className="registration-or-login-form__link">Create account</Link>
            </div>
        </form>
    );
};

export default Login;