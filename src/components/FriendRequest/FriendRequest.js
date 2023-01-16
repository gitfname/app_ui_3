import { Link } from "react-router-dom";

export default function FriendRequest({img = "", name = "", date = "", userId = ""}) {
    return (
        <div className="w-full flex flex-wrap items-center justify-between gap-x-2 gap-y-2">

            {/* user details */}
            <div className="flex items-center gap-x-2">
                <Link to={`users/${userId}`}>
                    <img loading="lazy" className="w-8 h-8 rounded-full bg-gray-200 object-cover object-center shadow shadow-black/20" src={img} />
                </Link>
                <div>
                    <p className="text-xs text-gray-700 font-bold">{name}</p>
                    <p className="text-xs text-[11px] mt-0.5 text-gray-500">{date}</p>
                </div>
            </div>


            {/* actions buttons */}
            <div className="flex items-center gap-x-3">
                <button className="active:scale-95 transition-transform duration-200 py-1.5 px-4 rounded-2xl text-white text-xs font-semibold bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 shadow shadow-black/10">Confirm</button>
                <button className="active:scale-95 transition-transform duration-200 py-1.5 px-4 rounded-2xl text-white text-xs font-semibold bg-gradient-to-br from-rose-600 via-rose-500 to-rose-400 shadow shadow-black/10">Delete</button>
            </div>
        </div>
    )
}