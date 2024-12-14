var jwt = require('jsonwebtoken');

const authVerify = (req, res, next) => {
    try {
        const secretKey = process.env.SECRET_KEY;
        console.log('secretKey', secretKey);
        
         if (!req.headers.authorization) {
            res.json({
                data: [],
                status: "error",
                error: "Login required"
            })
        }
        var decoded = jwt.verify(req.headers.authorization, secretKey);
        console.log('decoded', decoded);
        if (!decoded) {
            res.json({
                data: [],
                status: "error",
                error: "Login required"
            })
        }
        req.body.user = decoded;
        next();
    } catch (error) {
        res.json({
            data: [],
            status: "error",
            error: error
        })
    }
}

module.exports = authVerify;