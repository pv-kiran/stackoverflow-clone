const express = require('express');
const router = express.Router();
const passport = require('passport');
const {getProfile,createProfile,getProfileByUsername,getAllProfiles,
deleteProfile,addWorkrole,deleteWorkrole} = require('../controllers/ProfileController');

// @type GET
// @route /api/profile
// @desc route for fetching profile of current user 
// access PRIVATE
router.get('/' ,passport.authenticate('jwt' , {session: false}), getProfile)

// @type POST
// @route /api/profile
// @desc route for creating the profile
// access PRIVATE
router.post('/', passport.authenticate('jwt' , {session: false}) , createProfile)

// @type GET
// @route /api/profile/:username
// @desc route for fetching profile based on username
// access PRIVATE
router.get('/:username' , passport.authenticate('jwt',{session: false}) , getProfileByUsername )

// @type GET
// @route /api/profile/find/all
// @desc route for fetching all the user profiles
// access PRIVATE
router.get('/find/all',passport.authenticate('jwt',{session: false}) , getAllProfiles)


// @type DELETE
// @route /api/profile/delete
// @desc route for deleting the user profile
// access PRIVATE
router.delete('/delete',passport.authenticate('jwt',{session: false}) , deleteProfile)

// @type POST
// @route /api/profile/workrole
// @desc route for creating the workrole
// access PRIVATE
router.post('/workrole', passport.authenticate('jwt',{session: false}), addWorkrole)

// @type DELETE
// @route /api/profile/workrole/:id
// @desc route for deleting the workrole
// access PRIVATE
router.delete('/workrole/:id' , passport.authenticate('jwt',{session: false}) , deleteWorkrole)

module.exports = router;