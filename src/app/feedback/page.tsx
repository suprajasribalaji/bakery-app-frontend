import { TNDistricts } from "../constants/TNDistricts";

const Feedback = () => {
    const tnDistricts = TNDistricts;
    
    return (
        <div id="feedback" className="feedback">
            <div className="home-navbar">

            </div>
            <div className="feedback-div">
                <div className="feedback-header">
                    <h1 className="header">FEEDBACK</h1>
                </div>
                <div className="feedback-content">
                    <div className="feedback-sub-header">
                        <h1 className="sub-header">SUGGESTIONS</h1>
                    </div>
                    <div className="feedback-about">
                        <p>
                            We value your feedback and appreciate your thoughts! Whether it’s about our website, products, or services, your input helps us grow and improve. Thank you for taking the time to share—we can’t wait to hear from you! ❤️
                        </p>
                    </div>
                    <div className="feedback-form">
                        <form className="form text-sm">
                            <div className="mb-5">
                                <p className="mr-4 text-xs pb-2">TITLE *</p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center">
                                        <input
                                            id="title-option-1"
                                            type="radio"
                                            name="title"
                                            value="Mr"
                                            className="border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="title-option-1"
                                            className="block ms-1 text-xs font-medium text-gray-900 dark:text-gray-300"                                        >
                                            Mr.
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="title-option-2"
                                            type="radio"
                                            name="title"
                                            value="Ms"
                                            className="border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label 
                                            htmlFor="title-option-2"
                                           className="block ms-1 text-xs font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Ms.
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="title-option-3"
                                            type="radio"
                                            name="title"
                                            value="Mrs"
                                            className="border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="title-option-3" 
                                            className="block ms-1 text-xs font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Mrs.
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 pb-2">
                                <div className="relative z-0 w-full mb-3 group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-5/6 text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                </div>
                                <div className="relative z-0 w-full mb-3 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-5/6 text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                </div>
                                <div className="relative z-0 w-full mb-3 group">
                                    <select name="floating_cities" id="floating_cities" className="bg-gray-50 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {
                                            Object.entries(tnDistricts).map(([key, value]) => (
                                                <option key={key} value={value}>{value}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 pb-4">
                                <div className="relative z-0 w-full mb-2 group">
                                    <input type="tel" pattern="[0-9]{10}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-5/6 text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact number</label>
                                </div>
                                <div className="relative z-0 w-full mb-2 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-5/6 text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                </div>
                            </div>

                            <div className="mb-5 pb-2">
                                <p className="mr-4 text-xs pb-2">Please select the type of Feedback *</p>
                                <div className="flex flex-wrap gap-6">
                                    <div className="flex items-center">
                                        <input id="title-option-1" type="radio" name="title" value="Concern" className="border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="title-option-1" className="block ms-1 text-xs text-gray-900 dark:text-gray-300">
                                            Concern
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="title-option-2" type="radio" name="title" value="Appreciation" className="border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="title-option-2" className="block ms-1 text-xs text-gray-900 dark:text-gray-300">
                                            Appreciation
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="title-option-3" type="radio" name="title" value="Suggestion" className="border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="title-option-3" className="block ms-1 text-xs font-medium text-gray-900 dark:text-gray-300">
                                            Suggestion
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="title-option-3" type="radio" name="title" value="Query" className="border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="title-option-3" className="block ms-1 text-xs font-medium text-gray-900 dark:text-gray-300">
                                            Query
                                        </label>
                                    </div>
                                </div>
                            </div> 

                            <div className="mb-5 pb-2">
                                    <p className="mr-4 text-xs pb-2">You have placed your order with us through *</p>
                                    <div className="flex flex-wrap gap-8">
                                        <div className="flex items-center">
                                            <input id="title-option-1" type="radio" name="title" value="At Restaurant" className="border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="title-option-1" className="block ms-1 text-xs font-medium text-gray-900 dark:text-gray-300">
                                                At Restaurant
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="title-option-2" type="radio" name="title" value="Website" className="border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="title-option-2" className="block ms-1 text-xs font-medium text-gray-900 dark:text-gray-300">
                                                Website
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="title-option-3" type="radio" name="title" value="Phone Number" className="border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="title-option-3" className="block ms-1 text-xs font-medium text-gray-900 dark:text-gray-300">
                                                Phone number
                                            </label>
                                        </div>
                                    </div>
                                </div> 

                                <div className="pb-4">
                                    <textarea id="message" rows={5} className="block p-2.5 w-3/5 text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                                </div>

                                <div className="pt-2">
                                    <p>Re-Captcha</p>
                                </div>

                                <div className="pt-24">
                                    <button type="submit" className="pt-2 text-xs text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-600 font-medium rounded-lg text-sm w-1/6 h-10 px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-600">Send</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;