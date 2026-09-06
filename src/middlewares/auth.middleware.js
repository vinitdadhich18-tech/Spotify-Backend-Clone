const jwt = require("jsonwebtoken");

async function authArtist(req, res, next){

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            msg : "Unauthorized"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.role !== "artist"){
            res.status(403).json({
                msg : "You don't have the access",
            })
        }

        req.user = decoded;

        next();
    }
    catch(err){
        console.log(err);

        res.status(401).json({
            msg : "Unauthorized"
        })
    }
}
async function authUser(req, res, next){

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            msg : "Unauthorized"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.role !== "user"){
            res.status(403).json({
                msg : "You don't have the access",
            })
        }

        req.user = decoded;

        next();
    }
    catch(err){
        console.log(err);

        res.status(401).json({
            msg : "Unauthorized"
        })
    }
}

module.exports = { authArtist, authUser };