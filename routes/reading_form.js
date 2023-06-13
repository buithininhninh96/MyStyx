const express = require("express")
const router = express.Router()

router.get("/reading_form", (req, res) => {
    console.log("navigating the /reading_form route.")
    res.render('reading_form')
})

module.exports = router