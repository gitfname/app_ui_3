import { redirect } from "react-router-dom"

export default function rootDataLoader() {
    if(!localStorage.getItem("user-account")) {
        return redirect("register")
    }
    return true
}