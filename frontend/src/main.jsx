import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QrwN8J5od9Yw5ToKGKOZcWwHFutXqYQCnQDy0qKoZHTBFAM5YTUO3cDQ1ukmQWqnf4LJkkez8uyDiRi3xvSCJAC0088M4y875"
);

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
