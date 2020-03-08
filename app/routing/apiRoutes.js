var friends = require("../data/friends")

function apiRoutes(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
       var newFriend = [];
       var totalDifference = 0;

       var user = req.body
        for (let i = 0; i < friends.length; i++) {

            for (let j = 0; j < friends[i].scores.length; j++) {
                   totalDifference = totalDifference + friends[i].scores[j] -  parseInt(user.score[j])

            }

        }


        friends.push(req.body)


        res.json(friends)
    })
}

module.exports = apiRoutes