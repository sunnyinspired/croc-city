const bcrypt = require('bcrypt');
const con = require('../config/dbconfig');
const jwt = require('jsonwebtoken')

const Login = (req, res) =>{
    const { username, password } = req.body;
    con.query("SELECT * FROM `admin_users_tbl` WHERE `username` = ?", [username],(err, results) =>{
            if(err){
                res.send(err)
            }
            else{
                if(results.length > 0){
                    bcrypt.compare(password, results[0].password).then(match =>{
                        if(match){
                            //const id = results[0].admin_id;
                            const accessToken = jwt.sign(
                                {id: results[0].admin_id},
                                process.env.JWT_KEY, {
                                expiresIn: '5m'
                            });
                            const refreshToken = jwt.sign(
                                {id: results[0].admin_id}, 
                                process.env.REFRESH_JWT_KEY, {
                                expiresIn: '1w'
                            });
                            res.cookie('accessToken', accessToken, {
                                httpOnly: true,
                                maxAge: 24 * 60 * 60 * 1000
                            });
                            res.cookie('refreshToken', refreshToken, {
                                httpOnly: true,
                                maxAge: 7 * 24 * 60 * 60 * 1000
                            });
                            res.send({auth:true, message: "Success!"})
                        }
                        else{
                            res.send({auth:false, message: "Wrong Username / Password Combination"})
                        }
                    })
                    
                }
                else{
                    res.json({auth:false, message: 'User Not Found'})
                }
            }
        }

        )
}

const AuthenticatedUser = async (req, res) =>{
    

    try {
        const accessToken = req.cookies['accessToken'];
        
        const payload = await jwt.verify(accessToken, process.env.JWT_KEY)
    if(!payload){
        return res.status(401).send("UnAuthenticated")
    }
    con.query(`SELECT username, role_id FROM admin_users_tbl WHERE admin_id = ?`, [payload.id], (err, result) =>{
        if(err){
            return res.status(401).send("User Not Found")
        }
        else{
        res.json({userData: result})
        }
    });
    
    } catch (error) {
        return res.status(401).send({"Authentication Error": error});
    }
}

const RefreshToken = async (req, res) =>{
    try {
        const refreshToken = req.cookies['refreshToken'];
        if(!refreshToken){
            return res.status(401).send("No Token Sent")
        }
        
        const payload =  await jwt.verify(refreshToken, process.env.REFRESH_JWT_KEY)
    if(!payload){
        res.cookie('accessToken', '', {maxAge: 0});
        res.cookie('refreshToken', '', {maxAge:0});
    
        return res.status(401).send("UnAuthenticated")
    }

    const accessToken = jwt.sign(
        {id: payload.id},
        process.env.JWT_KEY, {
        expiresIn: '5m'
    });
    
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });
    res.send({message: 'success'})
    } catch (error) {
        return res.status(401).send({"Authentication Error": error});
    }
}

const Logout = (req, res) =>{
    res.cookie('accessToken', '', {maxAge: 0});
    res.cookie('refreshToken', '', {maxAge:0});

    res.send({auth: false, message: 'Logged out Successfully!'})
}
module.exports = {Login, AuthenticatedUser, RefreshToken, Logout};