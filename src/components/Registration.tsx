import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { registration } from "../store/reducers/ActionCreators";
import '../styles/App/components/Registration/Registration.css'
import { IUser } from "../types/IUser";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";


const Registration:FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const addNewUser = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()

        const newUser: IUser = {
            email,
            password
        }
        
        registration(newUser)
        setEmail('')
        setPassword('')
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
                    onHandler={(e) => addNewUser(e)}
                >
                    Continue 
                </MyButton>
                <Link to="/login" className="registration-or-login-form__link">Sign in</Link>
            </div>
        </form>
    );
};

export default Registration;