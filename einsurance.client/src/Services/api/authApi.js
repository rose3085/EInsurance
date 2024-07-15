import { useMutation } from "@tanstack/react-query";
import { useToast } from '@chakra-ui/react';
import axiosInstance from "../axiosInstance";
import { API_ENDPOINTS } from "../endPoints";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const { Login, Signup } = API_ENDPOINTS;

// login/Signin
export const loginAdmin = async (loginData) => {
    try {
        const response = await axiosInstance.post(Login, loginData);
        console.log(response);
        return response.data;
    } catch (error) {
        return {
            status: false,
            message: "An error occurred while logging in",
        };
    }
};

export const useLogin = () => {
    const navigate = useNavigate();
    const toast = useToast();
    return useMutation({
        mutationFn: loginAdmin,
        onSuccess: (data, variables) => {
            const { minCover } = variables; 
            if (data.isSuccess && data.message) {
                Cookies.set("token", data.message);
                Cookies.set("email", data.user?.email || "");
                console.log("Token set in cookie:", Cookies.get("token"));
                toast({
                    title: 'Login Message',
                    description: "User logged in successfully",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                });
                //navigate(`/Khalti`);
            } else {
                toast({
                    title: 'Error Message',
                    description: 'Failed to Login in',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                console.log( "Login failed");
            }
        },
        onError: (error) => {
            console.error("Login error:", error);
        },
    });
};

/*SignUP*/
export const SignUpAdmin = async (formData) => {
    try {
        const response = await axiosInstance.post(Signup, formData);
        return response.data;
    } catch (error) {
        return {
            success: false,
            message: "An error occurred while registering admin",
        };
    }
};

export const useSignUp = () => {
    const navigate = useNavigate();
    const toast = useToast();
    return useMutation({
        mutationFn: SignUpAdmin,
        onSuccess: (data) => {
            if (data.isSuccess) {
                toast({
                    title: 'SignUp Message',
                    description: "Successfully Registered",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                });
                navigate("/Login");
            } else {
                toast({
                    title: 'Error Message',
                    description:"User SignUp Failed",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
                console.log(data.message);
            }
        },
        onError: (error) => {
            console.log("An error occurred while registering admin", error);
        },
    });
};

export const Logout = () => {
    Cookies.remove("token");
    Cookies.remove("email");
    localStorage.removeItem("email");
};
