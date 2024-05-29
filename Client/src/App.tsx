import './App.css'
import {RouterProvider} from "react-router-dom";
import {RouterList} from "./Routes/Routes.tsx";
import {UserContextProvider} from "./Context/UserContext.tsx";
import {useEffect, useState} from "react";
import {UserType} from "./types/user.type.ts";
import {jwtDecode} from 'jwt-decode' // import dependency

function App() {

    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                if ((jwtDecode(token).exp as number) < Date.now())
                    setUser(jwtDecode(token))
            } catch (err) {
                console.log('token expired');
            }
        }
    }, []);

    return (
        <>
            <UserContextProvider value={user}>
                <RouterProvider router={RouterList}></RouterProvider>
            </UserContextProvider>
        </>
    )
}

export default App
