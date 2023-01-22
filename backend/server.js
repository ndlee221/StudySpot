const {MongoClient} = require('mongodb')
// require("dotenv").config()

const express = require("express")
const app = express()
// const mongoose = require("mongoose")

// const url = "mongodb+srv://studyspot:nwhacks15@studyspot.lyx6wd3.mongodb.net/?retryWrites=true&w=majority"
// const client = new MongoClient(url)

async function main() {
    // const url = "mongodb+srv://studyspot:nwhacks15@studyspot.lyx6wd3.mongodb.net/?retryWrites=true&w=majority"
    //const client = new MongoClient(url)
    try {
        await client.connect()
    } catch(e) {
        console.error(e)
    }
    // const db = client.db("studyspot");
    // const collection = db.collection("building");

}

// const db = client.db("studyspot");
// const collection = db.collection("building");


app.get("/building/:name", async function buildingRouter(req, res) {
    const client = new MongoClient("mongodb+srv://studyspot:nwhacks15@studyspot.lyx6wd3.mongodb.net/?retryWrites=true&w=majority");
    await client.connect()
    const db = client.db("studyspot");
    const collection = db.collection("building");

    const params = req.params.name
    // res.send(JSON.stringify(params))
    const query = {name: params};
    const building = collection.findOne(query);
    res.send(building)
})

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }) // database connection
// const db = mongoose.connection
// db.on("error", (error) => console.log(error))
// db.once("open", () => console.log("conneted to db"))

/////

// app.get("/", (req, res) => {
//     res.send("hello buildings page")    
// })

// app.post("/", (req, res) => {
//     res.send("create new review")
// })

// app.get("/:building/", (req, res) => {
//     const params = req.params.building
//     // res.send(JSON.stringify(params))
//     const query = {name: params};
//     const building = collection.findOne(query);
//     res.send(building)
// })

// app.route("/:spot")
//     .get((res, req) => {
//         const query = req.query
//         res.json(query)
//     })
//     .put((res, req) => {
//         res.send(`Update building with name ${req.params.name}`)
//     })

// const spots = [] // spots is all the spots from database

// app.param("spot", (req, res, next, spot) => {
//     req.spot = spots[spot]
//     next()
// })

// // 

// const buildingsRouter = require('./routes/buildings')
// app.use('/buildings', buildingsRouter)

let port = process.env.PORT || 3000
app.listen(port)

