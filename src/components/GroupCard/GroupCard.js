import { AiOutlineVideoCamera } from "react-icons/ai";
import { TiTick } from "react-icons/ti"

export default function GroupCard({img = "", owner = "", isFollowing = false}) {
    return (
        <div className="w-full rounded-lg bg-white small-box-shadow">
            <img loading="lazy" src={img} className="w-full h-[60%] max-h-[180px] object-center object-cover rounded-t-lg shadow shadow-black/10" />

            <div className="w-full px-3 pb-3 flex flex-wrap gap-x-4 gap-y-2 items-center justify-between">
                <div className="flex items-center gap-x-3">
                    <img loading="lazy" src={owner.img} className="-translate-y-1/2 ring ring-white flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full object-center object-cover" />
                    <div>
                        <div className="flex gap-x-1 items-center">
                            <p className="text-sm md:text-base text-slate-800 font-semibold">{owner.name}</p>
                            {owner.proUser&&<TiTick className="w-4 h-4 bg-blue-700 rounded-full fill-white" />}
                        </div>
                        <p className="text-xs text-black/50 font-semibold">{owner.mail}</p>
                    </div>
                </div>

                <div className="flex items-center gap-x-3">
                    <button className="active:scale-95 transition-transform duration-200 w-9 h-9 grid place-items-center bg-gradient-to-br from-blue-700 to-blue-600 rounded-full">
                        <AiOutlineVideoCamera className="w-5 h-5 fill-white" />
                    </button>
                    {
                        !isFollowing
                        ?
                            <button className="active:scale-95 transition-transform duration-200 text-xs font-medium text-white bg-blue-700 py-2 px-5 rounded-3xl">Follow</button>
                        :
                            <button className="active:scale-95 transition-transform duration-200 text-xs font-medium text-white bg-rose-600 py-2 px-5 rounded-3xl">UnFollow</button>
                    }
                </div>
            </div>
        </div>
    )
}