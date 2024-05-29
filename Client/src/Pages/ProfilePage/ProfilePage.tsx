import {Link, Outlet, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export const ProfilePage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const route = useLocation();

    useEffect(() => {
        const path = route.pathname.split('/')[2]
        if (path === 'dashboard') {
            setCurrentPage(1)
        } else if (path === 'carts') {
            setCurrentPage(2)
        } else {
            setCurrentPage(3)
        }
    }, [route]);

    return (
        <div className="w-100" style={{minHeight: 'calc(100vh - 88px)', minWidth: '100%', backgroundColor: '#202020'}}>
            <div className="w-100 d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3 pt-5 ps-5" id="v-pills-tab" role="tablist"
                     aria-orientation="vertical">
                    <Link to={'dashboard'} className={`nav-link ${currentPage === 1 ? 'active' : ''}`}
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                          aria-selected="true">Dashboard
                    </Link>
                    <Link to={'edit-profile'} className={`nav-link ${currentPage === 3 ? 'active' : ''}`}
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                          aria-selected="false">Profile
                    </Link>
                </div>
                <div className="tab-content w-100" id="v-pills-tabContent">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
};

