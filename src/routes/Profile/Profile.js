import { BsThreeDots } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import Post from "../../components/Post/Post";
import GroupCard from "../../components/GroupCard/GroupCard";
import { get160x160UserImage, getUserPosts } from "../../APP_DATA";
import { useState } from "react";

function About() {
    return (
        <div className="w-full rounded-lg p-4">
            <p className="text-base text-slate-700 font-bold">About Me</p>
            <p className="text-sm text-black/70 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi adipisci quidem ab consequatur similique impedit. Molestiae dolorum accusantium nihil repellendus. Saepe, expedita pariatur! Ea officia ipsum labore quidem consectetur nostrum odio quo iste veritatis veniam vero blanditiis suscipit laboriosam in commodi iure, voluptates itaque expedita ab quae explicabo asperiores aut.</p>
        </div>
    )
}

function MyPosts() {
    // fore example i'm user with id 1
    const [Posts, setPosts] = useState("loading")

    getUserPosts(1)
    .then(posts => setPosts(posts))

    return (
        <div className="w-full bg-white p-3 pt-5 space-y-5">
            {
                Posts === "loading"
                ?
                <h2 className="text-xl text-slate-800 font-bold text-center">Loading Latest Posts</h2>
                :
                Posts.map(post => <Post linkToUserPage={false} key={post.id} comments={post.comments} likes={post.likes} postId={post.id} shares={post.shares} text={post.text} authorId={post.userId}/>)
            }
        </div>
    )
}

function MyGroups() {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-5 pt-5">
            <GroupCard isFollowing={true} img="/images/img-1.jpg" owner={{img: "images/person/person-1.jpg", name: "owner-1", mail: "owner1@gmail.com", proUser: true}} />
            <GroupCard isFollowing={true} img="/images/img-2.jpg" owner={{img: "images/person/person-2.jpg", name: "owner-2", mail: "owner2@gmail.com", proUser: false}} />
            <GroupCard isFollowing={true} img="/images/img-3.jpg" owner={{img: "images/person/person-3.jpg", name: "owner-3", mail: "owner3@gmail.com", proUser: false}} />
            <GroupCard isFollowing={true} img="/images/img-4.jpg" owner={{img: "images/person/person-4.jpg", name: "owner-4", mail: "owner4@gmail.com", proUser: true}} />
            <GroupCard isFollowing={true} img="/images/img-5.jpg" owner={{img: "images/person/person-5.jpg", name: "owner-5", mail: "owner5@gmail.com", proUser: true}} />
        </div>
    )
}


export default function Profile() {
    return (
        <div className="w-full h-full md:p-4 overflow-y-auto">
            <div className="bg-white small-black-shadow md:rounded-2xl">

                {/* img */}
                <div className="relative w-full h-60">
                    <img loading="lazy" src="images/img-1.jpg" className="w-full h-full md:rounded-t-xl shadow shadow-black/10 object-center object-cover" />

                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-max h-max p-1 bg-white mask mask-squircle ">
                        <img loading="lazy" src={get160x160UserImage(1)} className="block mask mask-squircle w-20 h-20 object-center object-cover" />
                    </div>
                </div>
                
                {/* details */}
                <div className="relative pt-11">

                    <button className="absolute top-2.5 right-2.5 active:scale-95 transition-transform duration-200 py-1.5 px-3 md:py-2 md:px-4 bg-gray-200 rounded-lg">
                        <BsThreeDots className="w-5 h-5 fill-slate-700" />
                    </button>

                    <p className="text-xl md:text-3xl text-slate-700 font-bold text-center">user name</p>
                    <p className="text-sm text-black/50 font-semibold text-center">user mail</p>

                    <div className="w-full flex gap-x-3 items-center p-3 mt-6">

                        {/* user status */}
                        <div className="flex items-center justify-center flex-1 flex-wrap gap-x-6 gap-y-2">
                            <div className="flex flex-col items-center gap-x-1">
                                <p className="text-lg md:text-xl font-bold text-slate-800">status</p>
                                <p className="text-xs font-semibold text-black/50">value</p>
                            </div>

                            <div className="flex flex-col items-center gap-x-1">
                                <p className="text-lg md:text-xl font-bold text-slate-800">status</p>
                                <p className="text-xs font-semibold text-black/50">value</p>
                            </div>
                            
                            <div className="flex flex-col items-center gap-x-1">
                                <p className="text-lg md:text-xl font-bold text-slate-800">status</p>
                                <p className="text-xs font-semibold text-black/50">value</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-full mt-10 px-3 pb-3">
                    <Tabs selectedTabClassName="bg-gray-100 rounded-t-lg">
                        <TabList className="w-full flex items-center justify-center border-b">
                            <Tab>About</Tab>
                            <Tab>Posts</Tab>
                            <Tab>Groups</Tab>
                        </TabList>

                        <TabPanel><About /></TabPanel>
                        <TabPanel><MyPosts /></TabPanel>
                        <TabPanel><MyGroups /></TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}