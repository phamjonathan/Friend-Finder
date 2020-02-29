var friends = require("../data/friends")

function apiRoutes(app){

    app.get("/api/friends", function(req,res){
        res.json(friends)
    })

    app.post("/api/friends", function(req,res){
        friends.push(req.body)
        res.json(friends)
    })
}

module.exports = apiRoutes