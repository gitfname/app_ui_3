import { useState } from "react"
import { AiOutlineLike, AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"
import { get60x60UserImage, getUserById } from "../../APP_DATA"

export default function Post({linkToUserPage = true, text, likes, comments, shares, authorId}) {
    const [authorDetails, setAuthorDetails] = useState("loading")

    getUserById(authorId)
    .then(author => {
        setAuthorDetails({...author})
    })

    return (
        <div className="w-full p-3 bg-white small-black-shadow rounded-xl relative">
            <div className={`${authorDetails==="loading"&&"!opacity-100 !pointer-events-auto"} z-10 pointer-events-none opacity-0 transition-opacity duration-500 absolute top-0 left-0 w-full h-full bg-transparent/5 backdrop-blur-[2px] rounded-xl`}></div>
            <>
                <div className="w-full flex gap-x-2">
                    {
                        linkToUserPage
                        ?
                        <Link to={`users/${authorId}`}>
                            <img src={get60x60UserImage(authorId)} className="w-10 h-10 rounded-full bg-gray-200 object-center object-cover shadow shadow-black/10" />
                        </Link>
                        :
                        <img src={get60x60UserImage(authorId)} className="w-10 h-10 rounded-full bg-gray-200 object-center object-cover shadow shadow-black/10" />
                    }
                    <div>
                        <p className="text-sm text-gray-800 font-medium">{authorDetails.username??""}</p>
                        <p className="text-xs text-gray-500 mt-0.5">3 hour ago</p>
                    </div>
                </div>

                <p className="text-sm text-gray-600 mt-4">
                    {text}
                    <a href="#" className="text-blue-500 text-xs link link-hover ml-1 font-medium">See More</a>
                </p>

                <div className="mt-3 flex items-center gap-x-2 justify-between">

                    <div className="flex items-center gap-x-1">

                        <div className="flex items-center gap-x-1 p-1.5 rounded-lg hover:bg-sky-100 cursor-pointer transition-all duration-200 active:scale-95">
                            <AiOutlineLike className="w-5 h-5 fill-blue-500" />
                            <p className="text-xs text-gray-700">{likes}</p>
                        </div>
                        {/* <div className="flex items-center gap-x-1 p-1.5 rounded-lg hover:bg-rose-100 cursor-pointer transition-all duration-200 active:scale-95">
                            <AiOutlineHeart className="w-5 h-5 fill-rose-500" />
                            <p className="text-xs text-gray-700">2.5K</p>
                        </div> */}
                        <div className="flex items-center gap-x-1 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-200 active:scale-95">
                            <AiOutlineComment className="w-5 h-5 fill-gray-600" />
                            <p className="text-xs text-gray-700">{comments}</p>
                        </div>

                    </div>

                    <div className="flex items-center gap-x-1 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-200 active:scale-95">
                        <AiOutlineShareAlt className="w-5 h-5 fill-gray-600" />
                        <p className="text-xs text-gray-700">{shares}</p>
                    </div>

                </div>
            </>
                
        </div>
    )
    // return (
    //     <div className="w-full p-3 rounded-lg bg-white small-black-shadow">

    //         <>
    //             {
    //                 postDetails === "loading"
    //                 ?
    //                 <h2 className="text-xl text-red-500">Loading Post Details</h2>
    //                 :
    //                 (
    //                     <>
    //                         <div className="w-full flex gap-x-2">
    //                             <Link >
    //                                 <div className="w-10 h-10 rounded-full bg-red-400"></div>
    //                             </Link>
    //                             <div>
    //                                 <p className="text-sm text-gray-800 font-medium">username</p>
    //                                 <p className="text-xs text-gray-500 mt-0.5">3 hour ago</p>
    //                             </div>
    //                         </div>

    //                         <p className="text-sm text-gray-600 mt-4">
    //                             {text}
    //                             <a href="#" className="text-blue-500 text-xs link link-hover ml-1 font-medium">See More</a>
    //                         </p>

    //                         <div className="mt-3 flex items-center gap-x-2 justify-between">

    //                             <div className="flex items-center gap-x-1">

    //                                 <div className="flex items-center gap-x-1 p-1.5 rounded-lg hover:bg-sky-100 cursor-pointer transition-all duration-200 active:scale-95">
    //                                     <AiOutlineLike className="w-5 h-5 fill-blue-500" />
    //                                     <p className="text-xs text-gray-700">{likes}</p>
    //                                 </div>
    //                                 {/* <div className="flex items-center gap-x-1 p-1.5 rounded-lg hover:bg-rose-100 cursor-pointer transition-all duration-200 active:scale-95">
    //                                     <AiOutlineHeart className="w-5 h-5 fill-rose-500" />
    //                                     <p className="text-xs text-gray-700">2.5K</p>
    //                                 </div> */}
    //                                 <div className="flex items-center gap-x-1 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-200 active:scale-95">
    //                                     <AiOutlineComment className="w-5 h-5 fill-gray-600" />
    //                                     <p className="text-xs text-gray-700">{comments}</p>
    //                                 </div>

    //                             </div>

    //                             <div className="flex items-center gap-x-1 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-200 active:scale-95">
    //                                 <AiOutlineShareAlt className="w-5 h-5 fill-gray-600" />
    //                                 <p className="text-xs text-gray-700">{shares}</p>
    //                             </div>

    //                         </div>
    //                     </>
    //                 )
    //             }
    //         </>

    //     </div>
    // )
}