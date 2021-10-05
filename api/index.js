const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = process.env.PORT || 5500;
const couriers = require("./routes/couriers");
const customers = require("./routes/customers");
const categories = require("./routes/categories");

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
app.use("/api/customers", customers)
app.use("/api/categories", categories)

app.get('/', (req, res) => {
    res.send('Fast Express API')
})

app.listen(port, () => {
    console.log(`${port}`, 'server connected')
  })
  

