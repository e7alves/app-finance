const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.+\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,12})/

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({errors})
}

const login = (req, res) => {
    const email = req.body.email || ''
    const password = req.body.password || ''
    User.findOne({email}, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, err)
        }
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(user, env.authSecret, {
                expiresIn: "1 day"
            })
            res.json({email: user.email, token})
        } else {
            return res.status(400).send({errors: ['Invalid email/password']})
        }
    })
}

const validateToken = (req, res) => {
    const token = req.body.token || ''
    jwt.verify(token, env.authSecret, (err, decoded) => {
        res.status(200).send({valid: !err})
    })
}

const signup = (req, res) => {
    const email = req.body.email || '';
    const password = req.body.password || '';
    const confirmPassword = req.body.confirmPassword || '';
    if (!email.match(emailRegex)) {
        return res.status(400).send({errors: ['Invalid email']})
    }
    if (!password.match(passwordRegex)) {
        return res.status(400).send({errors: [`Password must be between 6 and 12 characters, one uppercase letter, one lowercase 
            letter, one special character and one number`]})
    }

    const salt = bcrypt.genSaltSync()
    const passwordhash = bcrypt.hashSync(password, salt)
    if (!bcrypt.compareSync(confirmPassword, passwordhash)) {
        return res.status(400).send({errors: ['The password don\'t match']})
    }

    User.findOne({email}, (err, user) => {
        if(err) {
            return sendErrorsFromDB(res, err)
        } else if(user) {
			return res.status(400).send({errors: ['User already exists']})
		}
        const newUser = new User({email, password: passwordhash})
        newUser.save(err => {
            if (err) {
                return sendErrorsFromDB(res, err)
            }
            login(req, res)
        })
    })
}

module.exports = {login, validateToken, signup}