const Question = require('../Models/Question');
const Profile = require('../Models/Profile');

const getAllQuestions = (req,res) => {
    Question.find()
        .then(questions => {
            if(!questions) {
                return res.status(404).send('No questions are found')
            } else {
                res.status(200).json(questions)
            }
        })
}

const createQuestion = (req,res) => {
    const newQuestion = {
        user: req.user.id,
        name: req.user.name ,
        question: req.body.question ,
        code: req.body.code 
    }
    const question = new Question(newQuestion);
    question.save()
        .then(question => res.json(question))
        .catch(err => res.status(400).json(err))
}


const postAnswer = (req,res) => {
    const newAnswer = {
        user: req.user.id,
        answer: req.body.answer
    }
    console.log(req.params.id)
    Question.findById(req.params.id)
        .then(question => {
           if(!question) {
               res.status(404).send('Question not found')
           } else {
              question.answer.push(newAnswer);
              question.save()   
                .then(question => res.json(question))
                .catch(err => res.status(400).json(err));
           }
        })
        .catch(err => res.status(400).json(err))
}

const upvoteQuestion = (req,res) => {
   Profile.findOne({user: req.user.id})
    .then(profile => {
        Question.findById(req.params.id)
            .then(question => {
                console.log(question)
                if(question.upvotes.filter(upvote => upvote.user.toString() === req.user.id.toString()).length > 0 ) {

                const removeThis = question.upvotes.map(item => 
                    item.user.toString())
                .indexOf(req.user.id)
                question.upvotes.splice(removeThis,1);
                question.save()
                .then(question =>  res.json(question))
                .catch(err => console.log(err))


                    // return res.status(404).json({noUpvote: 'User already upvoted'})
                } else {
                    question.upvotes.push({user: req.user.id});
                    question.save()
                        .then(question => res.json(question))
                        .catch( err => res.status(400).json(err))
                }
            })
            .catch(err =>  res.status(400).json(err))
    })
    .catch(err =>  res.status(400).json(err))
}


const searchByQuestion = (req,res) => {
    const { question } = req.query;
    const queryObject = {};
    if(question) {
        queryObject.question = {$regex: question , $options: 'i'};
    }
    Question.find(queryObject)
     .then(question => {
        if(!question) {
            return res.status(400).send('Not found');
        } else {
            res.status(200).json(question)
        }
     })
     .catch(err => res.status(400).json(err))
}




module.exports = {
    getAllQuestions,
    createQuestion,
    postAnswer,
    upvoteQuestion,
    searchByQuestion
}