require('dotenv').config()
const jwt = require('jsonwebtoken')
const verifyToken = (req, res, next) =>{
    const token = req.cookies['accessToken'];
    if(!token){
        res.send("No Token Sent!")
    } else{
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) =>{
            if(err){
                return res.status(401).json({auth: false, message:'Token Expired'})
            }
            //req.userId = decoded.id
            next();
            
        })
    }
}

module.exports = verifyToken;