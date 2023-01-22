const {MongoClient} = require('mongodb')

const express = require("express")
const app = express()

async function main(client) {
    try {
        await client.connect()
        console.log("correctly connected to client")
    } catch(e) {
        console.error(e)
    }
}

app.get("/building/:name", async function buildingRouter(req, res) {
    const client = new MongoClient("mongodb+srv://studyspot:nwhacks15@studyspot.lyx6wd3.mongodb.net/?retryWrites=true&w=majority");
    main(client)
    const db = client.db("studyspot");
    const collection = db.collection("building");

    const params = req.params.name
    console.log(params)
    const query = {name: params};
    const building = await collection.findOne(query);
    console.log(building);
    res.json(building)
    client.close()
})

app.get("/building/:name/avail/:busy/time/:last_updated_time/day/:last_upated_day/month/:last_updated_month", async function buildingRouter(req, res) {
    const client = new MongoClient("mongodb+srv://studyspot:nwhacks15@studyspot.lyx6wd3.mongodb.net/?retryWrites=true&w=majority");
    main(client)
    const db = client.db("studyspot");
    const collection = db.collection("building");

    console.log(req.params.name)
    const filter = { name: req.params.name };
    console.log(req.params.busy)
    console.log(req.params.last_updated_time)
    console.log(typeof(req.params.last_upated_day))
    console.log(req.params.last_updated_month)
     
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

let port = process.env.PORT || 3000
app.listen(port)

