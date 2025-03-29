const jwt = require("jsonwebtoken")
require('dotenv').config()

const auth =  (req,res , next) =>{
    
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY );
        if (decoded){
            const {userId , role } = decoded ;
            req.role = role ;
            req.userId = userId ;
            next();
        }else{
            return res.status(401).json({ error: "Invalid token" });
        }

    } catch (error) {
        
        return res.status(500).json({ error: "Authentication failed" });
        
    
    }
}

module.exports ={auth}