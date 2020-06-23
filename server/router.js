module.exports = function (app) {     // syntax for exporting!
    // define a route the user can visit

    // app.get()  maps to the request TYPE that will be expected, another example would be app.post()
    // first argument will be the route we want to handle

    // if the user goes to '/' then it will run the function below
    app.get('/', function (req, res, next) {
        // req: request, object that contains incomeing http request. ex: where its coming from, what it is looking for
        // res: response, allows us to response 
        // next:

        res.send(['waterbottle', 'phone', 'paper']);

    })

} 