const express = require("express")
const router = express.Router()

router.get("/login", (req, res) => {
    console.log("navigating the /login route.")
    res.render('login')
})

router.get("/register", (req, res) => {
    console.log("navigating the /register route.")
    res.render('register')
})

module.exports = router