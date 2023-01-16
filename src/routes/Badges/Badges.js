import { useState } from "react"
import { get160x160UserImage, get60x60UserImage, getUsers } from "../../APP_DATA"

const testUsers = [
    {
        "name": "user-1",
        "mail": "user1@gmai.com",
        "80x80-img": "images/person/person-1.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-2",
        "mail": "user2@gmai.com",
        "80x80-img": "images/person/person-2.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-3",
        "mail": "user3@gmai.com",
        "80x80-img": "images/person/person-3.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-4",
        "mail": "user4@gmai.com",
        "80x80-img": "images/person/person-4.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-5",
        "mail": "user5@gmai.com",
        "80x80-img": "images/person/person-5.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-6",
        "mail": "user6@gmai.com",
        "80x80-img": "images/person/person-6.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-7",
        "mail": "user7@gmai.com",
        "80x80-img": "images/person/person-7.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-8",
        "mail": "user8@gmai.com",
        "80x80-img": "images/person/person-8.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-9",
        "mail": "user9@gmai.com",
        "80x80-img": "images/person/person-9.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-10",
        "mail": "user10@gmai.com",
        "80x80-img": "images/person/person-10.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-11",
        "mail": "user11@gmai.com",
        "80x80-img": "images/person/person-11.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-12",
        "mail": "user11@gmai.com",
        "80x80-img": "images/person/person-11.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-13",
        "mail": "user12@gmai.com",
        "80x80-img": "images/person/person-12.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-14",
        "mail": "user12@gmai.com",
        "80x80-img": "images/person/person-12.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-15",
        "mail": "user13@gmai.com",
        "80x80-img": "images/person/person-13.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },    {
        "name": "user-16",
        "mail": "user14@gmai.com",
        "80x80-img": "images/person/person-14.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-17",
        "mail": "user15@gmai.com",
        "80x80-img": "images/person/person-15.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
    {
        "name": "user-18",
        "mail": "user16@gmai.com",
        "80x80-img": "images/person/person-16.jpg",
        "followers": "13.4K",
        "followings": "1.5K",
        "connections": "506"
    },
]

function Badge({userDetails}) {
    return (
        <div className="bg-white h-max p-4 rounded small-black-shadow">
            <img loading="lazy" src={get160x160UserImage(userDetails.id)} className="object-center object-cover block mx-auto w-16 h-16 rounded-full shadow shadow-black/20" />
            <p className="text-base font-bold text-slate-700 text-center mt-3">{userDetails["first-name"]}</p>
            <p className="text-sm font-semibold text-black/50 text-center">{userDetails.mail}</p>
            {/* status */}
            <div className="w-full flex gap-x-2 md:gap-x-3 items-center justify-center mt-2">
                <div>
                    <p className="text-sm font-bold text-slate-700 text-center mt-3">{userDetails.posts.length}</p>
                    <p className="text-xs text-[11px] font-semibold text-black/50 text-center">Posts</p>
                </div>

                <div>
                    <p className="text-sm font-bold text-slate-700 text-center mt-3">{userDetails.followers}</p>
                    <p className="text-xs text-[11px] font-semibold text-black/50 text-center">Followers</p>
                </div>

                <div>
                    <p className="text-sm font-bold text-slate-700 text-center mt-3">{userDetails.followings}</p>
                    <p className="text-xs text-[11px] font-semibold text-black/50 text-center">Followings</p>
                </div>
            </div>
            {/* rewards */}
            <div className="hidden w-full flex gap-x-3 items-center justify-center mt-4">
                <div className="mask mask-squircle bg-red-500 w-9 h-9"></div>
                <div className="mask mask-star-2 bg-yellow-500 w-9 h-9"></div>
                <div className="mask mask-triangle-3 bg-green-500 w-9 h-9"></div>
                <div className="mask mask-diamond bg-stone-500 w-9 h-9"></div>
            </div>
            <button className="active:scale-95 transition-transform duration-200 block mx-auto rounded-3xl text-sm text-white font-semibold bg-blue-600 py-2 px-5 mt-6">Follow</button>
        </div>
    )
}

export default function Badges() {
    const [users, setUsers] = useState([])

    getUsers()
    .then(users => setUsers(users))

    return (
        <div className="w-full h-full overflow-y-auto bg-gray-100 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-4">
            {
                users.map(user => <Badge userDetails={user} key={user.id} />)
            }
        </div>
    )
}