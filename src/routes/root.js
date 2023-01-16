import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/Layout";
import rootDataLoader from "./rootDataLoader";

import RegisterationAction from "./Register/action"
import Regiteration from "./Register/Register";
import loginAction from "./Register/loginAction";
import Home from "./Home/Home";
import Badges from "./Badges/Badges";
import ExploreStories from "./ExploreStories/ExploreStories";
import PopularGroups from "./PopularGroups/PopularGroups";
import Friends from "./Friends/Friends";
import Profile from "./Profile/Profile";
import UserProfile from "./UserProfile/UserProfile";

export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        loader: rootDataLoader,
        children: [
            {
                index: true,
                element: <Home />,
                loader: function() {
                    return  new Promise(resolve => setTimeout(() => resolve(true), 1000))
                }
            },
            {
                path: "badges",
                element: <Badges />,
                loader: function() {
                    return  new Promise(resolve => setTimeout(() => resolve(true), 1500))
                }
            },
            {
                path: "stories",
                element: <ExploreStories />,
                loader: function() {
                    return  new Promise(resolve => setTimeout(() => resolve(true), 1500))
                }
            },
            {
                path: "popular-groups",
                element: <PopularGroups />,
                loader: function() {
                    return  new Promise(resolve => setTimeout(() => resolve(true), 1500))
                }
            },
            {
                path: "friends",
                element: <Friends />,
                loader: function() {
                    return  new Promise(resolve => setTimeout(() => resolve(true), 1500))
                }
            },
            {
                path: "profile",
                element: <Profile />,
                loader: function() {
                    return  new Promise(resolve => setTimeout(() => resolve(true), 1500))
                }
            },
            {
                path: "users/:userId",
                element: <UserProfile />,
                loader: function() {
                    return  new Promise(resolve => setTimeout(() => resolve(true), 1000))
                }
            }
        ]
    },
    {
        path: "register",
        element: <Regiteration />,
        action: RegisterationAction,
        children: [
            {
                path: "login",
                action: loginAction
            }
        ]
    }
])