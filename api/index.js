const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const courierList = require("./routes/courier_list");
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.Mongoose_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('connect MongoDb'))
    .catch(err => console.log('Mongo err', err))

//use all routes 

app.use("/api/courier", courierList)

app.get('/', (req, res) => {
    res.send('Fast Express API')
})

app.listen("4000", () => {

    console.log("backend is running");
})

