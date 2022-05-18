const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")

app.use(express.json({ limit: "50mb" }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
app.use(fileUpload())

const categoriesRoute = require("./routes/categoriesRoutes")
const userRoute = require("./routes/userRoutes")

app.use("/api/v1", categoriesRoute)
app.use("/api/v1", userRoute)


module.exports = app