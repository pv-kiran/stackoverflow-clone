/**
 *   @swagger
 *     tags:
 *       name: User
 *       description: API for user registration and login
 */

/**
 *     @swagger
 *      /api/auth/registration:
 *       post:
 *         tags: [User]
 *         summary: Route for user registration
 *         description: It is post route for user regitration. User can 
 *                      complete the registration purpose by submitting 
 *                      the name,email and password
 *         produces:
 *            - application/json
 *         consumes: 
 *            - application/json
 *         requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        name:
 *                          type: string
 *                        email:
 *                          type: string
 *                        password:
 *                          type: string     
 *         responses:
 *             201:
 *               description: User registration is successfull
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        message:
 *                          type: string
 *                        name:
 *                          type: string
 *                        mail:
 *                          type: string
 *                      example: 
 *                          message: user creation is successfull
 *                          name: myname
 *                          email: myemail
 *             400:
 *               description: Bad request. Please submit valid name
 *                             email , password
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */


/**
 *     @swagger
 *      /api/auth/login:
 *       post:
 *         tags: [User]
 *         summary: Route for user login
 *         description: This is a post route for user login. User can 
 *                      login by submitting email and password
 *         produces:
 *            - application/json
 *         consumes: 
 *            - application/json
 *         requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        email:
 *                          type: string
 *                        password:
 *                          type: string             
 *         responses:
 *             200:
 *               description: User login is successfull
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        user:
 *                          type: object
 *                          properties:
 *                            name:
 *                              type: string
 *                            mail:
 *                              type: string
 *                        token:
 *                          type: string
 *                        
 *                      example: 
 *                          user:
 *                            name: myname
 *                            email: myemail
 *                          token: dfgfsgfssfcpeiqwoeuiedcm632325nd
 *             400:
 *               description: Bad request. Please submit valid
 *                             email , password
 *             404:
 *               description: User not found with this email
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */



/**
 *     @swagger
 *      /api/profile:
 *       post:
 *         tags: [User]
 *         summary: Route for creating the profile
 *         description: This is a post route for creating user profile. 
 *         produces:
 *            - application/json
 *         consumes: 
 *            - application/json
 *         requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        username:
 *                          type: string
 *                        website:
 *                          type: string  
 *                        country:
 *                          type: string
 *                        proagramminglang:
 *                          type: string    
 *                        portfolio:
 *                          type: string
 *                        youtube:
 *                          type: string 
 *                        instagram:
 *                          type: string
 *                        linkedin:
 *                          type: string 
 *         responses:
 *             200:
 *               description: User lProfile creation is success
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        username:
 *                          type: string
 *                        website:
 *                          type: string  
 *                        country:
 *                          type: string
 *                        proagramminglang:
 *                          type: array
 *                          items:
 *                            type: string    
 *                        portfolio:
 *                          type: string
 *                        social:
 *                          type: object
 *                          properties:
 *                               youtube:
 *                                type: string 
 *                               instagram:
 *                                type: string
 *                               linkedin:
 *                                type: string
 *                        workrole: 
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                   role:
 *                                    type: string
 *                                   company: 
 *                                    type: string
 *                                   country:
 *                                    type: string
 *                                   current: 
 *                                    type: boolean 
 *             400:
 *               description: Bad request. Please submit valid
 *                            data
 *             401:
 *               description: unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */



/**
 *     @swagger
 *      /api/profile:
 *       get:
 *         tags: [User]
 *         summary: Route for fetching profile details of the current user
 *         description: This is a get route for fetching the current user profile. 
 *         responses:
 *             200:
 *               description: Success
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        username:
 *                          type: string
 *                        website:
 *                          type: string  
 *                        country:
 *                          type: string
 *                        proagramminglang:
 *                          type: array
 *                          items:
 *                            type: string    
 *                        portfolio:
 *                          type: string
 *                        youtube:
 *                          type: string 
 *                        instagram:
 *                          type: string
 *                        linkedin:
 *                          type: string
 *                        workrole: 
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                   role:
 *                                    type: string
 *                                   company: 
 *                                    type: string
 *                                   country:
 *                                    type: string
 *                                   current: 
 *                                    type: boolean 
 *             400:
 *               description: Bad request.  
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */



