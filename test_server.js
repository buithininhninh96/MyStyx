//importing the necessary modules:
const express = require("express")
const app = express()
const router = express.Router()
const bcrypt = require("bcrypt")
const port = 4000

//not a standard practice but it's for temp storage:
const users = []

//sets the view engine to ejs
app.set("view engine", "ejs")

//allows us to access public folder to use css in the ejs file
app.use(express.static("public"))

//allow us to use form data in req 
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) =>{
    res.render("testing_homepage", { name: "stardusts"})
    console.log("navigating the homepage")
})

app.get("/login", (req, res) =>{
    res.render("testing_login")
    console.log("navigating the login page")
})

app.post("/login", (req, res) => {
    
})

app.get("/register", (req, res) =>{
    res.render("testing_register")
    console.log("navigating the registration page")
})

app.post("/register", async (req, res) => {
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

//___________________________________
//things I want to try or learn:

//replace app. with router.
//passport

//___________________________________
//to get the whole thing hosted on the port declared at top.
app.listen(port)