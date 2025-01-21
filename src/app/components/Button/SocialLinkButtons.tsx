import Button from "./Button";

const SocialLinkButtons = () => {
    return (
        <div className="flex">
            <Button iconUrl="/instagram.png" altText="Instagram" className="w-8 h-8 bg-zinc-400 hover:bg-white" />
            <Button iconUrl="/youtube.png" altText="YouTube" className="w-8 h-8 bg-zinc-400 hover:bg-white" />
            <Button iconUrl="/twitter.png" altText="Twitter" className="w-6 h-6 mt-1 ml-1 bg-zinc-400 hover:bg-white" />
            <Button iconUrl="/facebook.png" altText="Facebook" className="w-8 h-8 bg-zinc-400 hover:bg-white" />
        </div>
    );
};

export default SocialLinkButtons;