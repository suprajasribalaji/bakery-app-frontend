import Footer from "../components/Footer/Footer";
import NavBar from "../components/Nav/NavBar";

const Policy = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-stoneGray100 flex justify-center py-10 -mt-48">
                <div className="max-w-5xl p-6 rounded-lg mt-2">
                    <div className="text-center">
                        <p className="tracking-[0.05em] text-[240%] text-brightRed font-satisfy font-bold">Privacy Policy</p>
                    </div>
                    <div className="mt-4 bg-white text-justify">
                        <p className="text-center pt-6 text-sm"><i>Last updated: March 17, 2025</i></p>
                        <div className="pl-24 pr-24 pb-24 mt-12 text-sm">
                        <div>
                            <p><strong>Welcome to S's Patisserie</strong></p>
                            <p className="mt-4">
                                Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="mt-6 font-semibold">1. Information We Collect</h2>
                            <p className="mt-2">
                                We may collect the following types of information from you:
                            </p>
                            <ul className="list-disc pl-5 mt-2">
                                <li><strong>Personal Information:</strong> Name, Email address, Phone number, Delivery and billing address, Payment details (processed securely by third-party payment processors).</li>
                                <li><strong>Non-Personal Information:</strong> IP address, Browser type, Device information, Cookies, and usage data.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mt-6 font-semibold">2. How We Use Your Information</h2>
                            <ul className="list-disc pl-5 mt-2">
                                <li>To process and fulfill orders for our bakery products.</li>
                                <li>To communicate with you regarding your orders, promotions, and updates.</li>
                                <li>To personalize your experience and improve our website functionality.</li>
                                <li>To analyze trends and enhance our services.</li>
                                <li>To comply with legal and regulatory requirements.</li>
                            </ul>
                        </div>                        

                        <div>
                            <h2 className="mt-6 font-semibold">3. Sharing Your Information</h2>
                            <p className="mt-2">We do not sell, rent, or trade your personal information. However, we may share your information with:</p>
                            <ul className="list-disc pl-5 mt-2">
                                <li><strong>Service Providers:</strong> Third-party companies assisting in payment processing, delivery, and website maintenance.</li>
                                <li><strong>Legal Compliance:</strong> Authorities when required to comply with legal obligations.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, sale, or acquisition.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mt-6 font-semibold">4. Cookies and Tracking Technologies</h2>
                            <p className="mt-2">
                                Our website may use cookies and similar technologies to enhance your browsing experience. You can manage cookie preferences through your browser settings.
                            </p>
                        </div>

                        <div>
                            <h2 className="mt-6 font-semibold">5. Data Security</h2>
                            <p className="mt-2">
                                We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is completely secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="mt-6 font-semibold">6. Your Rights</h2>
                            <p className="mt-2">
                                Depending on your location, you may have the right to:
                            </p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>Access, update, or delete your personal information.</li>
                                <li>Opt-out of marketing communications.</li>
                                <li>Restrict or object to certain data processing activities.</li>
                            </ul>
                            <p className="mt-2">To exercise your rights, please contact us at <strong>[Insert Contact Email]</strong>.</p>
                        </div>
                        
                        <div>
                            <h2 className="mt-6 font-semibold">7. Third-Party Links</h2>
                            <p className="mt-2">
                                Our website may contain links to third-party sites. We are not responsible for their privacy practices, so we encourage you to review their policies.
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="mt-6 font-semibold">8. Changes to This Policy</h2>
                            <p className="mt-2">
                                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="mt-6 font-semibold">9. Contact Us</h2>
                            <p className="mt-2">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="mt-2">
                                <strong>S's Patisserie</strong><br />
                                Madurai, Tamil Nadu, India<br />
                                suprajasri.balaji@gmail.com<br />
                            </p>
                        </div>

                       <div>
                        <p className="mt-16 text-center font-semibold">
                                Thank you for trusting S's Patisserie with your information!
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

export default Policy;
