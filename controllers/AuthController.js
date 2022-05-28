var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const passport = require('passport');

// controller for user registration
// auth/registration
const userRegistration =  (req, res) => {
   const { name, email, password } = req.body;
   if(!name || !email || !password || password.length <= 5) {
       return res.status(400).send('Please provide a valid dada')
   } else {
       User.findOne({email: req.body.email})
    .then(user => {
        if(user) {
            return res.send(`User is already existing with this email ${req.body.email}`)
        } else {
              const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
               });

              bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(newUser.password, salt, (err, hash) => {
                     if(err) {
                         return res.status(400).json(err);
                     } else {
                         newUser.password = hash;
                         newUser.save()
                            .then(user => {
                                 res.json({
                                     message: 'User registration is success',
                                     name: user.name,
                                     email: user.email
                                 });
                            })
                            .catch(err => res.status(400).json({
                                Error: err.name ,
                                Message: err.message
                            }));
                            }
                 });
              });
        }
    })
    .catch(err => res.status(400).json(err))
   }
}


// Controller for user login
// auth/login
const userLogin = (req, res) => {
   const email = req.body.email;
   const password = req.body.password;
   if(!email || !password || (typeof password) !== 'string') {
       return res.status(400).send('Provide a valid email and password');
   } else {
       User.findOne({email: email})
        .then(user => {
            if(!user) {
                res.json(`Couldn't find any user with the email ${email}`)
            } else {
                bcrypt.compare(password, user.password, function(err, result) {
                     if(result) {
                            // creating the json web token
                            const data = {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }

                            jwt.sign(data, 'mysecretkey', {expiresIn: 3600}, (err, token) => {
                               if(err) {
                                   return res.status(400).json(err);
                               } else {
                                   res.status(200).json({
                                       message: 'Login is succesfull',
                                       token: token
                                   })
                               }
                            });
                        
                     } else {
                         res.status(400).send(`Incorrect password`);
                     }
                });
            }
        })
        .catch(err => res.status(400).json(err))
   }
}


module.exports = {
    userRegistration ,
    userLogin
}