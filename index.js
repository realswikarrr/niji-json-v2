import express from "express";
import bodyParser from "body-parser";
var cors = require("cors");
import buyContentRoute from "./routes/buyContent.js";
import rentContentRoute from "./routes/rentContent.js";

const app = express();
app.use(cors());
const PORT = 5000;

app.use(bodyParser.json());

app.use("/buyContent", buyContentRoute);
app.use("/rentContent", rentContentRoute);

app.get("/", (req, res) => {
  res.send("Hello From Homepage");
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
