var express = require("express")
var app = express()

var PORT = process.env.PORT || 8080


//Takes users data and converts into JSON 
//in post/req.body

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static("public"))

var apiRoutes = require("./app/routing/apiRoutes")
var htmlRoutes = require("./app/routing/htmlRoutes")

apiRoutes(app)
htmlRoutes(app)

app.listen(PORT,function(){
    console.log("app is listening http://localhost:" + PORT )
})
