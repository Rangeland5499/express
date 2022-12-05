import authorization from "../middlewares/auth.js"
export default function oste(app){
    app.get("/oste",authorization,function(request,response){
        response.json([
            {
                id:1,
                name:"feta",
            },
            {
                id:2,
                name:"gouda",
            },
            {
                id:3,
                name:"feta",
            }
        ])
        response.end()

    })
}