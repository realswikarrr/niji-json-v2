import express from "express";
import bodyParser from "body-parser";

import buyContentRoute from "./routes/buyContent.js";
import rentContentRoute from "./routes/rentContent.js";

const app = express();

const PORT = 5000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

app.use("/buyContent", buyContentRoute);
app.use("/rentContent", rentContentRoute);

app.get("/", (req, res) => {
  res.send("Hello From Homepage");
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
