const express = require("express");
const cors = require("cors");
const coockieParser = require("cookie-parser");
require("dotenv").config();


const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));


app.use(express.json());
app.use(coockieParser());

app.use("/api/", require("./routes/authRoutes"));

app.listen(process.env.PORT || 5000, () => {
    console.log(`Auth Service running on port ${process.env.PORT || 5000}`);
});