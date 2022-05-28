var express = require('express');
var router = express.Router();
const {userRegistration , userLogin} = require('../controllers/AuthController');



// @type POST
// @route /api/auth/registration
// @desc route for user registration
// access Public
router.post('/registration', userRegistration )

// @type POST
// @route /api/auth/login
// @desc route for user login
// access Public
router.post('/login', userLogin )

// router.get('/profile', passport.authenticate('jwt',{session: false}),(req,res) => {
//     res.json({
//         id: req.user.id,
//         name: req.user.name,
//         email: req.user.email
//     })
// })


module.exports = router;
