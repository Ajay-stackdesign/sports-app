const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/mongohealth", { useNewUrlParser: true, useUnifiedTopology: true })
        .then((data) => {
            // console.log(`mongodb connected to with server: ${data.connection.host}`)
            console.log("connected to database")
        }).catch((err) => {
            console.log(err)
        })
}

module.exports = connectDatabase