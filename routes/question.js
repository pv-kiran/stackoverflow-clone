const express = require('express');
const router = express.Router();
const passport = require('passport');
const {getAllQuestions,createQuestion,postAnswer,upvoteQuestion ,searchByQuestion} = require('../controllers/QuestionConroller');
const Question = require('../Models/Question');

// @type GET
// @route /api/question/all
// @desc route for fetching all questions
// access PUBLIC
router.get('/all', getAllQuestions)

// @type POST
// @route /api/question/
// @desc route for posting the questions
// access PRIVATE
router.post('/' , passport.authenticate('jwt',{session: false}) , createQuestion )

// @type POST
// @route /api/question/answer/:id
// @desc route for answering the questions
// access PRIVATE
router.post('/answer/:id' , passport.authenticate('jwt',{session: false}) , postAnswer )


// @type POST
// @route /api/question/upvote/:id
// @desc route for upvoting the question
// access PRIVATE
router.post('/upvote/:id',passport.authenticate('jwt',{session: false}), upvoteQuestion)

router.get('/search' ,passport.authenticate('jwt',{session: false}) , searchByQuestion );

module.exports = router;