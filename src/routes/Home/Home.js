import { Stories } from "../../components/Story/Story";
import { FaPen } from "react-icons/fa"
import { BsThreeDots } from "react-icons/bs"
import { AiOutlineVideoCamera, AiOutlineFileImage, AiOutlineCamera } from "react-icons/ai"
import Post from "../../components/Post/Post";
import FriendRequest from "../../components/FriendRequest/FriendRequest";
import { useState } from "react";

import { getLatestPosts, getPosts } from "../../APP_DATA";

function RightSideMenu({title = "Title", link = "#", children}) {
    return (
        <div className="w-full bg-white rounded-xl black-box-shadow p-2">
            <div className="w-full flex items-center gap-x-2 justify-between px-2 h-12 border-b border-gray-300">
                <p className="text-xs font-bold text-gray-700">{title}</p>
                <a href={link} className="text-xs text-blue-500 link link-hover">see all</a>
            </div>

            <div className="mt-4 space-y-7">{children}</div>
        </div>
    )
}

function MenuItem() {
}

function PostsSection() {
    const [Posts, setPosts] = useState("loading")

    getLatestPosts()
    .then(posts => {
        setPosts(posts)
    })

    return (
        <>
            {
                Posts === "loading"
                ?
                <h2 className="text-xl text-slate-800 font-bold text-center">Loading Latest Posts</h2>
                :
                Posts.slice(0, 10).map(post => <Post key={post.id} comments={post.comments} likes={post.likes} postId={post.id} shares={post.shares} text={post.text} authorId={post.userId}/>)
            }
        </>
    )
}

export default function Home() {
    
    return (
        <div className="w-full h-full bg-gray-100 overflow-y-auto grid grid-cols-1 lg:grid-cols-[1fr_270px]">

            {/* main section */}
            <div className="w-full overflow-x-hidden">
                <div className="w-full pt-5">
                    <div className="px-2">
                        <Stories />
                    </div>

                    {/* latest posts */}
                    <div className="w-full px-2 md:px-5 mt-6 pb-4">

                        {/* write new post */}
                        <div className="w-full bg-white rounded-xl p-4">
                            <div className="flex items-center gap-x-3">
                                <div className="w-7 h-7 grid place-items-center bg-gray-200 rounded-full">
                                    <FaPen className="w-3.5 h-3.5 fill-blue-500" />
                                </div>
                                <p className="text-xs text-gray-500 font-medium">Create Post</p>
                            </div>

                            <textarea rows={4} className="textarea bg-gray-100 w-full mt-4 focus:outline-none text-gray-700" placeholder="What`s on your mind?"></textarea>

                            <div className="mt-4 flex items-center justify-between">

                                <div className="flex flex-wrap gap-y-1 items-center gap-x-1.5">

                                    <div className="flex items-center gap-x-1.5 p-1.5 rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 cursor-pointer">
                                        <AiOutlineVideoCamera className="w-5 h-5 fill-rose-500" />
                                        <p className="text-xs text-gray-500 font-medium">Live Video</p>
                                    </div>

                                    <div className="flex items-center gap-x-1.5 p-1.5 rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 cursor-pointer">
                                        <AiOutlineFileImage className="w-5 h-5 fill-green-500" />
                                        <p className="text-xs text-gray-500 font-medium">Photo/Video</p>
                                    </div>

                                    <div className="flex items-center gap-x-1.5 p-1.5 rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 cursor-pointer">
                                        <AiOutlineCamera className="w-5 h-5 fill-orange-500" />
                                        <p className="text-xs text-gray-500 font-medium">Feeling/Activity</p>
                                    </div>

                                </div>

                                <div className="cursor-pointer active:scale-95 transition-transform duration-200 flex-shrink-0 w-7 h-7 bg-gray-200/90 rounded-full flex items-center justify-center gap-x-0.5">
                                    <BsThreeDots className="w-4 h-4 fill-gray-600" />
                                </div>

                            </div>
                        </div>

                        {/* posts */}
                        <div className="w-full mt-7 space-y-4">
                            <PostsSection />
                        </div>

                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="max-lg:hidden bg-gray-100 px-3 py-4">
                <RightSideMenu title="Friend Request">
                    <FriendRequest userId="0" img="images/person/person-1.jpg" name="user name 372" date="3h ago"/>
                    <FriendRequest userId="10" img="images/person/person-2.jpg" name="user name 4027" date="4h ago"/>
                    <FriendRequest userId="8" img="images/person/person-3.jpg" name="user name 5725" date="9h ago"/>
                    <p className="text-center text-xs text-gray-500/90 font-semibold">10 more</p>
                </RightSideMenu>
            </div>

        </div>
    )
}