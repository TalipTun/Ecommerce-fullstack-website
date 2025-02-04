require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.cont(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then( () => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));

