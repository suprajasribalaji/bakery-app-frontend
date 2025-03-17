import Footer from "../components/Footer/Footer";
import NavBar from "../components/Nav/NavBar";

const TermsAndConditions = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-stoneGray100 flex justify-center py-10 -mt-48">
                <div className="max-w-5xl p-6 rounded-lg mt-2">
                    <div className="text-center">
                        <p className="tracking-[0.05em] text-[240%] text-brightRed font-satisfy font-bold">Terms and Conditions</p>
                    </div>
                    <div className="mt-4 bg-white text-justify">
                        <p className="text-center pt-6 text-sm"><i>Last updated: March 17, 2025</i></p>
                        <div className="pl-24 pr-24 pb-24 mt-12 text-sm">
                            <div>
                                <p className="mt-4">
                                    Welcome to S's Patisserie! By accessing and using our website, services, and products, you agree to abide by the following Terms and Conditions. Please read them carefully before using our platform.    
                                </p>
                            </div>
                            
                            <div>
                                <h2 className="mt-6 font-semibold">1. Acceptance of Terms</h2>
                                <p className="mt-2">
                                    By using our website, purchasing our products, or accessing our services, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">2. Eligibility</h2>
                                <p className="mt-2">
                                    You must be at least 18 years old or have the legal consent of a guardian to make purchases from our website. By using our services, you confirm that you meet this requirement.                            
                                </p>
                            </div>                        

                            <div>
                                <h2 className="mt-6 font-semibold">3. Products and Services</h2>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>We offer freshly baked goods, customized orders, and delivery services.</li>
                                    <li>All product descriptions and prices are subject to change without notice.</li>
                                    <li>We reserve the right to discontinue any product at any time.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">4. Ordering and Payments</h2>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Orders must be placed through our official website or landline.</li>
                                    <li>Payment must be made at the time of purchase via accepted payment methods (credit/debit cards, PayPal, etc.).</li>
                                    <li>We reserve the right to cancel orders due to pricing errors or stock unavailability.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">5. Shipping and Delivery</h2>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>We deliver to specified locations within the service area.</li>
                                    <li>Delivery times are estimates and may vary due to unforeseen circumstances.</li>
                                    <li>Customers must provide accurate delivery information. We are not responsible for failed deliveries due to incorrect addresses.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">6. Refunds and Cancellations</h2>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Orders can be canceled within 1 hour of placing them.</li>
                                    <li>Due to the perishable nature of our products, refunds will only be issued for defective or incorrect orders.</li>
                                    <li>If you experience any issues with your order, please contact us within 24 hours of delivery.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">7. User Conduct</h2>
                                <p className="mt-2">By using our website, you agree not to:</p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Misuse the website for illegal or unauthorized purposes.</li>
                                    <li>Provide false information when creating an account or placing orders.</li>
                                    <li>Attempt to interfere with the website’s security or functionality.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">8. Intellectual Property</h2>
                                <p className="mt-2">
                                    All content on our website, including images, logos, text, and designs, is the property of S's Patisserie and protected by copyright laws.
                                </p>
                                <p className="mt-2">
                                    You may not use our intellectual property without prior written permission.
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">9. Privacy Policy</h2>
                                <p className="mt-2">
                                    We collect and use your personal information as described in our Privacy Policy. By using our services, you agree to our data practices.
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">10. Limitation of Liability</h2>
                                <p className="mt-2">
                                    We are not liable for indirect, incidental, or consequential damages resulting from the use of our website or products.
                                </p>
                                <p className="mt-2">
                                    We make no guarantees about the accuracy of product descriptions, pricing, or availability.
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">11. Changes to Terms</h2>
                                <p className="mt-2">
                                    We reserve the right to modify these Terms and Conditions at any time. Updates will be posted on this page, and continued use of our services constitutes acceptance of the new terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">12. Contact Information</h2>
                                <p className="mt-2">
                                    For any questions or concerns about these Terms and Conditions, contact us at:
                                </p>
                                <p className="mt-2">
                                    <strong>S's Patisserie</strong><br />
                                    Madurai, Tamil Nadu, India <br />
                                    suprajasri.balaji@gmail.com<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
