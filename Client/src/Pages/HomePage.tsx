import {NavBar} from "../Components/NavBar";
import {Outlet} from "react-router-dom";

export const HomePage = () => {
    return (
        <>
            <NavBar/>
            <Outlet>

            </Outlet>
        </>
    );
};
