//  Dependencies
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const routes = require("./routes");
const PORT = process.env.PORT || 3000
const app = express()

// Body Parser
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portmsg", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, () => {
    console.log(`PORT: ${PORT} if on localhost --> http://localhost:${PORT}`)
})