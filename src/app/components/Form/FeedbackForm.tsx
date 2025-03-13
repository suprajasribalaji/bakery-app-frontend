import { TNDistricts } from "@/app/utils/constants/TNDistricts";
import RadioButton from "../Button/RadioButton";
import InputField from "../Input/InputField";

const FeedbackForm = () => {
    const tnDistricts = TNDistricts;

    return (
        <div id="feedback-form" className="pt-12 text-[82%]">
            <form className="w-[95%] text-sm">
              <div className="mb-5">
                <p className="label">TITLE *</p>
                <div className="input-flex gap-4">
                  <RadioButton label="Mr." name="title" value="Mr" id="title-option-1" />
                  <RadioButton label="Ms." name="title" value="Ms" id="title-option-2" />
                  <RadioButton label="Mrs." name="title" value="Mrs" id="title-option-3" />
                </div>
              </div>

              <div className="display-grid pb-2">
                <InputField label="First name" type="text" id="floating_first_name" name="floating_first_name" placeholder=" " required />
                <InputField label="Last name" type="text" id="floating_last_name" name="floating_last_name" placeholder=" " required />
                <InputField label="City" type="select" id="floating_cities" name="floating_cities" placeholder=" " options={Object.values(tnDistricts)} />
              </div>

              <div className="display-grid pb-4">
                <InputField label="Contact number" type="tel" id="floating_phone" name="floating_phone" placeholder=" " required />
                <InputField label="Email address" type="email" id="floating_email" name="floating_email" placeholder=" " required />
              </div>

              <div className="radio-button-div">
                <p className="label">Please select the type of Feedback *</p>
                <div className="input-flex gap-6">
                  <RadioButton label="Concern" name="feedback_type" value="Concern" id="feedback-type-option-1" />
                  <RadioButton label="Appreciation" name="feedback_type" value="Appreciation" id="feedback-type-option-2" />
                  <RadioButton label="Suggestion" name="feedback_type" value="Suggestion" id="feedback-type-option-3" />
                  <RadioButton label="Query" name="feedback_type" value="Query" id="feedback-option-4" />
                </div>
              </div>

              <div className="radio-button-div">
                <p className="label">You have placed your order with us through *</p>
                <div className="input-flex gap-8">
                  <RadioButton label="At Restaurant" name="order_method" value="AtRestaurant" id="order-option-1" />
                  <RadioButton label="Website" name="order_method" value="Website" id="order-option-2" />
                  <RadioButton label="Contact number" name="order_method" value="ContactNumber" id="order-option-3" />
                </div>
              </div>

              <div className="pb-4">
                <textarea
                  id="message"
                  rows={5}
                  className="message-and-button block p-2.5 w-3/5 text-gray-900 bg-gray-50 border:none focus:ring-blue-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>

              <div className="pt-2">
                <p>Re-Captcha</p>
              </div>

              <div className="pt-16">
                <button
                  type="submit"
                  className="message-and-button pt-2 text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-600 font-medium text-sm w-1/6 h-10 px-5 py-2.5 text-center"
                >
                  Send
                </button>
              </div>
            </form>
        </div>
    );
};

export default FeedbackForm;