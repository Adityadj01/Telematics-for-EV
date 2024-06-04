import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../Pages/HomePage.tsx";
import {ShopPage} from "../Pages/ShopPage.tsx";
import {CategoryPage} from "../Pages/CategoryPage.tsx";
import four_banner from '../assets/4wheeler_banner.jpg'
import two_banner from '../assets/2wheeler_banner.jpg'
import three_banner from '../assets/3wheeler_banner.jpg'
import {WeatherApp} from '../Pages/weather.tsx';
import { MapApp } from "../Pages/Map.tsx";
import {ProductsPage} from "../Pages/ProductsPage.tsx";
import {AuthenticationPage} from "../Pages/AuthenticationPage.tsx";
import {ProfilePage} from "../Pages/ProfilePage/ProfilePage.tsx";
import {CartsPage} from "../Pages/CartsPage.tsx";
import {ProfileEditPage} from "../Pages/ProfilePage/ProfileEditPage.tsx";
import {DashboardPage} from "../Pages/ProfilePage/DashboardPage.tsx";

export const RouterList = createBrowserRouter([
    {
        path: '', element: <HomePage/>, children: [
            {path: '', element: <ShopPage/>},
            {path: '/2wheeler', element: <CategoryPage category={"Two Wheeler"} banner={two_banner}/>},
            {path: '/3wheeler', element: <CategoryPage category={"Three Wheeler"} banner={three_banner}/>},
            {path: '/4wheeler', element: <CategoryPage category={"Four_Wheeler"} banner={four_banner}/>},
            {path: '/product', element: <ProductsPage/>},
            {path: '/product/:productId', element: <ProductsPage/>},
            {path: '/login', element: <AuthenticationPage/>},
            {path: '/weather', element: <WeatherApp/>},
            {path: '/map', element: <MapApp/>},
            {
                path: '/profile', element: <ProfilePage/>, children:
                    [
                        {path: 'dashboard', element: <DashboardPage/>}, {
                        path: 'carts',
                        element: <CartsPage/>
                    }, {path: 'edit-profile', element: <ProfileEditPage/>}
                    ]
            }
        ]
    },

])