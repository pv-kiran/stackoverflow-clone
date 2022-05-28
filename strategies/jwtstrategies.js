const User = require('../Models/User');
const passport = require('passport')

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'mysecretkey';

passport.use(new JwtStrategy(opts, (jwt_payload,done) => {
        User.findById(jwt_payload.id)
            .then(user => {
                if(user) {
                    return done(null , user)
                } else {
                    return done(null, false);
                }
            })
            .catch(err => console.log(err))
}));
