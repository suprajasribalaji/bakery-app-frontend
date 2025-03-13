import GrabDealsList from "../List/GrabDealsList";
import AboutUsList from "../List/AboutUsList";
import AssuranceList from "../List/AssuranceList";
import FranciseList from "../List/FranciseList";

import FeedbackSocialLink from "../SocialLink/FeedbackSocialLink";

const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <>
            <div id="page-bottom" className="grid grid-cols-4 text-left bg-black text-white font-sans">
                <GrabDealsList />
                <AboutUsList />
                <AssuranceList />
                <FranciseList />
            </div>
            <FeedbackSocialLink />
            <footer className="text-center text-xs font-light bg-black text-[--color-chineseSilver] font-heebo pb-4">
                <p className="p-small">Get yours now before it's gone</p>
                <p className="p-small">Supraja Sri @ {year} by S's Patisserie. All rights reserved</p>
            </footer>
        </>
    );
};

export default Footer;
