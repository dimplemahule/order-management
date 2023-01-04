const bodyParser = require("body-parser")
const express = require("express")

const mongoose = require("mongoose")
const router = require("./Routes/router")

const app = express()
app.use(bodyParser.json())

app.use("/",router)

mongoose.connect("mongodb+srv://LalitaMahule:lali123456789@cluster0.ypjvt.mongodb.net/CustomerDiscountApp?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
.then( () => console.log("MongoDB is connected"))
.catch ( ( err => console.log(err)))



app.listen(3000, function () {
  console.log("Express app running on port " + 3000);
});

