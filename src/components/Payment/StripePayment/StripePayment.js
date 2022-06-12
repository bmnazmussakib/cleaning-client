import React from 'react';

import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCheckout from '../StripeCheckout/StripeCheckout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const StripePayment = () => {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: "pi_1DrDcW2eZvKYlo2CHci8WlW9_secret_apBzdo5XBT4nsUiToVrKUgRyp",
        // clientSecret: '{{CLIENT_SECRET}}',
    };


    
    return (
        <Elements stripe={stripePromise} options={options}>
            <StripeCheckout />
        </Elements>
    );
};

export default StripePayment;

