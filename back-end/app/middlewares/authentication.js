const jwt = require('jsonwebtoken')

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization
    if(token){
        try{
            const tokenData = jwt.verify(token, process.env.USER_SECRET_KEY)
            req.tokenData = tokenData
            next()
        }catch(e){
            res.json({errors: e})
        }
       
    }else{
        res.json({errors: 'you need to be logged in'})
    }
}

module.exports = {
    authenticateUser
}