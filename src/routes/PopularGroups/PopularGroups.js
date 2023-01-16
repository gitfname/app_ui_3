import { useState } from "react";
import { getPopularGroups, getPopularGroups_gen } from "../../APP_DATA";
import GroupCard from "../../components/GroupCard/GroupCard";

export default function PopularGroups() {
    const [popularGroups, setPopularGroups] = useState(null)

    if(!popularGroups) {
        console.log("called")
        getPopularGroups()
        .then(popularGroups => setPopularGroups(popularGroups))
    }

    return (
        <div className="w-full min-h-max max-h-full bg-gray-100 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 gap-y-7 gap-x-5 p-4">
            {
               popularGroups&&popularGroups.map(group => <GroupCard key={group.id} img={group.img} owner={{img: group.owner.img, name: group.owner.name, mail: group.owner.mail, proUser: false}} /> )
            }
        </div>
    )
}