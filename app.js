import express from "express";
// import hej from "./routes/hej.js"
import oste from "./routes/ost.js"

const app = express()

app.use(express.static("./public"))
oste(app)

// hej(app)

// app.get("/hej/:navn", function(request,response){
//     response.setHeader("content-type","text/html")
//     response.send("<link rel='stylesheet' href='/style.css'>"
//    + "<h1>Hej "+request.params.navn +"</h1>" )
//     response.end()
// })



// app.get("/nogetandet",function(request,response){
//     response.send("noget andet")  
// })


app.listen(1337,function(){
    console.log("The app is listening on port 1337")
})
