const express = require("express")
const { createVideo, getVideo } = require("../contoller/categoriesController.")

const router = express.Router()

router.route("/video").post(createVideo)
router.route("/video/get").get(getVideo)


module.exports = router