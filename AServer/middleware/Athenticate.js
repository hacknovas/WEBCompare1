const jwt = require("jsonwebtoken");
const users = require("../Schemas/RegUser");

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifytoken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await users.findOne({ _id: verifytoken._id });

        if (!rootUser) {
            throw new Error("Not Found User");
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();

    } catch (err) {
        res.status(401).send("Unavailable Token");
        console.log("ERROR IN Authentications middleware");
    }
}

module.exports = authenticate;
