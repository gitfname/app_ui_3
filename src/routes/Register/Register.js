import { Form, Link } from "react-router-dom"
import { useState } from "react"
import { useNavigation } from "react-router-dom"

function SignUp() {
    return (
        <Form method="post" className="w-full max-md:w-8/12 md:w-6/12">
            <div className="text-stone-800 text-3xl !font-bold">
                <p className="">Create</p>
                <p className="">your account</p>
            </div>

            <div className="mt-6 space-y-3 flex flex-col">
                <input required name="user-name" type="text" className="focus:outline-none border rounded border-stone-400/70 p-3 text-sm w-full text-stone-700 placeholder-slate-600" placeholder="Your Name" />
                <input required name="email" type="email" className="focus:outline-none border rounded border-stone-400/70 p-3 text-sm w-full text-stone-700 placeholder-slate-600" placeholder="Your Email Address" />
                <input required name="password" type="password" className="focus:outline-none border rounded border-stone-400/70 p-3 text-sm w-full text-stone-700 placeholder-slate-600" placeholder="Password" />
                <input required name="confirm-password" type="password" className="focus:outline-none border rounded border-stone-400/70 p-3 text-sm w-full text-stone-700 placeholder-slate-600" placeholder="Confirm Password" />
                
                <div className="flex items-center gap-x-2 !mt-6">
                    <input required name="accept-terms" id="accept-terms" type="checkbox" className="checkbox checkbox-xs rounded border-slate-500" />
                    <label htmlFor="accept-terms" className="text-slate-600 text-sm cursor-pointer">Accept terms and conditions ?</label>
                </div>

                <button type="submit" className="!mt-3 w-full active:scale-95 focus:outline-stone-400 outline outline-offset-1 outline-transparent transition-transform duration-200 rounded-lg py-3 px-6 bg-stone-800 text-gray-50 text-sm">Create</button>
            </div>
        </Form>
    )
}

function Login() {
    return (
        <Form action="login" method="post" className="w-full max-md:w-8/12 md:w-6/12">
            <div className="text-stone-800 text-3xl !font-bold">
                <p className="">Login to</p>
                <p className="">your account</p>
            </div>

            <div className="mt-6 space-y-3 flex flex-col">
                <input required name="user-name" type="text" className="focus:outline-none border rounded border-stone-400/70 p-3 text-sm w-full text-stone-700 placeholder-slate-600" placeholder="Your Name" />
                <input required name="password" type="password" className="focus:outline-none border rounded border-stone-400/70 p-3 text-sm w-full text-stone-700 placeholder-slate-600" placeholder="Password" />

                <button type="submit" className="!mt-3 w-full active:scale-95 focus:outline-stone-400 outline outline-offset-1 outline-transparent transition-transform duration-200 rounded-lg py-3 px-6 bg-stone-800 text-gray-50 text-sm">Login</button>
            </div>
        </Form>
    )
}

export default function Regiteration() {
    const [isSignUpFormActive, setIsSignUpFormActive] = useState(false)
    const navigationState = useNavigation()

    return (
        <div className="w-screen h-screen select-none relative">
            <div className={`${navigationState.state == "submitting"&&"!z-50"} -z-50 absolute top-0 left-0 w-full h-full bg-white/40`}></div>

            {/* top seaction */}
            <div className="absolute top-0 left-0 w-full p-4 px-6 flex items-center justify-between">
                <Link to="/" className="text-sky-600 text-3xl font-bold">Sociala.</Link>

                <div className="flex items-center gap-x-2">
                    <button onClick={() => setIsSignUpFormActive(false)} className="active:scale-95 focus:outline-stone-400 outline outline-offset-1 outline-transparent transition-transform duration-200 rounded-3xl py-3 px-6 bg-stone-800 text-gray-50 text-sm">Login</button>
                    <button onClick={() => setIsSignUpFormActive(true)} className="active:scale-95 focus:outline-sky-400 outline outline-offset-1 outline-transparent transition-transform duration-200 rounded-3xl py-3 px-6 bg-blue-600 text-gray-50 text-sm">SignUp</button>
                </div>
            </div>

            {/* main section */}
            <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-[2fr_3fr] overflow-y-auto">
                {/* image section */}
                <div className="max-md:hidden bg-red-300"></div>

                {/* form section */}
                <div className="grid place-items-center max-md:pt-28 max-md:pb-5">
                    {
                        isSignUpFormActive ? <SignUp /> : <Login />
                    }
                </div>
            </div>

        </div>
    )
}