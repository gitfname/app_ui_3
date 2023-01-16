import { redirect } from "react-router-dom"

export default async function action({ request }) {
    await new Promise(resolve => setTimeout(() => resolve(), 2000))
    localStorage.setItem("user-account" ,JSON.stringify(Object.fromEntries(await request.formData())))
    return redirect("/")
}