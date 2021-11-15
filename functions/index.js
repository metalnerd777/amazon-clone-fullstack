const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IXa9CARwkoG0dYN8mQWLJItqUOQQAvzNBVBJibAj3bwVlxqAC8mmxHK3H9nYmynyHWImEp9Ljby7f2jYX1Oduu300qgnJbuIn"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("okokokokok"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recived for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//endpoint example
//http://localhost:5001/clone-fs/us-central1/api
