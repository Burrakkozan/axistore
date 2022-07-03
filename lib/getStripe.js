import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_live_51LBJfOA7aCBfjMRXY39Gm7zJqhBIf90T2g6XwGw5mAYLJMR80X5kTYWhXuRi5riNgpCbfVn2bpOCA8W3Mr85vKNU00ZIGTlr3L');
  }

  return stripePromise;
}

export default getStripe;