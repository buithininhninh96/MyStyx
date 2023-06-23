//__________________________________________________
//IMPORTING MODULES & DECLARING VARIABLES
const path = require('path')
const express = require("express")

const app = express()

/* const folderRes = "res_files"
const fileLorem = "Lorem.txt"
const fileNewTxt = "result.txt"

const filePathLorem = path.join(__dirname, folderRes, fileLorem)
const filePathNew = path.join(__dirname, folderRes, fileNewTxt)
 */

//__________________________________________________
//needed view engine to output a ejs file which is similar to html
app.set("view engine", "ejs")


app.get("/", (req, res) => {

  console.log("Homepage loaded.")

  //renders a ejs file
  res.render('home_page')

})

//__________________________________________________
//accesses te public folder and allows index.ejs to link to other files in the public folder
app.use(express.static("public"));

const loginAndRegisterRouter = require("./routes/login_and_registration")
app.use("/", loginAndRegisterRouter)

const readingRouter = require("./routes/reading_form")
app.use("/", readingRouter)

app.listen(1234)