/**
 *     @swagger
 *      /api/profile/{username}:
 *       get:
 *         parameters: 
 *            - in: path
 *              name: username
 *              schema: 
 *                type: string
 *              required: true
 *              description: Job id
 *         tags: [User]
 *         summary: Route for fetching user profile by username
 *         description: This is a get route to fetch user profile by its username
 *         
 *         responses:
 *             200:
 *               description: Success
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        username:
 *                          type: string
 *                        website:
 *                          type: string  
 *                        country:
 *                          type: string
 *                        proagramminglang:
 *                          type: array
 *                          items:
 *                            type: string    
 *                        portfolio:
 *                          type: string
 *                        youtube:
 *                          type: string 
 *                        instagram:
 *                          type: string
 *                        linkedin:
 *                          type: string
 *                        workrole: 
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                   role:
 *                                    type: string
 *                                   company: 
 *                                    type: string
 *                                   country:
 *                                    type: string
 *                                   current: 
 *                                    type: boolean
 *             400:
 *               description: Bad request
 *             404:
 *               description: Job not found with this username
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */


/**
 *     @swagger
 *      /api/profile/find/all:
 *       get:
 *         tags: [User]
 *         summary: Route for fetching all the user profiles
 *         description: This is a get route for fetching all user profile. 
 *         responses:
 *             200:
 *               description: Success
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        username:
 *                          type: string
 *                        website:
 *                          type: string  
 *                        country:
 *                          type: string
 *                        proagramminglang:
 *                          type: array
 *                          items:
 *                            type: string    
 *                        portfolio:
 *                          type: string
 *                        youtube:
 *                          type: string 
 *                        instagram:
 *                          type: string
 *                        linkedin:
 *                          type: string
 *                        workrole: 
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                   role:
 *                                    type: string
 *                                   company: 
 *                                    type: string
 *                                   country:
 *                                    type: string
 *                                   current: 
 *                                    type: boolean
 *             400:
 *               description: Bad request.
 *             401:
 *               description: Unauthorized
 *             404:
 *               description: Users not found
 *             500: 
 *               description: Internal server error
 *      
 */


/**
 *     @swagger
 *      /api/profile/workrole:
 *       post:
 *         tags: [User]
 *         summary: Route for adding the work experience
 *         description: This is a post route for adding the work experience. 
 *         produces:
 *            - application/json
 *         consumes: 
 *            - application/json
 *         requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        role:
 *                          type: string
 *                        company:
 *                          type: string  
 *                        country:
 *                          type: string
 *                        current:
 *                          type: boolean    
 *         responses:
 *             200:
 *               description: User lProfile creation is success
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        username:
 *                          type: string
 *                        website:
 *                          type: string  
 *                        country:
 *                          type: string
 *                        proagramminglang:
 *                          type: array
 *                          items:
 *                            type: string    
 *                        portfolio:
 *                          type: string
 *                        youtube:
 *                          type: string 
 *                        instagram:
 *                          type: string
 *                        linkedin:
 *                          type: string
 *                        workrole: 
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                   role:
 *                                    type: string
 *                                   company: 
 *                                    type: string
 *                                   country:
 *                                    type: string
 *                                   current: 
 *                                    type: boolean
 *             400:
 *               description: Bad request. Please submit valid
 *                             data
 *             401:
 *               description: Unauthorized
 *             404:
 *               description: Profile not found
 *             500: 
 *               description: Internal server error
 *      
 */


/**
 *     @swagger
 *      /api/profile/workrole/{id}:
 *       delete:
 *         tags: [User]
 *         parameters: 
 *            - in: path
 *              name: id
 *              schema: 
 *                type: string
 *              required: true
 *              description: workrole id
 *         summary: Route for deleting the workrole
 *         description: This is a delete route to delete the workrole
 *         
 *         responses:
 *             200:
 *               description: Delete Success
 *             400:
 *               description: Bad request. Please submit valid  id
 *             404:
 *               description: Profile not found with this Id
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */




/**
 *   @swagger
 *     tags:
 *       name: Question
 *       description: API for creating and deleting quesion and its
 *                    answers
 */


/**
 *     @swagger
 *      /api/question:
 *       post:
 *         tags: [Question]
 *         summary: Route for creating the question
 *         description: It is post route for creating the question
 *         produces:
 *            - application/json
 *         consumes: 
 *            - application/json
 *         requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        question:
 *                          type: string
 *                        code:
 *                          type: string  
 *         responses:
 *             201:
 *               description: question is created successfully
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        user:
 *                          type: string
 *                        name:
 *                          type: string
 *                        question:
 *                          type: string
 *                        code: 
 *                          type: string
 *                        date:
 *                          type: string
 *                        _id:
 *                          type: string
 *                        answer:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              _id:
 *                                type: string
 *                              answer: 
 *                                type: string
 *                        upvotes:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              _id:
 *                                type: string
 *                              user: 
 *                                type: string
 *                          
 *             400:
 *               description: Bad request. Please submit valid data
 *             404:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */


