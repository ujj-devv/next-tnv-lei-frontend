"use client"

import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import ShadButton from "@/components/ui/Button/ShadButton";
import { ShadButtonType } from "@/components/ui/Button/button.enums";
import "./navbar.scss"
import { AuthType } from "@/enums/auth.enums";
import LeiLogo from "@/assets/svg/LeiLogo";
import { navlinks } from "@/lib/data/navlinks.data";
import Link from "next/link";
import Layout from "../Layout/Layout";

const NavBar = () => {
    // const { token } = useAppSelector(state => state.authSlice)
    // console.log('token from navbar', token)
    const token = false
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname()
    console.log('pathname', pathname)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (route: AuthType) => {
        router.push(route);
    };

    return (
        <div className="navbar__wrapper">
            <Layout>
                <nav className="nav">
                    {/* Logo */}
                    <div className="logo">
                        <LeiLogo />
                    </div>

                    {/* NavLinks for larger screens */}
                    <div className="navLinks__wrapper">
                        {navlinks.map(({ name, id }) => (

                            <Link key={id} className={` ${pathname === `/${id}` ? 'bg-[#2B5B55] px-4 py-2 rounded-md' : ''}`} href={id}>
                                {name}
                            </Link>
                        ))}
                    </div>

                    {/* Buttons for larger screens */}
                    {
                        !token && <div className="hidden md:flex gap-4">
                            <ShadButton
                                buttonText={"Sign in"}
                                type={ShadButtonType.SIGNIN}
                                onClick={() => handleClick(AuthType.LOGIN)}
                            />
                            <ShadButton
                                buttonText={"Sign up"}
                                type={ShadButtonType.SIGNUP}
                                onClick={() => handleClick(AuthType.REGISTER)}
                            />
                        </div>
                    }


                    {/* Hamburger Icon for mobile view */}
                    <div className="md:hidden" onClick={toggleMenu}>
                        <svg
                            className="w-6 h-6 text-white cursor-pointer"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </div>

                    {/* Dropdown Menu for smaller screens */}
                    {isOpen && (
                        <div className="absolute top-16 left-0 w-full bg-[#32736A] md:hidden flex flex-col items-start px-4 pb-4 z-10">
                            {navlinks.map(({ name, id }) => (
                                <Link key={id} className={`text-white font-medium text-base w-full hover:bg-[#2B5B55] px-4 py-2 rounded-md ${pathname === '/' ? 'bg-[#2B5B55] px-4 py-2 rounded-md' : ''}`} href={id} onClick={toggleMenu}>
                                    {name}
                                </Link>
                            ))}
                            {!token && <div className="flex flex-col gap-2 w-full mt-4">
                                <ShadButton
                                    buttonText={"Sign in"}
                                    type={ShadButtonType.PRIMARY}
                                    onClick={() => handleClick(AuthType.LOGIN)}
                                />
                                <ShadButton
                                    buttonText={"Sign up"}
                                    type={ShadButtonType.PRIMARY}
                                    onClick={() => handleClick(AuthType.REGISTER)}
                                />
                            </div>}
                        </div>
                    )}
                </nav>
            </Layout>
        </div>
    );
};

export default NavBar;
