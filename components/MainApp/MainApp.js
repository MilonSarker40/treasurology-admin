import LoginForm from "../LoginForm/LoginForm";
import TempApp from "@/pages/app";

import { useEffect, useState } from "react";

const MainApp = ({ Component, pageProps }) => {
    const [isLoggedIn, setIsloggedIn] = useState(false);

    useEffect(() => {
        const logState = localStorage.getItem("loginState")
        console.log(`logstate ${logState}`)
        setIsloggedIn(logState)
    }, [])
    console.log(`isLoggedIn ${isLoggedIn}`)
    const renderApp = isLoggedIn? <TempApp Component={Component} pageProps={pageProps}/> : <LoginForm />

    return(
        renderApp
    )

}

export default MainApp;