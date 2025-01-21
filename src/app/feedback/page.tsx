import { TNDistricts } from "@/constants/TNDistricts";
import FeedbackForm from "../components/Form/FeedbackForm";

const Feedback = () => {
    const tnDistricts = TNDistricts;
    
    return (
        <div id="feedback" className="feedback">
            <div className="home-navbar">
            </div>
              <div className="bg-[--color-cloudGray] h-[130vh] w-full font-openSans">
                <div className="text-center pt-[3%]">
                    <h1 className="text-[170%] font-extrabold tracking-wide text-[--color-brightRed]">FEEDBACK</h1>
                </div>
                <div className="p-[5%] px-[18%]">
                    <div className="font-extrabold text-[116%] tracking-[0.03em]">
                        <h1 className="sub-header">SUGGESTIONS</h1>
                    </div>
                    <div className="pt-[2%] text-[90%]">
                        <p>
                            We value your feedback and appreciate your thoughts! Whether it’s about our website, products, or services, your input helps us grow and improve. Thank you for taking the time to share—we can’t wait to hear from you! ❤️
                        </p>
                    </div>
                    <FeedbackForm />
                </div>
            </div>
        </div>
    );
};

export default Feedback;