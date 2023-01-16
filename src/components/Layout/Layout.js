import { Outlet, Link, useNavigation } from "react-router-dom"
import Navigation from "../Navigation"
import { AiOutlineDelete, AiOutlineMenu, AiOutlineSetting, AiOutlineTablet, AiOutlineThunderbolt, AiOutlineUser } from "react-icons/ai"
import { FaMedal, FaGlobe, FaUser, FaYoutube, FaHotel, FaInbox, FaMapMarker } from "react-icons/fa"
import { useState } from "react"

export function LeftSideBarContainer({handleLinkClicked, children, title = "title"}) {
    return (
        <div className="w-[95%] mx-auto bg-white rounded-xl black-box-shadow p-2">
            <h2 className="pl-2 text-sm font-semibold text-gray-500/90 mb-4">{title}</h2>
            <div onClick={handleLinkClicked} className="flex flex-col gap-y-1">
                {children}
            </div>
        </div>
    )
}

export function MenuItem({structure = "grid gap-x-1 grid-cols-[2fr_8fr_2fr] items-center", link = "", left = "", center = "", right = ""}) {
    return (
        <Link to={link} className={`block w-full p-1.5 cursor-pointer hover:bg-gray-100 transition-colors rounded duration-200 ${structure}`}>
            {left}{center}{right}
        </Link>
    )
}

