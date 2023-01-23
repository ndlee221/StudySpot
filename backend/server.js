const {MongoClient} = require('mongodb')

const express = require("express")
const app = express()

var cors = require('cors')
app.use(express.urlencoded({extended: true}))
app.use(cors())


async function main(client) {
    try {
        await client.connect()
        console.log("correctly connected to client")
    } catch(e) {
        console.error(e)
    }
}

app.get("/building/:name", async function buildingRouter(req, res) {
    res.set('Access-Control-Allow-Origin', '*');

    const client = new MongoClient("mongodb+srv://studyspot:nwhacks15@studyspot.lyx6wd3.mongodb.net/?retryWrites=true&w=majority");
    console.log("before main call");
    main(client)
    console.log("after main call");
    const db = client.db("studyspot");
    const collection = db.collection("building");
    console.log("0");


    const params = req.params.name
    console.log(params)
    const query = {name: params};
    const building = await collection.findOne(query);
    res.json(building)
    client.close()
})

app.get("/building/:name/avail/:busy/time/:last_updated_time/day/:last_updated_day/month/:last_updated_month", async function buildingRouter(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    
    const client = new MongoClient("mongodb+srv://studyspot:nwhacks15@studyspot.lyx6wd3.mongodb.net/?retryWrites=true&w=majority");
    main(client)
    const db = client.db("studyspot");
    const collection = db.collection("building");

    const filter = { name: req.params.name };
    const updateDocument = {
    $set: {
        busy: parseInt(req.params.busy),
        last_updated_time: req.params.last_updated_time,
        last_updated_day: parseInt(req.params.last_updated_day),
        last_updated_month: req.params.last_updated_month
        }
    };

    const result = await collection.updateOne(filter, updateDocument);

    res.json(result)
    client.close()
})


app.get("/building/:name/dte/:date/msg/:message/rate/:rating", async function buildingRouter(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    
    const client = new MongoClient("mongodb+srv://studyspot:nwhacks15@studyspot.lyx6wd3.mongodb.net/?retryWrites=true&w=majority");
    main(client)
    const db = client.db("studyspot");
    const collection = db.collection("building");

    const filter = { name: req.params.name };
    const updateDocument = {
    $push: {
        "reviews": {
            date: req.params.date,
            message: req.params.message.replaceAll("_", " "), 
            rating: parseInt(req.params.rating)
        }
    }
    };
    console.log(updateDocument);    

    const result = await collection.updateOne(filter, updateDocument);

    res.json(result)
    client.close()
})

app.get("/avg/:name", async function buildingRouter(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    
    const client = new MongoClient("mongodb+srv://studyspot:nwhacks15@studyspot.lyx6wd3.mongodb.net/?retryWrites=true&w=majority");
    main(client)
    const db = client.db("studyspot");
    const collection = db.collection("building");

    const cursor = collection.aggregate([
        { $unwind: "$reviews" },
        { $group : {"_id": "$_id", name: {"$first": "$name"}, avgRating : { $avg : "$reviews.rating" } } }
    ]);
    for await (const doc of cursor) {
        if (doc.name == req.params.name) {
            res.json(doc.avgRating)
        }
    }

    client.close()
})

let port = process.env.PORT || 3000
app.listen(port)

