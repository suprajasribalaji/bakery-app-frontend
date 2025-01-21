import Button from "../Button/Button";
import SocialLinkButtons from "../Button/SocialLinkButtons";

const FeedbackSocialLink = () => {
    return (
        <div id="feedback-social-links" className="grid grid-cols-2 bg-black text-white p-[2%] justify-items-center items-center pl-32 pr-[4.6rem]">
            <div id="feedback" className="grid grid-cols-2 gap-[0.5rem]">
                <p className="text-[95%] font-light">Partner with us to improve</p>
                <Button path="/feedback" iconUrl="/arrow-right.png" altText="Right Arrow" className="w-6 h-6 bg-zinc-400 hover:bg-white" />
            </div>
            <div id="social-links">
                <div className="font-bold text-[95%] text-center pr-1 pb-0.5">
                    <p>Follow us</p>
                </div>
                <div id="social-links-buttons" className="pt-[1%]">
                    <SocialLinkButtons />
                </div>
            </div>
        </div>
    );
};

export default FeedbackSocialLink;
