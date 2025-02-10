const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = new User({ name, email, password});
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: "Error registering user"})
    }
});

router.get("/users", async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Error fetching users"});
    }
});

export default router;