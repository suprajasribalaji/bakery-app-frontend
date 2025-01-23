'use client'

import { useRef, useState } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Nav/NavBar";

const AboutUs = () => {
    const [heartOfPatisserieIsExpanded, setHeartOfPatisserieIsExpanded] = useState<boolean>(false);
    const [purposeInEveryBiteIsExpanded, setPurposeInEveryBiteIsExpanded] = useState<boolean>(false);
    const [rootedInTraditionIsExpanded, setRootedInTraditionIsExpanded] = useState<boolean>(false);
    const [indulgingYouIsExpanded, setIndulgingYouIsExpanded] = useState<boolean>(false);
    const [sliceOfHeavenIsExpanded, setSliceOfHeavenIsExpanded] = useState<boolean>(false);

    const heartOfPatisserieRef = useRef<HTMLDivElement>(null);
    const purposeInEveryBite = useRef<HTMLDivElement>(null);
    const rootedInTradition = useRef<HTMLDivElement>(null);
    const indulgingYou = useRef<HTMLDivElement>(null);
    const sliceOfHeaven = useRef<HTMLDivElement>(null);

    const toggleContent = (expandingDiv: string) => {
        if(expandingDiv == "heart-of-patisserie"){
            setHeartOfPatisserieIsExpanded(!heartOfPatisserieIsExpanded);
            if(heartOfPatisserieRef.current) {
                heartOfPatisserieRef.current.scrollIntoView({behavior: "smooth", block:"start"});
            }
        }

        if(expandingDiv == "purpose-in-every-bite"){
            setPurposeInEveryBiteIsExpanded(!purposeInEveryBiteIsExpanded);
            if (purposeInEveryBite.current) {
                purposeInEveryBite.current.scrollIntoView({behavior: "smooth", block:"start"});
            }
        }

        if(expandingDiv == "rooted-in-tradition"){
            setRootedInTraditionIsExpanded(!rootedInTraditionIsExpanded);
            if (rootedInTradition.current) {
                rootedInTradition.current.scrollIntoView({behavior: "smooth", block:"start"});
            }
        }

        if(expandingDiv == "indulging-you"){
            setIndulgingYouIsExpanded(!indulgingYouIsExpanded);
            if (indulgingYou.current) {
                indulgingYou.current.scrollIntoView({behavior: "smooth", block:"start"});
            }
        }

        if(expandingDiv == "slice-of-heaven"){
            setSliceOfHeavenIsExpanded(!sliceOfHeavenIsExpanded);
            if (sliceOfHeaven.current) {
                sliceOfHeaven.current.scrollIntoView({behavior: "smooth", block:"start"});
            }
        }
    };

    return (
        <div>
            <NavBar />
            <div className="w-full bg-stoneGray100 -mt-72 pb-12">
                <div className="flex justify-center font-bold font-satisfy tracking-[0.03em] text-[320%] p-8">
                    <p>Our Journey</p>
                </div>
                <div className="mt-24">
                    <div className="flex w-full items-center" ref={heartOfPatisserieRef}>
                        <div className="w-[60%] flex items-start justify-center">
                            <img
                                src="/aboutus/heart-of-patisserie.png"
                                alt="The Heart of S's Patisserie"
                                className="w-[70%] h-[80%] rounded-lg"
                            />
                        </div> 
                        <div className="w-18 flex items-center justify-center -ml-12">
                            <img
                                src="/symbols/forward-arrow-with-broken-line.png"
                                alt="right-arrow"
                                className="w-20 cursor-pointer transform rotate-45"
                                onClick={() => toggleContent("heart-of-patisserie")}
                            />
                        </div>
                        <div
                            id="heart-of-patisserie"
                            className="w-[60%] single-grid flex flex-col items-start justify-start ml-12 mt-32"
                        >
                            <p className="about-us-header">
                                THE HEART OF S's PATISSERIE
                            </p>
                            {heartOfPatisserieIsExpanded && (
                                <p className="about-us-content mt-2">
                                    At S’s Patisserie, we craft food that brings joy to both adults and children. Every patisserie is made with care and love, creating moments of happiness for your family and inspiring us to keep improving, making our offerings healthier and more delightful.
                                    <br /><br />
                                    With nearly 50 stores across the country and a vision to double that within a year, we're honored to serve millions of families. Your trust supports over 500 families behind the scenes, and we’re deeply grateful.
                                    <br /><br />
                                    From our iconic stuffed patisseries to our fresh dough creations, we strive to deliver freshly baked happiness—fast and hot—anywhere you wish to enjoy it. Around here, it’s not just about the food. It’s about embracing every moment, building connections, and celebrating life.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex w-full items-center mt-28" ref={purposeInEveryBite}>
                        <div
                            id="purpose-in-every-bite"
                            className="w-[60%] single-grid flex flex-col items-end justify mr-24 mt-32"
                        >
                            <p className="about-us-header">
                                PURPOSE IN EVERY BITE
                            </p>
                            {purposeInEveryBiteIsExpanded && (
                                <p className="about-us-content mt-2">
                                    At S’s Patisserie, we’re redefining the way people view patisserie. It’s not just about indulging—it’s about nourishing. Our mission is to make food that keeps you healthy while putting a smile on your face.
                                    We’re proud to have broken the myth that patisserie isn’t good for children by crafting recipes that are both delicious and nutritious. 
                                    <br /><br />
                                    With over two years of experience, we’ve mastered the art of balancing health and taste. Every bite is a promise of quality, served with warmth and care.
                                    We believe in the power of homemade. Every dish we create brings the comfort of a home-cooked meal, wrapped in the style of a restaurant experience. At S’s Patisserie, every patisserie night is special, and every meal is a celebration of health, happiness, and togetherness.
                                </p>
                            )}
                        </div>
                        <div className="w-24 flex items-center justify-center -ml-20 mr-16">
                            <img
                                src="/symbols/love-arrow.png"
                                alt="love-right-arrow"
                                className="w-20 cursor-pointer transform rotate-[190deg] ml-16"
                                onClick={() => toggleContent("purpose-in-every-bite")}
                            />
                        </div>
                        <div className="w-[50%] flex items-center justify-center relative group">
                            <div className="relative z-10 transition-all duration-300 group-hover:z-0">
                                <img
                                src="/aboutus/cake-selling.png"
                                alt="The Heart of S's Patisserie"
                                className="w-[70%] rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="absolute top-6 left-12 z-0 opacity-20 transform transition-all duration-300 group-hover:z-20 group-hover:opacity-100"> {/* Wrapper for image 2 */}
                                <img
                                src="/aboutus/chefs-making-pizza.png"
                                alt="The Heart of S's Patisserie"
                                className="w-[80%] rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full items-center mt-32" ref={rootedInTradition}>
                        <div className="w-[60%] flex items-start justify-center">
                            <img
                                src="/aboutus/chef-making-pizza.png"
                                alt="The Heart of S's Patisserie"
                                className="w-[70%] h-[80%] rounded-lg"
                            />
                        </div> 
                        <div className="w-16 flex items-center justify-center -ml-12">
                            <img
                                src="/symbols/arrows.png"
                                alt="arrow"
                                className="w-20 cursor-pointer transform rotate-[15deg]"
                                onClick={() => toggleContent("rooted-in-tradition")}
                            />
                        </div>
                        <div
                            id="purpose-in-every-bite"
                            className="w-[60%] single-grid flex flex-col items-start justify ml-12 mt-32"
                        >
                            <p className="about-us-header">
                                ROOTED IN TRADITION
                            </p>
                            {rootedInTraditionIsExpanded && (
                                <p className="about-us-content mt-2">
                                    In 2022, a visionary woman in Madurai, Tamil Nadu, India, took a bold step by investing $20 from her savings to open a humble patisserie. Despite facing skepticism, she named it S’s Patisserie to honor her unwavering belief in her dream.
                                    Her passion for crafting exceptional patisserie, paired with heartfelt service, transformed her small venture into something extraordinary. 
                                    Customers flocked to experience the warmth of home in every bite, and soon, her vision grew into a beloved tradition.
                                    Today, we carry forward her legacy by staying true to her principles—creating food with love, treating every customer like family, and delivering an experience that feels like home.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex w-full items-center mt-32" ref={indulgingYou}>
                        <div
                            id="purpose-in-every-bite"
                            className="w-[54%] single-grid single-grid flex flex-col items-end justify mt-32"
                        >
                            <p className="about-us-header">
                                INDULGING YOU SINCE 2022
                            </p>
                            {indulgingYouIsExpanded && (
                                <p className="about-us-content mt-2">
                                    From day one, the founder of S’s Patisserie made a promise: to serve the healthiest, most family-friendly patisserie in town. This promise was rooted in her connection with farmers who grew organic, high-quality ingredients with care.That commitment to quality hasn’t changed. 
                                    <br /><br />
                                    Over the years, we’ve worked hand-in-hand with farmers who have grown with us, ensuring that every ingredient we use remains of the highest standard.
                                    No one loves patisserie or fresh dough more than we do. It’s not just in our name—it’s in every recipe we create and every smile we serve.
                                </p>
                            )}
                        </div>
                        <div className="w-16 flex items-center justify-center ml-8 mr-14">
                            <img
                                src="/symbols/up-arrow-with-broken-line.png"
                                alt="right-arrow"
                                className="w-20 cursor-pointer transform rotate-[-120deg]"
                                onClick={() => toggleContent("indulging-you")}
                            />
                        </div>
                        <div className="w-[30%] flex items-center justify-center relative group">
                            <div className="relative z-10 transition-all duration-300 group-hover:z-0">
                                <img
                                src="/aboutus/pizza.png"
                                alt="The Heart of S's Patisserie"
                                className="w-[70%] rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="absolute top-32 left-56 z-0 opacity-20 transform transition-all duration-300 group-hover:z-20 group-hover:opacity-100"> {/* Wrapper for image 2 */}
                                <img
                                src="/aboutus/fresh-dough.png"
                                alt="The Heart of S's Patisserie"
                                className="w-[100%] rounded-lg"
                                />
                            </div>
                            <div className="absolute -top-12 left-36 z-0 opacity-20 transform transition-all duration-300 group-hover:z-20 group-hover:opacity-100"> {/* Wrapper for image 2 */}
                                <img
                                src="/aboutus/momos.png"
                                alt="The Heart of S's Patisserie"
                                className="w-[70%] rounded-lg"
                                />
                            </div>
                            <div className="absolute -bottom-20 left-12 z-0 opacity-20 transform transition-all duration-300 group-hover:z-20 group-hover:opacity-100"> {/* Wrapper for image 2 */}
                                <img
                                src="/aboutus/buns.png"
                                alt="The Heart of S's Patisserie"
                                className="w-[70%] rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full items-center mt-32" ref={sliceOfHeaven}> 
                        <div className="w-[60%] flex items-start justify-center">
                            <img
                                src="/aboutus/patisserie-india.png"
                                alt="S's Patisserie: A Slice of Heaven"
                                className="w-[70%] h-[80%] rounded-lg"
                            />
                        </div>
                        <div className="w-16 flex items-center justify-center -ml-12">
                            <img
                                src="/symbols/curved-arrow-with-broken-line.png"
                                alt="right-arrow"
                                className="w-20 cursor-pointer transform rotate-[-4deg]"
                                onClick={() => toggleContent("slice-of-heaven")}
                            />
                        </div>
                        <div
                            id="purpose-in-every-bite"
                            className="w-[60%] single-grid flex flex-col items-start justify ml-12 mt-32"
                        >
                            <p className="about-us-header">
                                S's PATISSERIE: A SLICE OF HEAVEN
                            </p>
                            {sliceOfHeavenIsExpanded && (
                                <p className="about-us-content mt-2">
                                    In August 2022, S’s Patisserie expanded beyond borders, opening its first international restaurant in Paris, France. This marked the beginning of a global journey that celebrated the magic of fresh dough, irresistible patisseries, and hearty meals.
                                    <br /><br />
                                    In India, S’s Patisserie has become synonymous with freshness, flavor, and affordability. Recognized as the ‘Most Trusted Food Service Brand’ for two consecutive years, we take pride in offering a diverse menu featuring pizzas, pastas, burgers, sides, drinks, desserts, fresh bread, and more.
                                    <br /><br />
                                    For our customers, we’re more than just a patisserie brand—we’re a slice of heaven, bringing joy to every corner of the country with every bite.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;