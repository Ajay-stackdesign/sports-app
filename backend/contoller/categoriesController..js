const Categories = require("../model/categoriesModel")

exports.createVideo = async (req, res, next) => {
    try {

        let videos = [];

        if (typeof req.body.videos === "string" || "number") {
            videos.push(req.body.videos);
        } else {
            videos = req.body.videos;
        }
        console.log(videos)

        const videosLinks = [];

        for (let i = 0; i < videos.length; i++) {
            const result = await cloudinary.v2.uploader.upload(videos[i], {
                folder: "products",
            });

            videosLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }

        req.body.videos = videosLinks;

        console.log(videosLinks)
        const video = await Categories.create(req.body)

        res.status(201).json({
            success: true,
            video
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getVideo = async (req, res, next) => {
    try {
        const video = await Categories.find()

        res.status(200).json({
            success: true,
            video
        })
    } catch (err) {
        res.status(500).json(err)
    }
}