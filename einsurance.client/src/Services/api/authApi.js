import { useMutation,useQueryClient } from "@tanstack/react-query";
import { useToast } from '@chakra-ui/react';
import axiosInstance from "../axiosInstance";
import { API_ENDPOINTS } from "../endPoints";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";

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
    const location = useLocation();
    const { minCover } = location.state || {};
    const toast = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: loginAdmin,
        onSuccess: (data) => {
            if (data.isSuccess && data.message) {
                Cookies.set("token", data.message);
                Cookies.set("email", data.user?.email || "");
                queryClient.setQueryData('auth', { isLoggedIn: true, user: data.user });
                toast({
                    title: 'Login Successful',
                    description: "User logged in successfully",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                });
                navigate('/khalti', { state: { minCover } });
            } else {
                toast({
                    title: 'Login Failed',
                    description: 'Failed to log in',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }
        },
        onError: (error) => {
            toast({
                title: 'Error',
                description: 'An error occurred while logging in',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
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

//export const Logout = () => {
//    const queryClient = useQueryClient();
//    Cookies.remove("token");
//    Cookies.remove("email");

//    queryClient.setQueryData('auth', { isLoggedIn: false, user: null });
//};

export const Logout = (queryClient) => {
    Cookies.remove("token");
    Cookies.remove("email");
    queryClient.setQueryData('auth', { isLoggedIn: false, user: null });
};
