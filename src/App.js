import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { auth } from "./config/firebase";
import { useStateValue } from "./dataLayer/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IXa9CARwkoG0dYNQ0M28orjdyYTNjbLQp6N9ajHYG7LkzamCfDgZfm5TApKtunQt3ZC6vPUncsFssZigG6jXuhI00oXBEVFSJ"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is: ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Subheader />
            <Orders />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Subheader />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Subheader />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* la raiz del path siempre al final */}
          <Route path="/">
            <Header />
            <Subheader />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
