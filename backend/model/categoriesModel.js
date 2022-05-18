const mongoose = require("mongoose")

const categoriesSchema = new mongoose.Schema({
    categories: {
        type: String,
        required: [true, "Please enter the categories"]
    },
    videos: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model("categories", categoriesSchema)