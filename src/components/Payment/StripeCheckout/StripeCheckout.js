import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const StripeCheckout = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://example.com/order/123/complete",
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(elements);

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe}>Submit</button>
        </form>
    )
};


export default StripeCheckout;