/**
 *     @swagger
 *      /api/question/answer/{id}:
 *       post:
 *         tags: [Question]
 *         parameters: 
 *            - in: path
 *              name: id
 *              schema: 
 *                type: string
 *              required: true
 *              description: question id
 *         summary: Route for posting answers for the question
 *         produces: 
 *              application/json
 *         consumes:
 *              application/json
 *         requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        answer:
 *                          type: string
 *         responses:
 *             201:
 *               description: question is created successfully
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        user:
 *                          type: string
 *                        name:
 *                          type: string
 *                        question:
 *                          type: string
 *                        code: 
 *                          type: string
 *                        date:
 *                          type: string
 *                        _id:
 *                          type: string
 *                        answer:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              _id:
 *                                type: string
 *                              answer: 
 *                                type: string
 *                              user:
 *                                type: string
 *                              date:
 *                                type: string
 *                        upvotes:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              _id:
 *                                type: string
 *                              user: 
 *                                type: string
 *                          
 *             400:
 *               description: Bad request. Please submit data
 *             404:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */


/**
 *     @swagger
 *      /api/question/all:
 *       get:
 *         tags: [Question]
 *         summary: Route for fetching all the questions
 *         description: This is a get route for fetching all questions
 *         responses:
 *             200:
 *               description: successfull
 *               content:
 *                  application/json:
 *                    schema:
 *                     type: array
 *                     items: 
 *                      type: object
 *                      properties:
 *                        user:
 *                          type: string
 *                        name:
 *                          type: string
 *                        question:
 *                          type: string
 *                        code: 
 *                          type: string
 *                        date:
 *                          type: string
 *                        _id:
 *                          type: string
 *                        answer:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              _id:
 *                                type: string
 *                              answer: 
 *                                type: string
 *                              user:
 *                                type: string
 *                              date:
 *                                type: string
 *                        upvotes:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              _id:
 *                                type: string
 *                              user: 
 *                                type: string
 *                          
 *             400:
 *               description: Bad request. 
 *             404:
 *               description: Questions not found
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */



/**
 *     @swagger
 *      /api/question/upvote/{id}:
 *       post:
 *         tags: [Question]
 *         parameters: 
 *            - in: path
 *              name: id
 *              schema: 
 *                type: string
 *              required: true
 *              description: question id
 *         summary: Route for upvoting the question
 *         responses:
 *             200:
 *               description: Upvoted successfully
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        user:
 *                          type: string
 *                        name:
 *                          type: string
 *                        question:
 *                          type: string
 *                        code: 
 *                          type: string
 *                        date:
 *                          type: string
 *                        _id:
 *                          type: string
 *                        answer:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              _id:
 *                                type: string
 *                              answer: 
 *                                type: string
 *                              user:
 *                                type: string
 *                              date:
 *                                type: string
 *                        upvotes:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              _id:
 *                                type: string
 *                              user: 
 *                                type: string
 *                          
 *             400:
 *               description: Bad request. Please submit valid id
 *             404:
 *               description: Question not found
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */


/**
 *     @swagger
 *      /api/question/search:
 *       get:
 *         tags: [Question]
 *         parameters: 
 *            - in: query
 *              name: question
 *              schema: 
 *                type: string
 *              required: true
 *              description: Search by question
 *         summary: Route for searching the questions.
 *         responses:
 *             200:
 *               description: successfull
 *               content:
 *                  application/json:
 *                    schema:
 *                     type: array
 *                     items: 
 *                      type: object
 *                      properties:
 *                        user:
 *                          type: string
 *                        name:
 *                          type: string
 *                        question:
 *                          type: string
 *                        code: 
 *                          type: string
 *                        date:
 *                          type: string
 *                        _id:
 *                          type: string
 *                        answer:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              _id:
 *                                type: string
 *                              answer: 
 *                                type: string
 *                              user:
 *                                type: string
 *                              date:
 *                                type: string
 *                        upvotes:
 *                          type: array
 *                          items:
 *                            type: object
 *                            properties:
 *                              _id:
 *                                type: string
 *                              user: 
 *                                type: string
 *                          
 *             400:
 *               description: Bad request. 
 *             404:
 *               description: Question not found
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */










