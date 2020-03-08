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
           totalDifference = 0;
            for (let j = 0; j < friends[i].scores.length; j++) {
                   totalDifference = totalDifference + Math.abs(friends[i].scores[j] -  parseInt(user.scores[j]))

            }
            newFriend.push({
                name: friends[i].name,
                photo: friends[i].photo,
                totalDifference: totalDifference
            })
        }


        friends.push(req.body)

        newFriend.sort((a,b) => {
           return a.totalDifference - b.totalDifference
        }) 
        console.log(newFriend)
        res.json(newFriend[0])
    })
}

module.exports = apiRoutes