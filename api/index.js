const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const couriers = require("./routes/couriers");
const users = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.Mongoose_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('connect MongoDb'))
    .catch(err => console.log('Mongo err', err))

//use all routes 

app.use("/api/couriers", couriers)
app.use("/api/users", users)

app.get('/', (req, res) => {
    res.send('Fast Express API')
})

app.listen("4200", () => {

    console.log("backend is running");
})

