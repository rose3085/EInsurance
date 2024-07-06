import './Login.css';
import {useState} from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import cancel from '../Icons/CancelButton.png';
import { useForm } from "react-hook-form";
import { useLogin } from '../../Services/api/authApi';
const Login = () =>
{
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const { minCover } = location.state || {};

    const { mutate } = useLogin();
    const submitUserData = async (data) => {
        mutate(data);
        navigate('/khalti', { state: { minCover } });
    };

    
    const navigate = useNavigate();
    const handlePageChange = () =>
    {
        navigate("/SignUp");
    }

    const handleCancel = () =>
    {
        navigate("/");
    }


    return (
        <section className="loginMain">
            <div className="mainComponent">
                <div className="headerComponent">
                    {/* <div className="logo">
                    <img src={logo}  alt="" width="120px" height='70px' id='checked'/> 
                    </div> */}
                    <div className="cancelButton" onClick={handleCancel}>
                    <img src={cancel}  alt="" height='25px' id='checked'/> 
                    </div>
                   
                </div>
            <div className="loginComponents">
                <div className="loginLogo">
                <div className="handsLogo">
                            <img src='https://cdn.iconscout.com/icon/free/png-512/free-healthcare-1795430-1522795.png?f=webp&w=256'  alt="" height='100px' id='checked'/> 
        </div>
        <p className="quotes">The best time to get insurance <br/> is before you need it.</p>
                </div>
            <div className="loginForm">
                <p className="welcomeBack">Welcome Back</p>
                <p className="loginInfo">Log in your account</p>
                        <form onSubmit={handleSubmit(submitUserData)}>
                    <div className="email">
                        <label>
                            <input className="enterEmail" type="email" 
                                        placeholder="Enter your email" {...register("email")} />
                        </label>
                    </div>
                    <div className="password">
                        <label>
                            <input className="enterPassword" type="password"
                                        placeholder="Enter your password" {...register("password")} />
                        </label>
                    </div>
                    <div className="submitButton">
                        <button className="button" type="submit">Continue</button>
                    </div>
                    
                </form>
                <div className="toggleRegister">
                    <p className="noAccount"> Don't have an account?
                    <div className="navSignUp" onClick={handlePageChange}>SignUp</div>
                    </p>
                </div>
            </div></div>
            </div>
        </section>
    );
}

export default Login;