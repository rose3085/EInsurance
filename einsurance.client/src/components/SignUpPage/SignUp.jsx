import { useState, useEffect } from 'react';
import './SignUp.css';
import hand from '../Icons/familyInsurance.png';
import logo from '../Icons/EInsuranceLogo.png';
import cancel from '../Icons/CancelButton.png';
import { useNavigate } from 'react-router-dom';
import right from '../Icons/right.png';
import { useForm } from 'react-hook-form';
import { useSignUp } from '../../Services/api/authApi';

const SignUp = () => {

    const [name, setName] = useState('');
    const { register, handleSubmit } = useForm();

    const { mutate } = useSignUp();

    const SignUpRegisterAdmin = async (data) => {
        if (data.password !== data.confirmPassword) {
            console.log("Passwords do not match");
            return;
        }
        mutate(data);
    };
    const navigate = useNavigate();
    const handlePageChange = (event) => {
        event.preventDefault();
        navigate("/EnterEmail");
    }
    const handleLoginPageChange = () => {
        navigate("/Login");
    }

    const handleCancel = () => {
        navigate("/");
    }


    return (
        <section className="signUpMain">

            <div className="mainComponent">

                <div className="headerComponent">
                    {/* <div className="logo">
                    <img src={logo}  alt="" height='70px' id='checked'/> 
                    </div> */}
                    <div className="cancelsButton" onClick={handleCancel}>
                        <img src={cancel} alt="" height='25px' id='checked' />
                    </div>

                </div>
                <div className="signUpComponents">

                    <div className="signUpForm">
                        <p className="welcome">Welcome </p>
                        <p className="createAccountInfo">Create an account</p>
                        <form className="signUp" onSubmit={handleSubmit(SignUpRegisterAdmin)}>
                            <div className="name">
                                <label className="text-[18px] mr-2">UserName</label>
                                

                                <input className="enterFirstName" type="text"
                                        placeholder="Enter your Name" {...register("name", { required: "name is requried" })} />
                               

                            </div>
                            <div className="name">
                                <label className="mr-5 text-[18px]">Email</label>
                                <input className="enterLastName ml-7" type="email"
                                    placeholder="Enter your email" {...register("email", { required: "Email is requried" })} />

                            </div>
                            <div className="name">
                                <label className="mr-4 text-[18px]">Password</label>
                                <input className="enterLastName" type="password"
                                    placeholder="6 characters| 1 Capital |1 symbol"  {...register("password", {
                                        required: "Password is requried.",
                                    })} />

                            </div>
                            <div className="name flex">
                                <label className="w-[105px] text-[18px] mr-1">Confirm Password</label>
                                <input className="enterLastName mr-3 " type="password"
                                    placeholder="6 characters| 1 Capital |1 symbol" {...register("confirmPassword", {
                                        required: "confirmPassword is requried.",
                                    })} />

                            </div>
                            <div className="name">
                                <label className="mr-8 text-[18px]">Contact</label>
                                <input className="enterLastName" type="number"
                                    placeholder="Enter your Contact Number"  {...register("contactInformation")} />

                            </div>


                            <div className="nextPage">
                                {/* <button className="nextButton"onClick={handlePageChange}>Next</button> */}

                                <div><button className="right2" > {/*onClick={handlePageChange}*/}
                                    {/* <img src={right}  alt="" height='20px' id='checked'/> */}

                                </button></div>
                            </div>
                            <div className="submitButton">
                                <button className="button" type="submit">Continue</button>
                            </div>
                        </form>


                        <div className="toggleSignUp">
                            <div className="lines mt-4 ml-[62px]"> </div>
                            <p className="alreadyAccount"> Already have an account?
                                <div className="navLogin" onClick={handleLoginPageChange}>Login</div>
                            </p>
                        </div>

                    </div>
                    <div className="signUpLogo">
                        <div className="flex justify-center mt-32">
                            <img src='https://cdn-icons-png.flaticon.com/128/10184/10184706.png' alt="" height='800' id='checked' />
                        </div>
                        <p className="quote">
                            Your best investment is in yourself.
                        </p>
                    </div>

                </div> </div>
        </section>
    );

}
export default SignUp;