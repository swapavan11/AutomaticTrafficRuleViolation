const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { dbConnect } = require("./utils/dbConnect");
const uploadRouter = require("./routes/uploadRouter");

dotenv.config({ path: ".env.local" });
const PORT = process.env.PORT || 3000;

dbConnect();

app.use(cors());
app.use(express.json());
app.use("/api/v1/challans", uploadRouter);

app.use("/", (req, res) => {
  res.json("Hey there!");
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
