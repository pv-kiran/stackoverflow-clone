const Profile = require('../Models/Profile');
const User = require('../Models/User');


const getProfile = (req,res) => {
    Profile.findOne({user: req.user.id})
        .then(userProfiles => {
            if(userProfiles) {
                return res.json(userProfiles)
            } else {
                res.status(404).send('Not found')
            }
        })
        .catch(err => {
            res.status(400).Send('Bad request')
        })
}


const createProfile = (req,res) => {

    const profileValues = {};
    console.log(req.body.username);
    profileValues.user = req.user.id;
    if(req.body.username) profileValues.username = req.body.username;
    if(req.body.website) profileValues.website = req.body.website;
    if(req.body.country) profileValues.country = req.body.country;
    if(req.body.proagramminglang) profileValues.proagramminglang = req.body.proagramminglang.split(',');
    if(req.body.portfolio) profileValues.portfolio = req.body.portfolio;
    profileValues.social = {};
    if(req.body.youtube) profileValues.social.youtube = req.body.youtube;
    if(req.body.instagram) profileValues.social.instagram = req.body.instagram;
    if(req.body.linkedin) profileValues.social.linkedin = req.body.linkedin;
    console.log(req.user.id)
    Profile.findOne({user: req.user.id , username: req.body.username})
        .then(profile => {
            console.log(profile);
            if(profile) {
                Profile.findOneAndUpdate(
                    { user: req.user.id } ,
                    { $set : profileValues} ,
                    {new: true}
                )
                .then(userProfile => {
                    res.json(userProfile)
                })
                .catch(err => res.status(400).json(err));
            } else {
               const newProfile = new Profile(profileValues);
               newProfile.save()
                .then(profile => {
                    res.json(profile);
                })
                .catch(err => res.status(400).json({
                    Error: err.name,
                    message: err.message
                }));
            }
        })
        .catch(err => res.status(400).json(err))
}

const getProfileByUsername = (req,res) => {
    Profile.findOne({username: req.params.username}).populate('user',['name','email'])
        .then(profile => {
            if(!profile) {
                res.status(404).send('User is not found')
            } else {
                res.json(profile);
            }
        })
        .catch(err => res.status(400).json( {Message: err.message }))
}

const getAllProfiles = (req,res) => {
    Profile.find().populate('user',['name','email'])
        .then(profiles => {
           if(!profiles) {
               res.status(404).send('No profiles are found');
           } else {
               res.status(200).json(profiles);
           }
        })
        .catch(err => res.status(400).json({Message: err.message}))
}

const deleteProfile = (req,res) => {
    Profile.findOneAndDelete({user: req.user.id})
        .then(() => {
           User.findOneAndDelete({_id: req.user.id})
            .then(() => res.status(200).send('Delete is successfull'))
            .catch(err =>res.status(404).json(err))
        })
        .catch(err =>  res.status(400).json(err))
}

const addWorkrole = (req,res) => {
    const workrole = {}
    workrole.role = req.body.role;
    workrole.company = req.body.company;
    workrole.country = req.body.country;
    workrole.current = req.body.current;
    Profile.findOne({user: req.user.id})
        .then(profile => {
            if(!profile) {
                res.status(404).send('Profile not found')
            } else {
                profile.workrole.push(workrole);
                profile.save() 
                    .then(profile => res.json(profile))
                    .catch(err => res.status(400).json(err))
            }
        })
        .catch(err => res.status(400).json(err))
}

const deleteWorkrole = (req,res) => {
    Profile.findOne({user: req.user.id})
        .then(profile => {
            if(!profile) {
                res.status(404).send('Profile not found')
            } else {
               const removeIndex = profile.workrole.map(item => item.id).indexOf(req.params.id)
               if(removeIndex === -1) {
                   return res.status(404).send('Workrole is not found with the given id');
               }
               profile.workrole.splice(removeIndex,1);
               profile.save()   
                .then(profile => res.json(profile)) 
                .catch(err => res.status(400).json(err))
            }
        })
        .catch(err => res.status(400).json(err))
}

module.exports = {
    getProfile,
    createProfile,
    getProfileByUsername,
    getAllProfiles,
    deleteProfile,
    addWorkrole,
    deleteWorkrole
}