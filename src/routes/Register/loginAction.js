import { redirect } from "react-router-dom"

export default async function loginAction({request}) {
    await new Promise(resolve => setTimeout(() => resolve(), 2000))
    const loginData = Object.fromEntries(await request.formData())
    let accountData = localStorage.getItem("user-account")
    if(!accountData) return redirect("/register")
    accountData = JSON.parse(accountData)
    if(accountData["user-name"] == loginData["user-name"] && accountData["password"] == loginData["password"]) {
        return redirect("/")
    }
    else {
        alert("username or password is incorrect ")
    }
    return redirect("/register")
}