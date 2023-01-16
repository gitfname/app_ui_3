import { useState } from "react"
import { getLatestStories } from "../../APP_DATA"
import { Story, AddStory } from "../../components/Story/Story"

export default function ExploreStories() {
    const [stories, setStories] = useState([])

    getLatestStories()
    .then(stories => setStories(stories))

    return (
        <div className="w-full h-full bg-gray-100 overflow-y-auto p-1.5 md:p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid lg:grid-cols-4 gap-3 gap-y-4">
            <AddStory w="w-[100%]" h="h-[300px]" />
            {
                stories.map(story => <Story key={story.user.id} userImgW="w-16" userImgH="h-16" w="w-[100%]" h="h-[300px]" userId={story.user.id} coverImg={story["cover-img"]} />)
            }
        </div>
    )
}