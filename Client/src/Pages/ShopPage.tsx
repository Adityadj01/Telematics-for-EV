import {Hero} from "../Components/Hero/Hero.tsx";
import Popular from "../Components/Popular/Popular.tsx";
import {Offers} from "../Components/Offers/Offers.tsx";
import NewCollections from "../Components/NewCollections/NewCollections.tsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter.tsx";

export const ShopPage = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    );
};
