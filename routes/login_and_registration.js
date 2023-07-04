const express = require("express")
const router = express.Router()
const app = express()


router.get("/login", (req, res) => {
    console.log("navigating the /login route.")
    res.render('login')
})

router.post("/login", (req, res) =>{
    
})

router.get("/register", (req, res) => {
    console.log("navigating the /register route.")
    res.render('register')
})

router.post("/register", (req, res) =>{
    
})

module.exports = router