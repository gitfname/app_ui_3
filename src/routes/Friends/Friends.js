import { TiTick } from "react-icons/ti"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
import { get60x60UserImage, getMyFriends, getSuggestedFriends } from "../../APP_DATA"


function Friend({userDetails = {}}) {
    return (
        <div className="w-full p-3 rounded-lg small-blakc-shadow bg-white">
            <img loading="lazy" src={userDetails.img} className="object-center object-cover w-14 h-14 rounded-full shadow shadow-black/20 block mx-auto" />
            <p className="text-center text-sm text-slate-700 font-bold mt-2">{userDetails.userName}</p>
            <p className="text-center text-xs text-black/50 font-semibold">{userDetails.mail}</p>
            <div className="flex flex-wrap items-center gap-2 justify-center mt-4">
                <button className="active:scale-95 transition-transform duration-200 rounded-3xl text-xs text-white font-semibold py-1.5 px-4 bg-blue-700">Chat</button>
                <button className="active:scale-95 transition-transform duration-200 rounded-3xl text-xs text-white font-semibold py-1.5 px-4 bg-rose-700">Remove</button>
            </div>
        </div>
    )
}

function FriendSuggestionCard({img, userName}) {
    return (
        <div className="flex-shrink-0 w-32 h-48 rounded-lg bg-white small-black-shadow p-3">
            <img src={img} className="w-14 h-14 rounded-full shadow shadow-black/10 object-center object-cover block mx-auto" />
            <p className="text-center text-sm text-slate-700 font-bold mt-3">{userName}</p>
            <div className="flex flex-wrap items-center gap-1.5 justify-center mt-3">
                <TiTick className="p-0.5 rounded hover:bg-gray-100 w-7 h-7 fill-blue-600 cursor-pointer active:scale-95 transition-all duration-200" />
                <IoMdClose className="p-0.5 rounded hover:bg-gray-100 w-7 h-7 fill-rose-600 cursor-pointer active:scale-95 transition-all duration-200" />
            </div>
        </div>
    )
}

function SuggestedFriends() {
    const [suggestedFriends, setSuggestedFriends] = useState(null)

    if(!suggestedFriends) {
        getSuggestedFriends()
        .then(suggestedFriends => setSuggestedFriends(suggestedFriends))
    }

    return (
        <>
            {
                suggestedFriends
                ? suggestedFriends.map(suggestedFriend => <FriendSuggestionCard key={suggestedFriend.id} img={get60x60UserImage(suggestedFriend.id)} userName={suggestedFriend["first-name"]} />)
                : ""
            }
        </>
    )
}

function MyFriends() {
    const [myFriends, setMyFriends] = useState(null)

    if(!myFriends) {
        getMyFriends()
        .then(myFriends => setMyFriends(myFriends))
    }

    return (
        <>
            {
                myFriends
                ? 
                myFriends.map(myFriend => <Friend key={myFriend.id} userDetails={{userName: myFriend.username, mail: myFriend.mail, img: get60x60UserImage(myFriend.id)}} />)
                : ""
            }
        </>
    )
}

export default function Friends() {
    console.log("Friends")
    return (
        <div className="w-full min-h-max max-h-full bg-gray-100 py-4 pb-0 overflow-y-auto">

            {/* suggestion friends */}
            <h2 className="text-slate-800 font-bold text-2xl mb-4 px-4">Suggestions</h2>
            <div className="flex gap-x-3 overflow-x-auto py-2 px-2.5 md:mx-2">
                <SuggestedFriends />
            </div>


            {/* friends */}
            <h2 className="text-slate-800 font-bold text-2xl mt-7 mb-4 px-4">Your Friends</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 gap-y-4 pb-4 h-full px-2 md:px-4">
                <MyFriends />
            </div>

        </div>
    )
}