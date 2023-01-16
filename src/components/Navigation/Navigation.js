import { Link, NavLink } from "react-router-dom"
import 
    {
        AiOutlineHome, AiOutlineThunderbolt, AiOutlineVideoCamera, AiOutlineUser, AiOutlineInbox,
        AiOutlineBell, AiOutlineMessage, AiOutlineSetting, AiOutlineMenu, AiOutlineDelete, AiOutlineTablet
    }
from "react-icons/ai"
import { get60x60UserImage } from "../../APP_DATA"
import { useState } from "react"
import { LeftSideBarContainer, MenuItem } from "../Layout/Layout"
import { FaGlobe, FaMedal, FaUser } from "react-icons/fa"
import { LeftMobileMenu } from "../Layout/Layout"

function NavigationLink({children, path = "/"}) {
    return (
        <NavLink to={path} className={({isActive}) => `${  isActive&&"!bg-[#d2e1fe] !fill-sky-500" } bg-[#f4f5f5] fill-gray-600 grid place-items-center rounded-full w-10 h-10`}>
            {children}
        </NavLink>
    )
}

export default function Navigation() {
    return (
        <div className="w-full flex items-center justify-between gap-x-4">
            <div className="w-max h-max md:hidden">
                <LeftMobileMenu />
            </div>
            <Link to="/" className="text-3xl text-blue-700 font-bold">Sociala</Link>
            <input type="text" className="hidden md:block  w-4/12 py-2 px-5 focus:outline-none rounded-2xl text-sm bg-gray-100 text-gray-800 placeholder-gray-500" placeholder="Start typing to search" />
            <div className="hidden md:flex md:w-6/12 items-center justify-between gap-x-1">
                <div className="flex-1 flex items-center gap-x-2 justify-end max-lg:hidden">
                    <NavigationLink>
                        <AiOutlineHome className="w-5 h-5 fill-inherit" />
                    </NavigationLink>
                    <NavigationLink path="popular-groups">
                        <AiOutlineThunderbolt className="w-5 h-5 fill-inherit" />
                    </NavigationLink>
                    <NavigationLink path="live-stream">
                        <AiOutlineVideoCamera className="w-5 h-5 fill-inherit" />
                    </NavigationLink>
                    <NavigationLink path="profile">
                        <AiOutlineUser className="w-5 h-5 fill-inherit" />
                    </NavigationLink>
                    <NavigationLink path="inbox">
                        <AiOutlineInbox className="w-5 h-5 fill-inherit" />
                    </NavigationLink>
                </div>

                <div className="flex-1 flex items-center gap-x-2 justify-end">
                    <NavLink className="w-10 h-10 rounded-full hover:bg-[#f4f5f5] transition-colors duration-200 grid place-items-center">
                        <AiOutlineBell className="w-5 h-5 fill-blue-600" />
                    </NavLink>
                    <NavLink className="w-10 h-10 rounded-full hover:bg-[#f4f5f5] transition-colors duration-200 grid place-items-center">
                        <AiOutlineMessage className="w-5 h-5 fill-blue-600" />
                    </NavLink>
                    <NavLink className="w-10 h-10 rounded-full hover:bg-[#f4f5f5] transition-colors duration-200 grid place-items-center">
                        <AiOutlineSetting className="w-5 h-5 fill-blue-600" />
                    </NavLink>
                </div>
            </div>
            <NavLink to="profile" className="w-10 h-10 rounded-full flex-shrink-0 bg-gray-200 shadow shadow-black/10">
                <img loading="lazy" src={get60x60UserImage(1)} className="object-center w-full h-full object-cover rounded-full" />
            </NavLink>
        </div>
    )
}