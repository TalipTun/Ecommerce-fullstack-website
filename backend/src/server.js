require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then( () => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.listen(process.env.PORT, () => console.log("Server running on port 5000"));

