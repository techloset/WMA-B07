var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");



const doSignup =async (req, res) => {
    try {
        console.log('req.body recieved', req.body);
        if (!req.body?.password) {
            res.json({
                data: [],
                status: "error",
                error: "password is required"
            })
        }
        var hash = bcrypt.hashSync(req.body.password, 8);
        console.log('hash', hash);
        let newUser = new User({
            name: req.body?.name,
            email: req.body?.email,
            password: hash,
            address: req.body?.address
        })

        let output = await newUser.save();
        res.json({
            data:output,
            status: "success"
        })

    } catch (error) {
        res.json({
            data: [],
            status: "error",
            error: error
        })
    }
}

const doLogin = async (req, res) => {
    try {
        if (!req.body?.email) {
            res.json({
                data: [],
                status: "error",
                error: "email is required"
            })
            
        }
        if (!req.body?.password) {
            res.json({
                data: [],
                status: "error",
                error: "password is required"
            })
        }

        const userFound = await User.findOne({ email: req.body.email });

        if (!userFound) {
            res.json({
                data: [],
                status: "error",
                error: "user not found"
            })
        }

        console.log("userFound", userFound);
        
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            userFound.password
        );
        console.log("passwordIsValid",passwordIsValid);
        
        if (!passwordIsValid) {
            res.json({
                data: [],
                status: "error",
                error: "password is invalid"
            })
        }

        const secretKey = process.env.SECRET_KEY;
        console.log('secretKey', secretKey);
        var token = jwt.sign({_id:userFound._id, email:  userFound.email, name:userFound.name }, secretKey);
        console.log('token', token);

        res.json({
            data: {
                token:token,
                email: userFound.email,
                name: userFound.name,
                address: userFound.address
            },
            status: "success"
        })

    } catch (error) {
        res.json({
            data: [],
            status: "error",
            error: error
        })
    }
}

module.exports = {
    doSignup,
    doLogin
}