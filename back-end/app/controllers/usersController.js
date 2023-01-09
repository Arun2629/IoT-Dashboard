const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {pick, omit} = require('lodash')
const usersCtrl = {}


usersCtrl.register = (req,res) => {
    const body = pick(req.body, ['username', 'email', 'password'])
    const user = new User(body)

    User.find({email: body.email})
        .then((uniqueUser) => {
            if(uniqueUser.length !== 0){
                res.json({errors: "User already registered"})
            }else{
                user.save()
                    .then((user) => {
                        const userObj = JSON.parse(JSON.stringify(user))
                        res.json(omit(userObj, ['password']))
                    })
                    .catch((err) => {
                        res.json(err)
                    })
            }
        })

    

}

usersCtrl.login = (req, res) => {
    const {email, password} = req.body
    User.findOne({email: email})
        .then((user) => {
            if(user) {
                bcrypt.compare(password, user.password)
                    .then((result) => {
                        if(result){
                            const token = jwt.sign({id: user._id, email: user.email, username: user.username}, process.env.USER_SECRET_KEY)
                            const userObj = JSON.parse(JSON.stringify(user))
                            res.json({token: token, user: omit(userObj, ['password'])})
                        }else{
                            res.json({errors: 'invalid email or password'})
                        }
                    })
            }else{
                res.json({errors: 'invalid email or password'})
            }
        })
}


module.exports = usersCtrl
