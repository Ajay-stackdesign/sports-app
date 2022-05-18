const User = require("../model/userModel")
const sendToken = require("../utils/sendToken")
const cloudinary = require("cloudinary")

exports.registerUser = async (req, res, next) => {
    try {
        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: "avatars",
            width: 150,
            crop: "scale",
        });
        const { name, email, password } = req.body

        // const file = req.files.avatar
        // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        //     folder: "avatars",
        //     width: 150,
        //     crop: "scale",
        // });
        const user = await User.create({
            name,
            email,
            password,
            avatar: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            },
        })
        sendToken(user, 200, res)
        // const token = user.getJWTToken()
        // res.status(201).json({
        //     success: true,
        //     user,
        //     token
        // })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(500).json({
                message: "Invalid Email or password"
            })
        }

        const user = await User.findOne({ email }).select("+password")
        if (!user) {
            return res.status(500).json({
                message: "Invalid Email or Password"
            })
        }

        const isPassword = await user.comparePassword(password)
        if (!isPassword) {
            return res.status(500).json({
                message: "Invalid Email or Password"
            })
        }

        sendToken(user, 200, res)
        // const token = user.getJWTToken()
        // res.status(200).json({
        //     success: true,
        //     message: "Logged in",
        //     token
        // })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.logoutUser = async (req, res, next) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        })

        res.status(200).json({
            success: true,
            message: "You are Logged Out"
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

