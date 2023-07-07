const express = require("express")
const router = express.Router()
const app = express()
const bcrypt = require("bcrypt")

//not a standard practice but it's for temp storage:
const users = []

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

router.post("/register", async (req, res) =>{
    try {
        const hashedPw = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(), //no need for it in DB bec they do it automatically
            username: req.body.username,
            email: req.body.email,
            password: hashedPw
        })
        console.log("user created sucessfully.")
        res.redirect("/login")
    } catch {
        console.log("Oops, something went wrong while registering.")
        res.redirect("/register")
    }
    
    console.log(users)
})

module.exports = router