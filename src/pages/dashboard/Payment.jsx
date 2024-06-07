import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../hooks/useCart";

const Payment = () => {

    const [cart] = useCart();
    const amount = cart.reduce((total, item) => total + item.price, 0);

    // Add Pubmilshable key from stripe
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

    return (
        <div>
            <div className="flex justify-between items-center mb-16">
                <h2 className="text-2xl font-semibold">Amount : BDT {amount} </h2>
                <h2 className="text-2xl font-bold italic text-blue-600">Pay with Stripe</h2>
            </div>
            <div className="md:w-[400px] mx-auto my-40">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;