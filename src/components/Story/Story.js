import InstaStories from "react-insta-stories"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa"
import { useState } from "react"
import { get60x60UserImage, getLatestStories } from "../../APP_DATA"
import { AiFillCloseCircle } from "react-icons/ai"
export function AddStory({w = "w-28", h = "h-48"}) {
    return (

        <Link className={`flex-shrink-0 ${w} ${h} rounded-lg relative bg-slate-700`}>
            <div className="w-full absolute bottom-0 pb-3">
                <div className="bg-gray-50 rounded-full w-11 h-11 mx-auto grid place-items-center active:scale-95 transition-transform duration-200">
                    <FaPlus className="w-5 h-5 fill-blue-500" />
                </div>
                <p className="text-gray-50 text-center mt-1 text-xs">Add Story</p>
            </div>
        </Link>
    )
}

export function Story({userId, coverImg = "", w = "w-28", h = "h-48", userImgW = "w-11", userImgH = "h-11"}) {
    const [showStory, setShowStory] = useState(false)
    return (
        <>
            {
                showStory&&<div className="fixed top-0 left-0 bg-black/70 backdrop-blur-sm grid place-items-center w-full h-full z-50 ">
                    <div className="w-screen sm:w-[80vw] md:w-[70vw] lg:w-[50vw]">
                        <InstaStories
                            width={"100%"}
                            defaultInterval={8000}
                            stories={[
                                {
                                    url: "images/img-1.jpg",
                                    header: {
                                        profileImage: "DB_Assets/usersImages/0/300x300.jpg",
                                        heading: "Heading text",
                                        subheading: "SubTitle"
                                    },
                                },
                                {
                                    url: "images/img-2.jpg",
                                    header: {
                                        profileImage: "DB_Assets/usersImages/0/300x300.jpg",
                                        heading: "Heading text",
                                        subheading: "SubTitle"
                                    },
                                },
                                {
                                    url: "images/img-3.jpg",
                                    header: {
                                        profileImage: "DB_Assets/usersImages/0/300x300.jpg",
                                        heading: "Heading text",
                                        subheading: "SubTitle"
                                    },
                                },
                            ]}
                            loop
                        />
                    </div>

                    <div onClick={(e) => {
                        e.stopPropagation()
                        setTimeout(() => setShowStory(false), 100)}
                        } className="absolute bottom-3 md:top-6 left-1/2 max-md:-translate-x-1/2 md:left-6 z-[999999] p-1.5 rounded-lg bg-white/10 grid place-items-center cursor-pointer active:scale-95 transition-transform duration-200">
                        <AiFillCloseCircle className="w-6 h-6 fill-gray-50" />
                    </div>
                </div>
            }
            <div onClick={() => setShowStory(true)} className={`flex-shrink-0 ${w} ${h} rounded-zl relative`}>
                <img loading="lazy" className="rounded-xl w-full h-full absolute top-0 left-0 object-center object-cover" src={coverImg} />
                <div className="z-10 w-full absolute bottom-0 pb-3 bg-gradient-to-t from-black/80 to-transparent rounded-lg">
                    <Link to={`users/${userId}`} className="block w-max h-max mx-auto">
                        <div className={`bg-gray-400 rounded-full ${userImgW} ${userImgH} bg-cover bg-center ring ring-rose-500`} style={{backgroundImage: `url('${get60x60UserImage(userId)}')`}}></div>
                    </Link>
                    <p className="text-gray-50 text-center mt-1.5 text-xs">UserName</p>
                </div>
            </div>
        </>
    )
}

export function Stories({addStory = true}) {
    const [stories,setStories] = useState([])

    getLatestStories()
    .then(stories => setStories(stories))

    return (
        <div className="w-full flex gap-x-3 flex-nowrap px-3 overflow-x-auto pb-3">
            {addStory&&<AddStory />}
            {
                stories.map(story => <Story key={story.user.id} userId={story.user.id} coverImg={story["cover-img"]} />)
            }
        </div>
    )
}