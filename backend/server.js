const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("hellld")
    // res.json({ message: "ho"})
})

let port = process.env.PORT || 3000

app.listen(port)

