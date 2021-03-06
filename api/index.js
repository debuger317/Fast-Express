const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5500;
const categories = require("./routes/categories");
const users = require("./routes/users")
const admin = require("./routes/admin")
const orders = require("./routes/orders")
const payment = require("./routes/paymentInfo")
const merchants = require("./routes/merchant")
const deliveryBoy = require("./routes/deliveryservices")
const auth = require("./routes/auth")
const review = require("./routes/review")
const blog = require("./routes/blog")
const dashboard = require("./routes/dashboard")

dotenv.config();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.Mongoose_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('connect MongoDb'))
    .catch(err => console.log('Mongo err', err))

//use all routes 

app.use("/api/categories", categories)
app.use("/api/merchant", merchants)
app.use("/api/delivery/boy", deliveryBoy)
app.use("/api/auth", auth)
app.use("/api/user", users)
app.use("/api/admin", admin)
app.use("/api/order", orders)
app.use("/api/payment", payment)
app.use("/api/reviews", review)
app.use("/api/blog", blog)
app.use("/api/dashboard", dashboard)

app.get('/', (req, res) => {
    res.send('Fast Express API')
})

app.listen(port, () => {
    console.log(`${port}`, 'server connected')
})


