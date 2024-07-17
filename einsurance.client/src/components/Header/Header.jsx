import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Image/Logo.png';
import { useToast } from '@chakra-ui/react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button, useDisclosure, Avatar, AvatarGroup,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../../Services/api/authApi';
import { useQueryClient } from "@tanstack/react-query";


export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const navigate = useNavigate();
    const toast = useToast();
    const queryClient = useQueryClient();
    const auth = queryClient.getQueryData('auth');

    const handleLogout = () => {
        console.log("logout Ok");
        Logout(queryClient);
        navigate("/SignUp");
        toast({
            title: 'LogOut Message',
            description: "Successfully LogOut",
            status: 'success',
            duration: 4000,
            isClosable: true,
        });
        onClose();
       
    };
    return (
        <header className="shadow sticky z-50 top-0 ">
            <nav className="bg-white border-gray-200 px-4 lg:px-2 py-1">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center  mt-1 ">
                        <img
                            src={Logo}
                            className="h-20 w-28"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col-reverse mt-4 mr-2 font-medium font-sans text-lg lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0065ff]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0065ff] lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0065ff]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0065ff] lg:p-0`
                                        }
                                    >
                                        About us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/insurance"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0065ff]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0065ff] lg:p-0`
                                        }
                                    >
                                        Insurance Policy
                                    </NavLink>
                                </li>



                            </ul>
                        {/*    <Link*/}
                        {/*    to="Login"*/}
                        {/*    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"*/}
                        {/*>*/}
                        {/*    Log in*/}
                        {/*</Link>*/}
                        
                            {auth?.isLoggedIn ? (
                                <AvatarGroup spacing='1rem' onClick={onOpen}>
                                    <Avatar bg='gray.500' size='md' />
                                </AvatarGroup>
                            ) : (
                                <div>

                                <Link
                            to="SignUp"
                            className="text-white text-base bg-[#008a8a] hover:bg-[#0EAA42] focus:ring-4 focus:ring-[#a1a2e6] font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign in
                            </Link>
                                    <Link
                                        to="Login"
                                        className="text-gray-800 hover:bg-gray-50 border-gray-400 border-2 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    >
                                        Log in
                                        </Link>
                                    </div>
                            )}

                            <AlertDialog
                                isOpen={isOpen}
                                leastDestructiveRef={cancelRef}
                                onClose={onClose}
                            >
                                <AlertDialogOverlay>
                                    <AlertDialogContent>
                                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                            Log Out 
                                        </AlertDialogHeader>

                                        <AlertDialogBody>
                                            Are you sure? You can't undo this action afterwards.
                                        </AlertDialogBody>

                                        <AlertDialogFooter>
                                            <Button ref={cancelRef} onClick={onClose}>
                                                Cancel
                                            </Button>
                                            <Button colorScheme='red' onClick={handleLogout} ml={3}>
                                                LogOut
                                            </Button>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialogOverlay>
                            </AlertDialog>
                        </div>
                        
                    </div>

                </div>
            </nav>
        </header>
    );
}

