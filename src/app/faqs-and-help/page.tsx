import Footer from "../components/Footer/Footer";
import NavBar from "../components/Nav/NavBar";

const FaqsAndHelp = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-[--color-cloudGray] flex justify-center py-10 -mt-72">
                <div className="max-w-5xl p-6 rounded-lg mt-2">
                    <div className="text-center">
                        <p className="tracking-[0.05em] text-[240%] text-brightRed font-satisfy font-bold">FAQs & Help</p>
                    </div>
                    <div className="mt-4 bg-white text-justify">
                        <div className="p-12">                        
                            <div>
                                <h2 className="mt-6 font-semibold">What is Contactless Delivery?</h2>
                                <p className="mt-2">
                                Contactless Delivery ensures that there is no direct contact between the customer and the delivery person. Your order will be placed in a pre-agreed location to avoid physical contact while ensuring safety.
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">How can I avail Contactless Delivery?</h2>
                                <p className="mt-2">
                                    You can opt for "Contactless Delivery" while placing your order through our website or app. In some cases, our delivery partner may also call you to confirm where to place your order.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">Can I pay with Cash-on-Delivery for Contactless Delivery?</h2>
                                <p className="mt-2">
                                    No, since we aim for a fully contactless process, Cash-on-Delivery (COD) is not available for contactless deliveries. Please use one of our online payment options.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">Do I have to pay extra for Contactless Delivery?</h2>
                                <p className="mt-2">
                                    No, there are no extra charges for Contactless Delivery.                             
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">How do I know where my order will be kept?</h2>
                                <p className="mt-2">
                                    You can specify your preferred location while placing the order. If our delivery partner is unable to reach you, the order will be placed at a clean and safe spot near your door.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">Where can I avail contactless delivery?</h2>
                                <p className="mt-2">
                                    This service is available for orders placed through our official website or mobile app. It is not available for phone orders.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">How can I find a bakery location near me?</h2>
                                <p className="mt-2">
                                    You can use our Store Locator on our website or app to find the nearest S's Patisserie outlet and check if they offer delivery or takeaway.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">How will I know my order has been received?</h2>
                                <p className="mt-2">
                                    Once your order is successfully placed, you will see an Order Confirmation on your screen. You will also receive a confirmation email or SMS.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">What if my delivery location is not listed?</h2>
                                <p className="mt-2">
                                    If your location is not listed, we may not be delivering to that area yet. However, you can still place an order for pickup from the nearest available outlet.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">What is the minimum order amount for delivery?</h2>
                                <p className="mt-2">
                                    The minimum order amount for delivery is ₹200 (inclusive of taxes).                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">What is a promo code?</h2>
                                <p className="mt-2">
                                    A promo code is a special discount code provided by S's Patisserie that allows you to avail exclusive deals. You can enter it at checkout to redeem your discount.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">Can I use multiple promo codes on a single order?</h2>
                                <p className="mt-2">
                                    No, only one promo code can be used per order. Promo codes cannot be combined with other offers.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">Can I reuse my promo code?</h2>
                                <p className="mt-2">
                                    Each promo code can only be used once per transaction unless specified otherwise in the offer terms.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">Can I use an expired promo code?</h2>
                                <p className="mt-2">
                                    No, promo codes are valid only for a specific period and will not be accepted after their expiration date.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">Can I modify or cancel my order after placing it?</h2>
                                <p className="mt-2">
                                    No, once an order is placed, it cannot be modified or canceled through the website or app. Please reach out to our customer support team for urgent concerns.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">How can I get a refund?</h2>
                                <p className="mt-2">
                                    Refunds are only applicable in the following cases:
                                </p>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>If there was an issue with your order (e.g., incorrect or defective items).</li>
                                    <li>If payment was debited but the order was not processed.</li>
                                </ul>
                                <p className="mt-2">
                                    To request a refund, please contact our support team at <i>suprajasri.balaji@gmail.com</i> or call <i>9876543210</i>. Refunds will be processed within 7-14 business days.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">Is there a time guarantee for delivery?</h2>
                                <p className="mt-2">
                                    We strive to deliver your order on time, but actual delivery times may vary due to traffic, weather, or other unforeseen circumstances.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">Can I get all products at all outlets?</h2>
                                <p className="mt-2">
                                    Our menu availability varies by location. If a product is unavailable at a particular bakery, we will notify you before processing your order.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">Do I need to pay taxes on my order?</h2>
                                <p className="mt-2">
                                    Yes, all prices shown on our website/app are exclusive of taxes. The final price, including applicable taxes, will be shown at checkout.                                
                                </p>
                            </div>

                            <div>
                                <h2 className="mt-6 font-semibold">How can I contact customer support?</h2>
                                <p className="mt-2">
                                    For any further assistance, feel free to reach out to us:
                                </p>
                                <p className="mt-2">
                                    📍 Madurai, Tamil Nadu, India<br />
                                    📧 suprajasri.balaji@gmail.com<br />
                                    📞 9876543210<br />
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

export default FaqsAndHelp;