export function LeftMobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="active:scale-95 p-1.5 rounded-lg bg-blue-600 transition-all duration-200 cursor-pointer hover:bg-blue-500">
                <AiOutlineMenu className="w-6 h-6 fill-white" />
            </div>

            <div onClick={() => setIsOpen(false)} className={`${isOpen&&"!pointer-events-auto !opacity-100 !delay-[0ms]"} delay-300 opacity-0 transition-opacity duration-150 pointer-events-none fixed top-0 left-0 w-full h-full z-[1000]`}>

                <div onClick={e => e.stopPropagation()} className={`${isOpen&&"!translate-x-0 delay-100"} py-2 transition-transform overflow-y-auto duration-300 absolute z-[200] bg-gray-100 top-0 left-0 -translate-x-full w-72 h-full`}>
                    <LeftSideBarContainer handleLinkClicked={() => setIsOpen(false)} title="New Feeds" >
                        <MenuItem
                            left={<div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 grid place-items-center"><AiOutlineTablet className="w-4 h-4 fill-gray-50"/></div>}
                            center={<p className="pl-1.5 text-gray-500 text-sm font-medium">Newfeed</p>}>
                        </MenuItem>
                        <MenuItem
                            link="badges"
                            left={<div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 grid place-items-center"><FaMedal className="w-4 h-4 fill-gray-50"/></div>}
                            center={<p className="pl-1.5 text-gray-500 text-sm font-medium">Badges</p>}>
                        </MenuItem>
                        <MenuItem
                            link="stories"
                            left={<div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 grid place-items-center"><FaGlobe className="w-4 h-4 fill-gray-50"/></div>}
                            center={<p className="pl-1.5 text-gray-500 text-sm font-medium">Explore Stories</p>}>
                        </MenuItem>
                        <MenuItem
                            link="popular-groups"
                            left={<div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-yellow-500 grid place-items-center"><AiOutlineThunderbolt className="w-5 h-5 fill-gray-50"/></div>}
                            center={<p className="pl-1.5 text-gray-500 text-sm font-medium">Popular Groups</p>}>
                        </MenuItem>
                        <MenuItem
                            link="friends"
                            left={<div className="w-10 h-10 rounded-full bg-gradient-to-tl from-blue-400 to-blue-700 grid place-items-center"><FaUser className="w-4 h-4 fill-gray-50"/></div>}
                            center={<p className="pl-1.5 text-gray-500 text-sm font-medium">Friends</p>}>
                        </MenuItem>
                    </LeftSideBarContainer>
                </div>

            </div>
        </>
    )
}


function LeftSideBar() {
    return (
        <div className="w-full space-y-4">
            <LeftSideBarContainer title="New Feeds" >
                <MenuItem
                    left={<div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-700 grid place-items-center"><AiOutlineTablet className="w-4 h-4 fill-gray-50"/></div>}
                    center={<p className="pl-1.5 text-gray-500 text-sm font-medium">Newfeed</p>}>
                </MenuItem>
                <MenuItem
                    link="badges"
                    left={<div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 grid place-items-center"><FaMedal className="w-4 h-4 fill-gray-50"/></div>}
                    center={<p className="pl-1.5 text-gray-500 text-sm font-medium">Badges</p>}>
                </MenuItem>
                <MenuItem
                    link="stories"
                    left={<div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 grid place-items-center"><FaGlobe className="w-4 h-4 fill-gray-50"/></div>}
                    center={<p className="pl-1.5 text-gray-500 text-sm font-medium">Explore Stories</p>}>
                </MenuItem>
                <MenuItem
                    link="popular-groups"
                    left={<div className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 to-yellow-500 grid place-items-center"><AiOutlineThunderbolt className="w-5 h-5 fill-gray-50"/></div>}
                    center={<p className="pl-1.5 text-gray-500 text-sm font-medium">Popular Groups</p>}>
                </MenuItem>
                <MenuItem
                    link="friends"
                    left={<div className="w-10 h-10 rounded-full bg-gradient-to-tl from-blue-400 to-blue-700 grid place-items-center"><FaUser className="w-4 h-4 fill-gray-50"/></div>}
                    center={<p className="pl-1.5 text-gray-500 text-sm font-medium">Friends</p>}>
                </MenuItem>
            </LeftSideBarContainer>

            <LeftSideBarContainer title="More Pages">
                <MenuItem
                    link="email-inbox"
                    left={<div className="w-10 h-10 rounded-full bg-transparent grid place-items-center"><FaInbox className="w-5 h-5 fill-blue-600"/></div>}
                    center={<p className="text-gray-500 text-sm font-medium">Email Box</p>}
                    right={<div className="p-1 rounded-lg bg-gradient-to-tr from-orange-500 to-orange-300 text-xs font-medium grid place-items-center text-gray-50">190</div>}>
                </MenuItem>
                <MenuItem
                    link="near-hotels"
                    left={<div className="w-10 h-10 rounded-full bg-transparent grid place-items-center"><FaHotel className="w-5 h-5 fill-blue-600"/></div>}
                    center={<p className="text-gray-500 text-sm font-medium">Near Hotel</p>}>
                </MenuItem>
                <MenuItem
                    link="latest-events"
                    left={<div className="w-10 h-10 rounded-full bg-transparent grid place-items-center"><FaMapMarker className="w-5 h-5 fill-blue-600"/></div>}
                    center={<p className="text-gray-500 text-sm font-medium">Latest Event</p>}>
                </MenuItem>
                <MenuItem
                    link="live-stream"
                    left={<div className="w-10 h-10 rounded-full bg-transparent grid place-items-center"><FaYoutube className="w-5 h-5 fill-blue-600"/></div>}
                    center={<p className="text-gray-500 text-sm font-medium">Live Stream</p>}>
                </MenuItem>
            </LeftSideBarContainer>

            <LeftSideBarContainer title="Account">
                <MenuItem
                    link="account"
                    left={<div className="w-10 h-10 rounded-full bg-transparent grid place-items-center"><AiOutlineUser className="w-5 h-5 fill-gray-500"/></div>}
                    center={<p className="text-gray-500 text-sm font-medium">Account</p>}
                    right={<div className="p-1 rounded-lg bg-gradient-to-tr from-blue-500 to-blue-300 text-xs font-medium grid place-items-center text-gray-50">11</div>}>
                </MenuItem>
                <MenuItem
                    link="edit-account"
                    left={<div className="w-10 h-10 rounded-full bg-transparent grid place-items-center"><AiOutlineSetting className="w-5 h-5 fill-gray-500"/></div>}
                    center={<p className="text-gray-500 text-sm font-medium">Edit Account</p>}>
                </MenuItem>
                <MenuItem
                    link="delete-account"
                    left={<div className="w-10 h-10 rounded-full bg-transparent grid place-items-center"><AiOutlineDelete className="w-5 h-5 fill-rose-500"/></div>}
                    center={<p className="text-gray-500 text-sm font-medium">Delete Account</p>}>
                </MenuItem>
            </LeftSideBarContainer>
        </div>
    )
}

function MainSection() {
    const NavigationState = useNavigation()
    return (
        <>
            <div className={`${NavigationState.state=="loading"&&"!pointer-events-auto !opacity-100 !delay-[0ms]"} delay-500 transition-opacity duration-300 opacity-0 pointer-events-none fixed top-0 left-0 z-50 bg-white/50 w-full h-full backdrop-blur-sm`}></div>
            <Outlet />
        </>
    )
}

function Test() {
    return <button className="btn btn-sm btn-error btn-outline capitalize">Hello world</button>
}

export default function Layout() {
    return (
        <div className="w-screen h-screen grid grid-rows-[max-content_1fr] bg-gray-100">

            {/* navigation section */}
            <div className="p-3 px-4 z-30 nav-box-shadow bg-white">
                {/* Navigation */}
                <Navigation />
            </div>

            {/* main section */}
            <div className="grid max-md:grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[310px_1fr] overflow-hidden text-black">

                {/* left side */}
                <div className="max-md:hidden bg-gray-100 overflow-y-auto py-4">
                    <LeftSideBar />
                </div>

                {/* main side */}
                <div className="overflow-y-auto relative">
                    <MainSection />
                </div>

            </div>

        </div>
    )
}