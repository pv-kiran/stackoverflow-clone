// Setting up the express
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
require('dotenv').config();



// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xssClean = require('xss-clean');
const expressRateLimit = require('express-rate-limit');

app.set('trust proxy', 1)
app.use(expressRateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
}))
app.use(helmet());
app.use(cors());
app.use(xssClean());




// middleware for passport
const passport = require('passport');
app.use(passport.initialize());
require('./strategies/jwtstrategies');



//Setting up the routes
const auth = require('./routes/auth')
const profile = require('./routes/profile');
const question = require('./routes/question');
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/question',question);



// swagger documentation
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Stackoverflow clone API',
      version: '1.0.0',
      description: 'A simple stack overflow API'
    },
    servers: [
      {
          url: "http://localhost:3000"
      }
    ] ,
    components: {
      securitySchemes: {
        jwt: {
          type: "http",
          scheme: "bearer",
          in: "header",
          bearerFormat: "JWT"
        },
      }
    },
    security: [{
      jwt: []
    }]
  },
  apis: ["swagger.js"]
};

const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));









// setting up the mongoose and connecting the mongodb
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`Connected to database succesfully`)
    })
    .catch(err => {
        console.log(err)
    });



app.get('/',  (req, res) => {
  res.send('Hello World')
})

app.listen(3000)