import { useParams } from "react-router-dom"

export default function UserProfile() {
    const {userId} = useParams()

    return <div className="w-full h-full bg-red-500 text-white text-xl font-bold">{userId}</div>
}