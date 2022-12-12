require('dotenv').config()
const jwt = require('jsonwebtoken')
const verifyToken = (req, res, next) =>{
    const token = req.headers['x-access-token'];
    if(!token){
        res.send("No Token Sent!")
    } else{
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) =>{
            if(err){
                res.json({auth: false, message: 'You failed the authentication'})
            }
            //req.userId = decoded.id
            next();
            
        })
    }
}

module.exports = verifyToken;